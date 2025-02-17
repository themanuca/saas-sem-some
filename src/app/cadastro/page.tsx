"use client";

import { Header } from "@/components/header";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app, analytics } from "../../../firebaseConfig";
import { gerarLinkPersonalizado } from "@/components/linkPersonalizado";
import { gerarQRCode, gerarQRCodeParaCasal } from "@/components/qrCode";
import handlerSalvarForms from "../salvarForms/salvarSite";
import useMercadoPago from "../hook/useMercadoPago";

type DadosFormulario = {
  method:string;
    body:{
        titulo: string;
        declaracao: string;
        dataInicio: string; // Data no formato string (ex: "2025-01-01")
        tempoJuntos: string;
        imagens: string[]; // Array de URLs ou caminhos de imagens
        emailUser: string; // E-mail do usuário
        linkPersonalizado:string;
        qrCode:string
  }
};
export default function CriarPagina() {

  const [titulo, setTitulo] = useState("");
  const [declaracao, setDeclaracao] = useState("");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [tempoJuntos, setTempoJuntos] = useState("");
  const [imagens, setImagens] = useState<string[]>([]);
  const [isDisable, setDisable] = useState<boolean>(true);
  const [emailUser, setEmailUser] = useState<string>("");
  const [isModalEmail, setModalEmail] = useState<boolean>(false);
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [emailInVaid, setEmailInVaid] = useState<boolean>(false)

  const { createMercadoPagoCheckout } = useMercadoPago();
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if(imagens.length >=4){
        return
      }
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagens((prev) => [...prev, ...filesArray]);
      // e.target.value = "";
    }
  };
  const handleForms=()=>{
    if(titulo && declaracao && dataInicio && tempoJuntos && imagens){
      setDisable(false)
    }

  }
  
  const handleSubmitModalEmail = async ()=>{
    debugger
    if(!emailUser){
      setEmailInVaid(true)
      return
    }else if(!emailUser.match(isValidEmail)){
      setEmailInVaid(true)
      return
    }

    const linkPersonalizado = gerarLinkPersonalizado(titulo, dataInicio);
    const qrCode = await gerarQRCode(linkPersonalizado);

    const dados:DadosFormulario = {
      body: {
        titulo,
        declaracao,
        dataInicio,
        tempoJuntos,
        imagens,
        emailUser,
        linkPersonalizado,
        qrCode
      },
      method: ""
    };

    try {
      debugger
      var submitSalvar =  await handlerSalvarForms(dados);
      if(submitSalvar?.status === 200){
        
        alert("Usuário salvo com sucesso!");
        createMercadoPagoCheckout(dados.body)
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar o usuário.");
    }
  };

  useEffect(() => {
    if (dataInicio) {
      const inicio = new Date(dataInicio);
      const agora = new Date();
      const diffMilissegundos = agora.getTime() - inicio.getTime();

      const anos = Math.floor(diffMilissegundos / (1000 * 60 * 60 * 24 * 365.25));
      const meses = Math.floor(
        (diffMilissegundos % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30)
      );
      const dias = Math.floor(
        (diffMilissegundos % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );

      setTempoJuntos(`${anos} anos, ${meses} meses e ${dias} dias`);
    }
  }, [dataInicio]);

  return (
    <div className="bg-gray-200  py-10 lg:px-6">
      <Header/>
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-pink-100 via-red-100 to-pink-200 min-h-screen max-w-7xl mx-auto  p-6 gap-6">
            <div className="w-full lg:w-1/2 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-extrabold mb-6 text-pink-600">Crie sua página especial ❤️</h1>
                    <form onChange={handleForms}>
                        <div className="mb-6">
                        <label className="block font-bold mb-2 text-gray-700">Título do site</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className="border rounded-lg p-3 w-full text-gray-800 shadow-sm"
                            placeholder="Digite o título do seu site"
                        />
                        </div>

                        <div className="mb-6">
                        <label className="block font-bold mb-2 text-gray-700">Declaração</label>
                        <textarea
                            value={declaracao}
                            onChange={(e) => setDeclaracao(e.target.value)}
                            className="border rounded-lg p-3 w-full text-gray-800 shadow-sm"
                            rows={5}
                            placeholder="Escreva uma mensagem especial"
                            maxLength={500}
                        />
                        </div>

                        <div className="mb-6">
                        <label className="block font-bold mb-2 text-gray-700">Data de início</label>
                        <input
                            type="date"
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                            className="border rounded-lg p-3 w-full text-gray-800 shadow-sm"
                        />
                        </div>

                        <div className="mb-6">
                        <label className="block font-bold mb-2 text-gray-700">Fotos (Máximo 4)</label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}    
                            className="border rounded-lg p-3 w-full text-gray-800 shadow-sm 
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-pink-500
                            hover:file:bg-pink-300"
                        />
                        </div>
                        <button
                          type="button"
                          onClick={(e)=>setModalEmail(true)}
                          className={` text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ${
                            isDisable 
                            ?"bg-gray-300"
                            :"bg-pink-500  hover:bg-pink-600"
                            }`}
                          disabled = {isDisable}
                        >
                          Confirmar
                        </button>
                    </form>
            </div>

             {isModalEmail && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
                      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                          Insira seu e-mail  
                        </h2>
                        <p className="text-gray-600 mb-4">
                          Precisamos do seu e-mail para enviar o QR Code.
                        </p>
                        {emailInVaid
                          ?<p className="text-red-500 mb-4"> Email Invalido </p>
                          :""
                        }
                        <input
                          type="email"
                          value={emailUser}
                          onChange={(e) => setEmailUser(e.target.value)}
                          placeholder="Digite seu e-mail"
                          className={`w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 `}
                        />
                        <div className="flex justify-end space-x-3">
                          <button
                            className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
                            onClick={() => setModalEmail(false)}
                          >
                            Cancelar
                          </button>
                          <button
                            className="px-4 py-2 rounded bg-pink-600 text-white hover:bg-pink-700 transition"
                            onClick={handleSubmitModalEmail}
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                      
              <div className="w-full lg:w-1/2 p-6 bg-white shadow-md rounded-lg border-l">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Pré-visualização</h2>
                      <div className="border p-6 rounded-lg bg-gray-50">
                        <h1 className="text-4xl font-extrabold mb-6 text-pink-500">
                        {titulo || "Seu Título Aqui"}
                        </h1>
                        <p className="mb-6 text-lg text-gray-700">
                        {declaracao || "Sua declaração especial aparecerá aqui..."}
                        </p>
                        <p className="italic text-gray-600 text-sm mb-6">
                        {tempoJuntos || "Selecione a data de início para calcular o tempo juntos."}
                        </p>

                        {imagens.length > 0 ? (
                          <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: false }}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            spaceBetween={20}
                            slidesPerView={1}
                            className="rounded-lg"
                          >
                            {imagens.map((img, index) => (
                              <SwiperSlide key={index}>
                                <img
                                  src={img}
                                  alt={`Foto ${index + 1}`}
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                        ) : (
                        <div className="text-center text-gray-500 italic">
                            Adicione algumas fotos para pré-visualizar!
                        </div>
                        )}
                      </div>
              </div>
        </div>
    </div>
  );
}


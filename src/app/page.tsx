"use client"
import { ComoFunciona } from "@/components/comoFunciona";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";



export default  function Home() {

  return (
    <div>
      <div className="p-5 lg:p-0" id="sobre">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8 bg-[radial-gradient(circle_at_50%_75%,#FF4E6D,transparent_31%)] lg:bg-[radial-gradient(circle_at_75%,#FF4E6D,transparent_31%)] mt-7 p-6 lg:p-12 rounded-xl min-h-screen">
                  <div className="">
                    <h1 className="text-left font-extrabold text-4xl lg:text-5xl text-gray-800 pb-5 leading-tight" > Transforme sentimentos em presentes inesquecíveis. </h1>
                    <p className="text-left text-lg lg:text-xl text-gray-600 leading-relaxed mb-4">
                      Cada história de amor merece ser contada de forma única. Transformamos suas memórias e declarações em presentes criativos e personalizados. 
                      Celebre momentos marcantes com magia, porque todo amor é uma obra de arte.      
                    </p>
                    <div className="relative h-16 lg:h-14 w-full lg:w-80  pt-3">
                      <Link href="/cadastro" >
                        <button className="bg-pink-500 hover:bg-pink-600 transition duration-300 text-white font-bold py-3 px-6 rounded-lg w-full lg:w-auto text-lg">
                            Criar meu presente
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex justify-center"> 
                      <Image src={"/imageSOBRE.jpg"} 
                      alt={"Imagem love"} 
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                      >
                      </Image>
                  </div>
              </div>
          </main>
      </div>
      <ComoFunciona/>
    </div>
  );
}

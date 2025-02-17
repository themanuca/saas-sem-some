"use client"

import { useEffect, useState } from "react";
import { app, analytics } from "../../../../firebaseConfig";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";

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
  } };
  
export default function PaginaCasal(){

    const params = useParams(); // Captura os parâmetros da URL
    const casalLink = params?.casalpage as string;

    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const db = getFirestore(app);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!casalLink) return;
      
      try {
        debugger
        const docRef = collection(db, "usuarios"); 
        const q = query(docRef, where("linkPersonalizado", "==", casalLink));
        const docSnap = await getDocs(q);

        if (!docSnap.empty) {
          setUserData(docSnap.docs[0].data());
        } else {
          console.log("Nenhum usuário encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [casalLink]);

return(
    <div>
        <h1> TESTE  teste {}</h1>
    </div>
);
}
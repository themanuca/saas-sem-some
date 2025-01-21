import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "ComTodoAmor | Crie sua VAGABNDA",
  description: "Demonstre para o seu amor",
};
export default function Home() {
  return (
    <div className="p-5">
      <main className=" max-w-[90%] lg:max-w-6xl mx-auto">
            <div className=" flex flex-col lg:flex-row justify-between gap-4 items-center bg-[radial-gradient(circle_at_50%_75%,#FF4E6D,transparent_31%)] lg:bg-[radial-gradient(circle_at_75%,#FF4E6D,transparent_31%)] mt-7">
                <div className="">
                  <h1 className="text-left font-bold  text-4xl text-balance pb-5" > Transforme sentimentos em presentes inesquecíveis. </h1>
                  <p className="text-left justify-center text-balance">
                    Acreditanos que cada história de amor merece ser contada de forma única e especial. 
                    Nosso site transforma suas memórias, declarações e momentos marcantes em um presente criativo e personalizado. 
                    Seja para comemorar um aniversário, um marco importante ou simplesmente para dizer “eu te amo”, estamos aqui para tornar cada detalhe mais mágico.

                    Porque todo amor merece ser celebrado como uma obra de arte.      
                  </p>
                  <div className="relative h-16 lg:h-14 w-full lg:w-80  pt-3">
                    <a href="/create">
                      <button className="bg-primarypink w-full h-full rounded-md border border-pink-400 font-bold text-2xl z-10">
                          Criar meu presente
                      </button>
                    </a>
                  </div>
                </div>

                <div className="w-full"> 
                    <Image src={"/imageSOBRE.jpg"} 
                    alt={"Imagem love"} 
                    width={1800}
                    height={120}
                    className="rounded-lg"
                    >
                    </Image>
                </div>
            </div>
        </main>
    </div>
  );
}

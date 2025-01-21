import Image from "next/image";

export function Sobre(){
    return(
        <main className="w-full bg-cover bg-red-400">
            <div className="space">
                <div className="text-left font-bold text-5xl text-wrap"> Transforme sentimentos em presentes inesquecíveis. </div>
                <div> 
                    <Image src={"/imageSOBRE.jpg"} 
                    alt={"Imagem love"} 
                    width={170}
                    height={50}
                    >

                    </Image>
                </div>
            </div>
        </main>
    )
}
import Link from "next/link";
import iconeTitulo from "../../../public/iconeTitulo.svg"
import Image from "next/image";



export function Header(){
    return(
        <header className="flex px-2 py-4 bg-slate-200 text-black">
             <div className="flex gap-2 items-center">
                    <Image className="dark" src={"/iconeTitulo.svg"} 
                    alt={"Icone"}
                    width={40}
                    height={38}
                    >

                    </Image>
                    <span className="text-2xl font-bold">
                        Com todo Amor
                    </span>
                </div>
            <div className="flex items-center justify-center  mx-auto max-w-7x1">
               
                <nav>
                    <ul className="flex items-center justify-center gap-4 font-bold">
                        <Link href={""}>
                            Sobre
                        </Link>
                        <Link href={""}>
                            Funções
                        </Link>
                        <Link href={""}>
                            Planos
                        </Link>
                        <Link href={""}>
                            FeedBacks
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
import Image from "next/image";

export function ComoFunciona(){
    return(
       <main id="comoFunciona">
            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
                    Como funciona?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                    Criar um presente personalizado nunca foi tão fácil. Veja como funciona:
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                1. Preencha os Dados
                            </h3>
                            <div className="w-36 h-36 flex items-center justify-center bg-gray-200 text-white rounded-full mb-4">
                                <Image src={"/undraw_forms.svg"} alt={"cadastro simples"} 
                                width={100}
                                height={90}                           
                                />
                            </div>
                           
                            <p className="text-gray-600">
                                Insira suas memórias, declarações ou momentos especiais.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                2. Faça o Pagamento
                            </h3>
                            <div className="w-36 h-36 flex items-center justify-center bg-gray-200 text-white rounded-full mb-4">
                                <Image src={"/undraw_payments.svg"} alt={"Pagamento simples"} 
                                    width={100}
                                    height={90}                           
                                    />
                            </div>
                            
                            <p className="text-gray-600">
                                De forma segura e pratica.
                            </p>    
                        </div>

                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                3. Receba seu site no Email
                            </h3>
                            <div className="w-36 h-36 flex items-center justify-center bg-gray-200 text-white rounded-full mb-4">
                                <Image src={"/undraw_mail.svg"} alt={"Email confirmando"} 
                                    width={100}
                                    height={90}                           
                                    />
                            </div>
                            
                            <p className="text-gray-600">
                                Após a confirmação de pagamento, irá receber no seu email o seu site e o QRCODE.
                            </p>    
                        </div>

                        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                4. Presentei quem você ama.
                            </h3>
                            <div className="w-36 h-36 flex items-center justify-center bg-gray-200 text-white rounded-full mb-4">
                                <Image src={"/undraw_gift.svg"} alt={"Surpresa"} 
                                    width={100}
                                    height={90}                           
                                    />
                            </div>
                            
                            <p className="text-gray-600">
                               Surpreenda quem você ama.
                            </p>    
                        </div>
                    </div>
                
                </div>
            
            </div>

       </main> 
    )
}
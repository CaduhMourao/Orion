import { BatteryWarning, Cpu, DeviceMobile, Fingerprint, Terminal, Toilet, Warning } from "phosphor-react";

export function Service() {
    return (
        <div id="service">
            <div className="flex justify-center mt-10 text-center">
                <div className="">
                    <h4 className="text-zinc-700">Serviços</h4>
                    <h1 className="text-4xl font-bold">Conheça nossos serviços</h1>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-10 gap-4">

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="mx-4 mt-5">
                        <DeviceMobile width={50} height={50} />
                    </div>

                    <div className="p-5">
                        
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Troca de tela</h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fazemos a troca de tela, display e frontal do seu celular.</p>
                        
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="mx-4 mt-5">
                        <BatteryWarning width={50} height={50} />
                    </div>
                    <div className="p-5">
                        
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recuperação de sistema de carga</h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Caso seu celular não esteja carregando.</p>
                        
                    </div>
                </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="mx-4 mt-5">
                    <Warning width={50} height={50} />
   
                </div>             
                <div className="p-5">
                    
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recuperação de software</h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se o sistema operacional do seu celular parou de funcionar.</p>
                    
                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="mx-4 mt-5">
                    <Fingerprint width={50} height={50} />
                </div>
                
                <div className="p-5">
                    
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Desbloqueio: conta google/Padrão/PIN</h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se você esqueceu sua conta google, Padrão ou PIN.</p>
                    
                </div>
            </div>


                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="mx-4 mt-5">
                        <Terminal width={50} height={50} />
  
                    </div>                  
                    <div className="p-5">
                        
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Formatação de notebook e outros</h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Instalação do Windows e software. </p>
                        
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="mx-4 mt-5">
                        <Cpu width={50} height={50} />
       
                    </div>             
                    <div className="p-5">
                        
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Troca de tela</h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fazemos a troca de tela, display e frontal do seu celular. .</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
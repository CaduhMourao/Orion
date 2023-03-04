export function About() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 max-w-3xl lg:max-w-6xl mx-auto mt-5 rounded-xl shadow-md overflow-hidden bg-white md:p-8 dark:bg-gray-800" id="about">
                <div className="order-1 col-span-2 lg:col-span-1">
                    <h4 className="text-zinc-700">Sobre nós</h4>
                    <h1 className="text-3xl font-bold mt-4">Conheça mais sobre a Orion</h1>
                    <p className="text-zinc-700 mt-4 text-justify">
                        Há mais de 5 anos no mercado de assistência técnica, especializada em recuperação de software de celular, reparo no sistema de cargas e manutenção de notebook, celulares e tablet, na cidade de Santarém/PA.

                        A Orion foi criada pelo técnico Lucas Moreira. Aos 15 anos já se interessava por tecnologia e buscou a assistência técnica proximo a sua casa para aprender, começou a consertar computadores e troca de conector de cargas em celulares, mais tarde veio a se interessar por software de celular na qual se especializou.

                        Com 17 anos ele decidiu abrir sua própria assistência técnica, e começou a se especializar.
                    </p>
                </div>

                <div className="order-2 col-span-2 lg:col-span-1 flex flex-col justify-center ml-8 bg-zinc-100 rounded-lg">
                    <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mx-auto">Porque escolher a Orion?</h2>
                    
                    <ul role="list" className="space-y-4 text-gray-700 dark:text-gray-400 ml-5">
                        <li className="flex space-x-2">
                            
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="font-light leading-tight">Há mais de 5 anos no mercado</span>
                        </li>
                        <li className="flex space-x-2">
                            
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="font-light leading-tight">Técnico especializado</span>
                        </li>
                        <li className="flex space-x-2">
                            
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="font-light leading-tight">Atendimento rápido, de qualidade e confiança</span>
                        </li>
                        <li className="flex space-x-2">
                            
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="font-light leading-tight">Delivery</span>
                        </li>

                        <li className="flex space-x-2">
                            
                            <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="font-light leading-tight">De dicação e amor pelo que fazemos</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
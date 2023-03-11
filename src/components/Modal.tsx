export function Modal() {
    return (
        <div>
            <button
                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                className='bg-red-700 text-white rounded px-48 py-5 transition-all mt-10 hover:bg-red-800' type="button">
                    Faça seu orçamento
            </button>

            <div id="authentication-modal" aria-hidden="true" className="fixed justify-center top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Faça seu orçamento</h3>
                <form className="space-y-6" action="#">
                    <div className="flex flex-col gap-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nome e sobrenome" required />

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="93991000000" required />

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                        <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex: Samsung" required />

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex: A32" required />

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qual o defeito</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex: tela quebrada" required />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-red-700 text-white rounded px-10 py-2 transition-all hover:bg-red-800" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 
        </div>
    )
}
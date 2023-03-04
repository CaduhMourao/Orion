import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react"
import Logo from "../assets/logo1.png"
import 'flowbite'

export function Menu() {
    return (
        <div>
            <div className="flex gap-1 px-2 sm:px-4 py-2.5 justify-between items-center bg-zinc-800 text-white">
                <div className="flex gap-1 items-center ml-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FacebookLogo width={25} height={25} /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><InstagramLogo width={25} height={25} /></a>
                </div>
                
                <div className="flex gap-1 items-center justify-end mx-10">
                    <WhatsappLogo width={25} height={25}/>

                    <p>+559399100-0000</p>
                </div>
            </div>
            

            <nav className="bg-zinc-900 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src={Logo} className="h-6 mr-2 sm:h-9" alt="Logo Orion" />
                    <span className="self-center text-red-700 text-xl font-semibold whitespace-nowrap dark:text-white">ORION</span>
                </a>

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 bg-gray-100 rounded md:p-1 dark:hover:text-white" aria-current="page">Home</a>
                    </li>

                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-white rounded transition-all hover:text-gray-700 hover:bg-gray-100  md:border-0 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Serviços</a>
                    </li>

                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-white rounded transition-all hover:text-gray-700 hover:bg-gray-100 md:border-0 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre</a>
                    </li>

                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-white rounded transition-all hover:text-gray-700 hover:bg-gray-100  md:border-0 md:p-1 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contato</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    )
}
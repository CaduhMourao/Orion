export function Footer() {
    return (
        <div>
            <footer className="p-4 bg-zinc-800 mt-10 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Orion™</a>. All Rights Reserved.
                </span>

                <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#about" className="mr-4 hover:underline md:mr-6 ">Sobre</a>
                    </li>
                    <li>
                        <a href="#service" className="mr-4 hover:underline md:mr-6">Serviços</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contato</a>
                    </li>
                </ul>

            </footer>
        </div>
    )
}
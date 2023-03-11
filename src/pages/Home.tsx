
import Celular from '../assets/celular-quebrado.png'
import { Modal } from '../components/Modal'

export function Home() {
    return (
        <div>
            <div className="grid grid-cols-12 gap-4 max-w-3xl lg:max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="order-1 col-span-12 lg:col-span-6 flex flex-col mx-4 text-center md:text-start justify-center gap-4">
                    <h4 className="uppercase tracking-wide text-sm text-red-500 font-semibold">Seja bem vindo a Orion</h4>
                    <h1 className='text-6xl'>Assistência Técnica Especializada</h1>
                    <p className='text-zinc-600'>Manutenção de celular, tablet e notebook.</p>

                    <Modal />
                </div>
                
                <div className="md:order-2 col-span-12 lg:col-span-6 flex justify-center">
                    <img src={Celular} alt="Celular quebrado" className='max-w-md' />
                </div>
            </div>
      </div>
    )
}
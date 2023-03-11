import { MapPinLine, WhatsappLogo } from 'phosphor-react'
import { Maps } from '../components/Maps'

export function Contact() {
    return (
        <div id='contact' className='grid grid-cols-2 max-w-3xl lg:max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-10'>
            <div className='flex flex-col gap-4 justify-center ml-10'>
                <h1 className='text-3xl font-bold'>Entre em contato com a gente!</h1>
                <span className='flex items-center gap-2'>
                    <WhatsappLogo width={30} height={30} />
                    +559399100-0000
                </span>
                <span className='flex items-center gap-2'>
                    <MapPinLine width={30} height={30} />
                        Av. Mendonça Furtado, 484 - Santa Clara
                        Santarém - PA
                        68005-100
                        Brasil
                </span>
            </div>

            <div>
                <Maps />
            </div>
        </div>
    )
}
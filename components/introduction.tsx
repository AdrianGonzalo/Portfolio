'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import Link from 'next/link'

//TODO download the cv

const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60 justify-center items-center flex'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0'>
                <div className='flex flex-col justify-center max-w-md'>
                    <h1 className='mb-20 text-2xl leading-tight text-center md:text-center md:text-4xl md:mb-10'>Hola 👋 soy,  <br />
                        <TypeAnimation
                            sequence={[
                                'ADRIAN MARTIN GONZALO',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className='font-bold text-secondary'
                        />
                    </h1>

                    <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-center'>
                        Web Developer Full-Stack
                    </p>

                    <div className='flex gap-3 md:justify-around md:gap-10'>
                        <div className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                            <a href="AdrianMartinGonzalo.pdf" download>Descargar mi CV</a>
                        </div>
                        <Link href='/contact-me' className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'>
                            Contacta conmigo
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
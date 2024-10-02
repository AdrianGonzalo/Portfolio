import Link from 'next/link'

const ContactBox = () => {
    return (
        <div className="flex flex-col justify-center h-full">
            <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                Contacta <span className="text-secondary font-bold">Conmigo</span>
            </h1>
            <div className="relative mt-20 z-10 max-w-6xl gap-6 mx-auto p-4 border border-teal-50 rounded-xl bg-white/10">
                <div className="flex mb-5">
                    <p className='text-2xl w-36'>LinkedIn</p>
                    <Link href={'https://www.linkedin.com/in/adrian-martin-gonzalo-37853432b'}>
                        in/adrian-martin-gonzalo
                    </Link>
                </div>

                <div className="flex mb-5">
                    <p className='text-2xl w-36'>Gmail</p>
                    <p>adriangonzalodev@gmail.com</p>
                </div>

                <div className="flex mb-5">
                    <p className='text-2xl w-36'>Whats</p>
                    <p>+34 691 16 69 84</p>
                </div>

                <div className="flex ">
                    <p className='text-2xl w-36'>Discord</p>
                    <p>adriangon</p>
                </div>
            </div>
            <div className="relative mt-20 z-10 max-w-6xl gap-6 mx-auto p-4 border border-teal-50 rounded-xl bg-white/10">
                <div className='flex flex-col text-center mb-5'>
                    <span className='text-secondary text-xl'>Portfolio hecho con</span>
                </div>
                <div className='flex justify-center mt-4 space-x-4'>
                    <p>Next.js</p>
                    <p>React</p>
                    <p>Tailwind</p>
                    <p>Framer Motion</p>
                </div>
            </div>
        </div>
    )
}

export default ContactBox
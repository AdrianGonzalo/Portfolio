import Image from 'next/image'
import Link from 'next/link'

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        description: string,
        urlGithub: string,
        urlDemo: string
    }
}

const ProjectoBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, description, urlGithub, urlDemo } = data

    return (
        <div className="p-4 border border-teal-50 rounded-xl bg-white/10">
            <h2 className="mb-4 text-xl text-center">
                {title}
            </h2>
            <Image src={image} alt='image project' width={200} height={200} className=' md:w-[200px] rounded-2xl  w-[200px] h-[200px] border-2 border-black' />

            <p className='mt-5 md:w-[200px] rounded-2xl  w-[200px] h-[170px] h-30'>{description}</p>

            <div className='flex gap-5 mt-5 justify-around'>
                <Link href={urlGithub} target='_blank' className='p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80' >
                    Github
                </Link>
                <Link href={urlDemo} target='_blank' className='p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-[#180064]' >
                    Demo
                </Link>
            </div>
        </div>
        //TODO remove demo
    )
}

export default ProjectoBox;
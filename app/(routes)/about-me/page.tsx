import ContainerPage from "@/components/container"
import TransitionPage from "@/components/transition-page"
import Avatar from "@/components/avatar"
import Image from 'next/image'
import CoverParticles from "@/components/cover-particles"

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-center md:text-6xl md:mt-10">
                    Sobre{' '}
                    <span className="text-secondary font-bold">
                        MI
                    </span>
                </h1>
                <div className="z-20 grid grid-cols-1 md:grid-cols-2 items-center h-full p-6 py-20 gap-14">
                    <Image
                        src="/Avatar.png"
                        priority
                        width="500"
                        height="500"
                        alt="Profile pic"
                        className="mx-auto"
                    />
                    <p className="text-justify max-w-[65ch] mx-auto items-center">
                        Soy un apasionado de la tecnología. Tengo una experiencia sólida y diversa en el desarrollo web. Pero siempre procuro mejorar y expandir mi conocimiento.
                        <br />
                        <br />
                        La innovación me gusta y por esa razón, siempre pruebo nuevas herramientas y metodologías que me ayudan a crear soluciones más efectivas y creativas.Y como profesional, en general, disfruto los desafíos que me retan a evolucionar en mi práctica profesional. Ante cada situación, trato de abordarla proactivamente, manteniendo enfoque positivo, ya sea en entornos laborales de equipo o en situaciones de resolución de problemas más complejas.
                        <br />
                        <br />
                        Creo firmemente que ninguna pregunta empeora el efecto y que la colaboración y una actitud abierta son la clave para enfrentar cualquier reto. Su implementación también tiene un efecto positivo en la atmósfera de trabajo. Cada proyecto es una oportunidad no solo de avanzar técnica, sino personalmente
                    </p>
                </div>
            </ContainerPage>
            <CoverParticles />
        </>
    )
}

export default PageAboutMe

// Soy un apasionado de la tecnología. Tengo una experiencia sólida y diversa en el desarrollo web. Pero siempre procuro mejorar y expandir mi conocimiento. La innovación me gusta y por esa razón, siempre estoy al tanto de las novedades en desarrollo. Pruebo nuevas herramientas y metodologías que me ayudan a crear soluciones más efectivas y creativas. Para un campo tan activo y enconstante evolución como el desarrollo web es crucial estar al corriente de todas las actualizaciones. Y como profesional, en general, disfruto los desafíos que me retan a evolucionar en mi práctica profesional. Ante cada situación, trato de abordarla proactivamente, manteniendo enfoque positivo, ya sea en entornos laborales de equipo o en situaciones de resolución de problemas más complejas. Creo firmemente que ninguna pregunta empeora el efecto y que la colaboración y una actitud abierta son la clave para enfrentar cualquier reto. Su implementación también tiene un efecto positivo en la atmósfera de trabajo. Cada proyecto es una oportunidad no solo de avanzar técnica, sino personalmente.
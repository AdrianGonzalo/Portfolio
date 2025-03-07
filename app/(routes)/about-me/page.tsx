import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Avatar from "@/components/avatar";
import Image from "next/image";
import CoverParticles from "@/components/cover-particles";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-center md:text-6xl md:mt-10">
          Sobre <span className="text-secondary font-bold">MI</span>
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
            Soy desarrollador Web Full-Stack especializado en el Stack MERN
            <br />
            <br />
            Siempre he sido una persona curiosa, y al descubrir las increíbles
            posibilidades que ofrece el mundo de la programación, decidi que me
            dedicaria a ello.
            <br />
            <br />
            Me uní al bootcamp de ISDI Coders, donde adquirí conocimientos en el
            stack MERN, JavaScript, React, HTML, CSS, TailwindCSS, Node.js,
            Express, MongoDB y testing con Mocha & Chai.
            <br />
            <br />
            Disfruto mucho aprendiendo y poniendome retos en mis proyectos
            personales, actualmente estoy aprendiendo nuevas tecnologias como
            TypeScript, Next.js, Sql... para seguir mejorando como developer.
            <br />
            <br />
            Considero que entre mis principales virtudes destacan el
            compañerismo, la dedicación al trabajo y una actitud positiva, se
            podria decir que siempre veo el vaso medio lleno.
          </p>
        </div>
      </ContainerPage>
      <CoverParticles />
    </>
  );
};

export default PageAboutMe;

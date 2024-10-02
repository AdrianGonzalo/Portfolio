import TechnologyBox from "@/components/technology-box"

import ContainerPage from "@/components/container"
import TransitionPage from "@/components/transition-page"
import CoverParticles from "@/components/cover-particles"

import { dataTechnology } from "@/data"


const PageKnowledge = () => {
    return (
        <>
            <ContainerPage>
                <TransitionPage />
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Mis <span className="text-secondary font-bold">Conocimientos</span>
                    </h1>

                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-col-2 md:grid-cols-2">
                        {dataTechnology.map((data) => (
                            <TechnologyBox key={data.id} data={data} />

                        ))}
                    </div>
                </div>
            </ContainerPage>
            <CoverParticles />

        </>

    )
}

export default PageKnowledge
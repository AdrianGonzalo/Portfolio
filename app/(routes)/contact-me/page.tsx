import ContainerPage from "@/components/container"
import TransitionPage from "@/components/transition-page"
import CoverParticles from "@/components/cover-particles"
import ContactBox from "@/components/contactme-box"

const PageContactMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <ContactBox />
            </ContainerPage>
            <CoverParticles />
        </>
    )
}

export default PageContactMe
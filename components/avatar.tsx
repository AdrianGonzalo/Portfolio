import MotionTransition from "./transition-component"
import Image from 'next/image'

const Avatar = () => {
    return (
        <MotionTransition position='bottom' className=" mt-[300px] hidden md:inline-block md:absolute">
            <Image src='/Avatar.png' width={400} height={400} className="w-[360px] h-auto " alt='Avatar' />
        </MotionTransition>
    )
}

export default Avatar
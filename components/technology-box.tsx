interface TechnologyBoxProps {
    data: {
        id: number,
        title: string,
        description: string | JSX.Element
    }
}

const TechnologyBox = (props: TechnologyBoxProps) => {
    const { data } = props
    const { id, title, description } = data

    return (
        <div className="p-4 border border-teal-50 rounded-xl bg-white/10">
            <h2 className="mb-4 text-2xl text-center text-secondary font-bold">
                {title}
            </h2>
            <p className='mt-5  rounded-2xl  w-full h-[150px] h-30 text-center'>{description}</p>
        </div>
    )
}

export default TechnologyBox

type Props = {
    text: string
    callback: () => void
}

export const Button = ({ text, callback } : Props) => {

    return (
        <div className="text-xl text-center
        lg:text-2xl lg:text-left
        font-bold 
        tracking-tighter leading-tight
        border-4 antialiased
        border-black p-4 
        md:hover:rotate-6 hover:py-3 hover:my-1
        md:hover:py-4 md:hover:my-0
        transition ease-in-out
        items-center md:justify-between inline-flex mx-1 lg:mx-3">
            <button onClick={() => callback}>{text}</button>
        </div>
    )
}
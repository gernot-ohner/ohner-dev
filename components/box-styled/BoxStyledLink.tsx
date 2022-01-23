import Link from "next/link"


type Props = {
  text: string,
  href: string,
}

const BoxStyledLink = ({ text, href }: Props) => {
  return (
    <Link href={href}>
      <a
        className="text-xl text-center 
        lg:text-2xl lg:text-left 
        font-bold  
        tracking-tighter leading-tight 
        border-4 antialiased 
        border-black p-4  
        md:hover:rotate-6 hover:py-3 hover:my-1 
        md:hover:py-4 md:hover:my-0 
        transition ease-in-out 
        items-center md:justify-between inline-flex mx-1 lg:mx-3"
      >
        {text}
      </a>
    </Link>
  )
}

export default BoxStyledLink

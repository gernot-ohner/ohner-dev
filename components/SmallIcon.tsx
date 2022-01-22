import Link from "next/link"

type Props = {
  name: string;
  url: string;
  internal?: boolean;
}
const SmallIcon = ({ name, url, internal }: Props) => {
  return (
    (internal ? (
      <Link href={url}>
        <span className="text-xl text-center
        lg:text-2xl lg:text-left
        font-bold 
        tracking-tighter leading-tight
        border-4 antialiased
        border-black p-4 
        md:hover:rotate-6 hover:py-3 hover:my-1
        md:hover:py-4 md:hover:my-0
        transition
        items-center md:justify-between inline-flex mx-1 lg:mx-3">
          {name}
        </span>
      </Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="text-xl text-center
        lg:text-2xl lg:text-left
        font-bold antialiased
        tracking-tighter leading-tight
        border-4 
        border-black p-4 
        md:hover:rotate-6 hover:py-3 hover:my-1
        md:hover:py-4 md:hover:my-0
        transition
        items-center md:justify-between inline-flex mx-1 lg:mx-3">
          {name}
        </span>
      </a>
    ))
  )
}

export default SmallIcon

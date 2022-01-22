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
        <span className="text-xl lg:text-2xl font-bold tracking-tighter leading-tight
      border-4 border-black p-4 hover:rotate-6 transition-transform
      items-center md:justify-between inline-flex mx-1 lg:mx-3">
          {name}
        </span>
      </Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="text-xl lg:text-2xl font-bold tracking-tighter leading-tight
      border-4 border-black p-4 hover:rotate-6 transition-transform antialiased
      items-center md:justify-between inline-flex mx-1 lg:mx-3">
          {name}
        </span>
      </a>
    ))
  )
}

export default SmallIcon

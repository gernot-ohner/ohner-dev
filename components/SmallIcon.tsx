import Link from "next/link"
import { buttonStyling } from "../lib/styles"

type Props = {
  name: string;
  url: string;
  internal?: boolean;
}
const SmallIcon = ({ name, url, internal }: Props) => {
  return (
    (internal ? (
      <Link href={url}>
        <span className={buttonStyling}> {name} </span>
      </Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className={buttonStyling}> {name} </span>
      </a>
    ))
  )
}

export default SmallIcon

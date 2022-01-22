type Props = {
  title: string
  src: string
  url: string
}

const CoverImage = ({ title, src, url }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={"shadow-sm hover:shadow-lg transition-shadow duration-200"}
    />
  )
  return (
    <div className="sm:mx-0">
      <a href={url} aria-label={title}>{image}</a>
    </div>
  )
}

export default CoverImage

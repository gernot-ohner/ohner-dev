import DateFormatter from './date-formatter'
import ProjectCoverImage from './ProjectCoverImage'

type Props = {
  title: string
  coverImage: string
  date: string
  description: string
  url: string
}

const ProjectPreview = ({
  title,
  coverImage,
  date,
  description,
  url, 
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <ProjectCoverImage title={title} src={coverImage} url={url}/>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
          <a href={url} className="hover:underline">{title}</a>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
    </div>
  )
}

export default ProjectPreview

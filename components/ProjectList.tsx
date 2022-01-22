import ProjectPreview from './ProjectPreview'
import Project from '../types/project'

type Props = {
  title: string;
  projects: Project[];
}

const ProjectList = ({ title, projects }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.id}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectList

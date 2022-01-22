import React from "react"
import SmallIcon from "./SmallIcon"

type Props = {
    resume?: boolean
}

const Links = ({ resume }: Props) => {
    return (
        <div className="flex pt-12 lg:text-center">
            <SmallIcon name="Blog" url="/blog" internal={true} />
            <SmallIcon name="Projects" url="/projects" internal={true} />
            {resume ?
                (
                    <SmallIcon name="Resume" url="/assets/resume.pdf" internal={true} />
                ) : (<span></span>)
            }
            <SmallIcon name="Contact" url="/contact" internal={true} />
        </div>
    )
}

export default Links
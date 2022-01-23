import React from "react"
import { Button } from "./Button"
import SmallIcon from "./SmallIcon"

type Props = {
    callback: () => void
}

const Links = ({ callback }: Props) => {
    return (
        <div className="md:flex-row flex-col flex lg:text-center">
            <SmallIcon name="Blog" url="/blog" internal={true} />
            <SmallIcon name="Resume" url="/assets/resume.pdf" internal={true} />
            <Button text="Contact" callback={() => callback} />
            {/* <SmallIcon name="Contact" url="/contact" internal={true} /> */}
        </div>
    )
}

export default Links
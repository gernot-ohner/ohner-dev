import React from "react"
import SmallIcon from "./SmallIcon"


const ContactLinks = () => {
    return (
        <div className="flex pt-12 lg:text-center">
            <SmallIcon name="gernot.ohner@gmail.com" url="mailto:gernot.ohner@gmail.com" internal={false} />
            <SmallIcon name="LinkedIn" url="https://www.linkedin.com/in/gernot-ohner/" internal={false} />
            <SmallIcon name="GitHub" url="https://github.com/gernot-ohner/" internal={false} />
            <SmallIcon name="Back" url="/" internal={true} />
        </div>
    )
}

export default ContactLinks
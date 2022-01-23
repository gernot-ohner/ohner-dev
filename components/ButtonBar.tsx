import { useState } from 'react'
import SmallIcon from './SmallIcon';
import { buttonStyling } from '../lib/styles';

const ButtonBar = () => {

    const [showContact, setContact] = useState(false);


    return (
        <div>
            {((showContact) ?
                <div className="md:flex-row flex-col flex lg:text-center">
                    <button className={buttonStyling} onClick={() => setContact(!showContact)}>Contact</button>
                    <SmallIcon name="Blog" url="/blog" internal={true} />
                    <SmallIcon name="Resume" url="/assets/resume.pdf" internal={true} />
                </div> :
                <div>
                    <button className={buttonStyling} onClick={() => setContact(!showContact)}>Menu</button>
                    <SmallIcon name="gernot.ohner@gmail.com" url="mailto:gernot.ohner@gmail.com" internal={false} />
                    <SmallIcon name="LinkedIn" url="https://www.linkedin.com/in/gernot-ohner/" internal={false} />
                    <SmallIcon name="GitHub" url="https://github.com/gernot-ohner/" internal={false} />
                </div>
            )}
        </div>
    )
}

export default ButtonBar


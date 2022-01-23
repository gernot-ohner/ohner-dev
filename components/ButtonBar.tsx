import { useState } from 'react'
import BoxStyledLink from './box-styled/BoxStyledLink';
import BoxStyledAnchor from './box-styled/BoxStyledAnchor';

const ButtonBar = () => {
    const [showContact, setContact] = useState(false);
    return (
        <div>
            {
                ((showContact) ?
                    <div className="lg:flex-row flex-col flex lg:text-center" >
                        <button className="text-xl text-center lg:text-2xl lg:text-left font-bold  
                                                tracking-tighter leading-tight border-4 border-black p-4 antialiased 
                                                md:hover:rotate-6 hover:py-3 hover:my-1 md:hover:py-4 md:hover:my-0 
                                                transition ease-in-out items-center md:justify-between inline-flex mx-1 lg:mx-3"
                            onClick={() => setContact(!showContact)}>
                            <span className="font-bold">Menu</span>
                        </button>
                        <BoxStyledAnchor href="mailto:gernot.ohner@gmail.com" text="Email" />
                        <BoxStyledAnchor href="https://www.linkedin.com/in/gernot-ohner/" text="LinkedIn" />
                        <BoxStyledAnchor href="https://github.com/gernot-ohner/" text="GitHub" />
                    </div> :
                    <div className="lg:flex-row flex-col flex lg:text-center">
                        <button className="text-xl text-center lg:text-2xl lg:text-left font-bold  
                                                tracking-tighter leading-tight border-4 border-black p-4 antialiased 
                                                md:hover:rotate-6 hover:py-3 hover:my-1 md:hover:py-4 md:hover:my-0 
                                                transition ease-in-out items-center md:justify-between inline-flex mx-1 lg:mx-3"
                            onClick={() => setContact(!showContact)}>
                            <span className="font-bold">Contact</span>
                        </button>
                        <BoxStyledLink text="Blog" href="/blog" />
                        <BoxStyledLink text="Resume" href="/assets/resume.pdf" />
                        <div className="pb-16 mb-px lg:pb-0"></div>
                    </div>
                )
            }
        </div>
    )
}

export default ButtonBar

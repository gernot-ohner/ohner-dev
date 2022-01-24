import React from "react"
import Image from "next/image"
import profile from "../public/assets/profile.jpg"
import Intro from "./Intro"
import Footer from "./Footer"
import ButtonBar from "./ButtonBar"


const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <Intro />
            <div
                className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <div className="font-mono mt-6 text-gray-800">
                        <p className="mt-6 mb-4">
                            I'm a software developer currently living in Boston, MA.
                        </p>
                        <p className="mb-4">
                            Previously I worked on an event-streaming application with Java, Spring Boot and Kafka at
                            {' '}
                            <a href="https://www.bearingpoint.com/" target="_blank" className="hover:underline" > BearingPoint </a>.

                        </p>
                        <p className="mb-4">
                            I'm also an alumn of the <a className="hover:underline" href="https://recurse.com" target="_blank">Recurse Center</a>{' '}
                            a self-directed retreat for software developers. During my time there I worked on interpreters,
                            lower-level programming and functional programming with Scala.
                            You can read more about that on my blog.
                        </p>
                        <br />
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-1 lg:mb-8">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={350}
                        height={350}
                        placeholder="blur"
                    />
                </div>
            </div>
            <ButtonBar/>
            <Footer />
        </div>
    )
}

export default About
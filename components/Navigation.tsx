import Link from "next/link"
import React from "react"
import ButtonBar from "./ButtonBar";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6">
            <div className="container px-4 mx-auto lg:max-w-6xl flex justify-between">
                <div className={"justify-items-start"}>
                    <Link href="/">
                        <a
                            className={"text-3xl font-bold tracking-wider transition-colors" +
                                "text-gray-900 hover:text-sky-500 uppercase align-middle"}
                        >
                            <span className="block">Gernot F.</span>{' '} <span className="block">Ohner</span>
                        </a>
                    </Link>
                </div>
                <div className="justify-items-end">
                    <ButtonBar />
                </div>
            </div>
        </div>
    )
}

export default Navigation;
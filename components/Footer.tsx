import React from "react";

const Footer = () => {
    return (
        <div className="text-lg mt-12 lg:mt-18 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800">
                <div className="pb-8 mb-2 border-t-2 border-gray-300">
                    <div className="flex flex-col justify-between lg:flex-row items-center">
                        <p className="text-gray-700">Built with&nbsp;
                            <a
                                href="https://nextjs.org"
                                className="hover:text-yellow-500 transition-colors"
                            >
                                Next.js
                            </a>
                            ,&nbsp;
                            <a
                                href="https://tailwindcss.com/"
                                className="hover:text-yellow-500 transition-colors"
                            >
                                Tailwind
                            </a>
                            &nbsp;and&nbsp;
                            <a
                                href="https://vercel.com/"
                                className="hover:text-yellow-500 transition-colors"
                            >
                                Vercel
                            </a>
                        </p>
                        <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                            <a
                                href="https://www.linkedin.com/in/gernot-ohner/"
                                className={"transition-colors hover:text-yellow-500"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/gernot-ohner/"
                                className={"transition-colors hover:text-yellow-500"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
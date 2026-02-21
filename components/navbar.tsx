import React from "react"
import { Button } from "./ui/button"
import { NavBarLinks, ProjectURLs } from "@/lib/links"
import Link from "next/link"
import MobileNavbar from "./mobile-navbar"
const NavBar = () => {
    return (
        <header className="top-0 z-50 flex h-24 w-full flex-row items-center justify-between gap-5 border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky md:px-20">
            <div className="flex flex-row items-center gap-3 lg:gap-5">
                <div className="text-sm lg:pr-5">
                    <Link href={"/"}>
                        <span className="text-sm font-extrabold">emmanaguado</span>.com
                    </Link>
                </div>
                <div className="hidden gap-5 md:flex lg:gap-10">
                    {NavBarLinks.map((link, index) => {
                        return (
                            <Link href={link.link} key={index}>
                                <p className="font-semibold hover:text-black/55 lg:text-lg">
                                    {link.name}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="hidden gap-2 md:flex lg:flex-row lg:gap-5">
                <Link href={"/contact"}>
                    <Button variant={"default"}>Contact me</Button>
                </Link>
                <Link href={ProjectURLs.OwnResume} target="_blank" rel="noopener noreferrer">
                    <Button variant={"outline"}>View Resume</Button>
                </Link>
            </div>

            <MobileNavbar />
        </header>
    )
}

export default NavBar

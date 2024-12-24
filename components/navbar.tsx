import React from 'react'
import { Button } from './ui/button'
import { NavBarLinks, ProjectURLs } from '@/lib/links'
import Link from 'next/link'
import MobileNavbar from './mobile-navbar'
const NavBar = () => {
    return (
        <header className='md:sticky h-24 px-6 md:px-20 flex flex-row items-center justify-between top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='flex flex-row gap-5 items-center'>
                <div className='p-5 text-sm'>
                    <Link href={"/"}>
                        <span className='font-extrabold'>emmanuelaguado</span>.com
                    </Link>
                </div>
                <div className='hidden md:flex gap-10'>
                    {
                        NavBarLinks.map((link, index) => {
                            return (
                                <Link href={link.link} key={index}>
                                    <p className='text-lg font-semibold hover:text-black/55'>{link.name}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className='hidden md:flex lg:flex-row gap-5'>
                <Button variant={"default"}>
                    Contact me
                </Button>
                <Link href={ProjectURLs.OwnResume} target="_blank" rel="noopener noreferrer">
                    <Button variant={"outline"}>
                        View Resume
                    </Button>
                </Link>
            </div>

            <MobileNavbar />
        </header>
    )
}

export default NavBar
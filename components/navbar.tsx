import React from 'react'
import { Button } from './ui/button'
import { NavBarLinks } from '@/lib/links'
import Link from 'next/link'
const NavBar = () => {
    return (
        <header className='sticky h-28 px-20 flex flex-row items-center justify-between top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='flex flex-row gap-10 items-center'>
                <div className='p-5 text-sm'>
                    <span className='font-extrabold'>emmanuelaguado</span>.com
                </div>
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
            <div className='flex flex-row gap-5'>
                <Button variant={"default"}>
                    Contact me
                </Button>
                <Button variant={"default"}>
                    View Resume
                </Button>
            </div>
        </header>
    )
}

export default NavBar
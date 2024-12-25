import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { NavBarLinks, ProjectURLs } from '@/lib/links'
import Link from 'next/link'
const MobileNavbar = () => {

    const renderNavLinks = (
        NavBarLinks.map((link) => (
            <Link href={link.link} key={link.name} className='hover:text-button'>{link.name}</Link>
        ))
    )

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className='md:hidden' variant={"ghost"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetTitle className='hidden'>
            </SheetTitle>
            <SheetContent className=''>
                <SheetHeader className='flex flex-row items-center justify-center'>
                    <span className='font-extrabold'>emmanuelaguado</span>.com
                </SheetHeader>
                <div className='gap-6 py-8 font-medium flex flex-col items-center justify-center text-xl '>
                    {renderNavLinks}
                </div>
                <div className='mt-5 flex flex-col items-center justify-center gap-5'>
                    <Link href={"/contact"}>
                        <Button variant={"default"}>
                            Contact me
                        </Button>
                    </Link>
                    <Link href={ProjectURLs.OwnResume} target="_blank" rel="noopener noreferrer">
                        <Button variant={"default"}>
                            View Resume
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar
import React from 'react'
import { Button } from './ui/button'
import { Github, LinkedinIcon, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Emmanuel Aguado. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Github className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Mail className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
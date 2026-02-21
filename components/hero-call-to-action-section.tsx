import React from "react"
import { Button } from "./ui/button"
import { Mail } from "lucide-react"
import UniversalLayout from "./margin"
import Link from "next/link"

const HeroCallToActionSection = () => {
    return (
        <section className="bg-muted/30 py-20">
            <UniversalLayout>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 text-3xl font-bold">Let&apos;s Work Together</h2>
                    <p className="mb-8 text-lg text-muted-foreground">
                        I&apos;m always interested in hearing about new projects and opportunities.
                    </p>
                    <Link href="/contact">
                        <Button className="gap-2">
                            <Mail className="h-5 w-5" />
                            Get in Touch
                        </Button>
                    </Link>
                </div>
            </UniversalLayout>
        </section>
    )
}

export default HeroCallToActionSection

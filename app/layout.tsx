import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: {
        default: "Emmanuel Aguado | Software Developer",
        template: "%s | Emmanuel Aguado",
    },
    description:
        "Portfolio and personal website of Emmanuel Aguado, a versatile Software Developer currently open for work and eager to contribute to new projects and opportunities.",
    keywords: [
        "Emmanuel Aguado",
        "Software Developer",
        "Web Developer",
        "Programmer",
        "Portfolio",
        "Engineer",
    ],
    authors: [{ name: "Emmanuel Aguado", url: "https://emmanuelaguado.dev" }],
    creator: "Emmanuel Aguado",
    icons: {
        icon: "/icon.png",
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://emmanuelaguado.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Emmanuel Aguado | Software Developer",
        description:
            "Portfolio and personal website of Emmanuel Aguado, a versatile Software Developer currently open for work and eager to contribute to new projects and opportunities.",
        url: "/",
        siteName: "Emmanuel Aguado",
        images: [
            {
                url: "/metadata.png",
                width: 1200,
                height: 630,
                alt: "Emmanuel Aguado",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Emmanuel Aguado | Software Developer",
        description:
            "Portfolio and personal website of Emmanuel Aguado, a versatile Software Developer currently open for work and eager to contribute to new projects and opportunities.",
        creator: "@yourtwitterhandle", // User can update this later
        images: ["/metadata.png"],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Emmanuel Aguado",
        jobTitle: "Software Developer",
        url: "https://emmanuelaguado.dev",
        sameAs: ["https://github.com/icecubes99", "https://www.linkedin.com/in/EmmanuelAguado/"],
    }

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Toaster />
                {children}
            </body>
        </html>
    )
}

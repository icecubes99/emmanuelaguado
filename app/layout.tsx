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
    title: "Emmanuel Aguado",
    description: "Emmanuel Aguado's personal website/portfolio.",
    icons: {
        icon: "/icon.png",
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://emmanuelaguado.dev"),
    openGraph: {
        title: "Emmanuel Aguado",
        description: "Emmanuel Aguado's personal website/portfolio.",
        url: "/",
        siteName: "Emmanuel Aguado",
        images: [
            {
                url: "/metadata.png",
                width: 1200,
                height: 630,
                alt: "Emmanuel Aguado Photo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Emmanuel Aguado",
        description: "Emmanuel Aguado's personal website/portfolio.",
        images: ["/metadata.png"],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster />
                {children}
            </body>
        </html>
    )
}

import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emmanuelaguado.dev"
    
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "facebookexternalhit",
                allow: "/",
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}

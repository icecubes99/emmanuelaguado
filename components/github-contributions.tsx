"use client"

import React from "react"
import { GitHubCalendar } from "react-github-calendar"

const GitHubContributions = () => {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "icecubes99"

    return (
        <GitHubCalendar
            username={username}
            blockSize={11}
            blockMargin={5.5}
            fontSize={14}
            theme={{
                light: ["hsl(var(--muted))", "hsl(var(--primary))"],
                dark: ["hsl(var(--muted))", "hsl(var(--primary))"],
            }}
            style={{
                width: "100%",
            }}
            tooltips={{
                activity: {
                    text: (activity) => {
                        const date = new Date(activity.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })
                        return `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${date}`
                    },
                },
            }}
        />
    )
}

export default GitHubContributions

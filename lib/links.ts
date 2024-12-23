export const NavBarLinks = [
    {
        name: 'Projects',
        link: '/projects'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Socials',
        link: '/socials'
    }
]
interface ProjectLink {
    readonly name: string;
    readonly link: string;
}

enum OwnLinkKeys {
    Github = 'Github_Link',
    LinkedIn = 'LinkedIn_Link',
    Behance = 'Behance_Link'
}

enum ProjectLinkKeys {
    EMS = 'EMS_GithubLink',
    EMSLive = 'EMS_LiveLink'
}

export const OwnLinks: Record<OwnLinkKeys, ProjectLink> = {
    [OwnLinkKeys.Github]: {
        name: "Github Link",
        link: 'https://github.com/icecubes99'
    },
    [OwnLinkKeys.LinkedIn]: {
        name: "LinkedIn Link",
        link: 'https://www.linkedin.com/in/emmanuel-aguado-0a17162ab/'
    },
    [OwnLinkKeys.Behance]: {
        name: "Behance Link",
        link: 'https://www.behance.net/emmanueaguado'
    }
} as const;

export const ProjectLinks: Record<ProjectLinkKeys, ProjectLink> = {
    [ProjectLinkKeys.EMS]: {
        name: "EMS-GithubLink",
        link: "https://github.com/icecubes99/ems-v2"
    },
    [ProjectLinkKeys.EMSLive]: {
        name: "EMS-LiveLink",
        link: "https://ems-v2.vercel.app/"
    }
} as const;
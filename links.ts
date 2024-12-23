interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  portfolio?: string;
}

interface ContactLinks {
  email: string;
  phone?: string;
}

interface Links {
  social: SocialLinks;
  contact: ContactLinks;
  projects: string[];
}

const links: Links = {
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
    portfolio: "https://myportfolio.com"
  },
  contact: {
    email: "user@example.com",
    phone: "+1234567890"
  },
  projects: [
    "https://project1.com",
    "https://project2.com",
    "https://project3.com"
  ]
};

export default links;
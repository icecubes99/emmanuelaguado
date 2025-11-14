"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Github, Link2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ProjectURLs } from "@/lib/links";
import { FaBehance } from "react-icons/fa";
import { SiLetterboxd, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    platform: "GitHub",
    username: "icecubes99",
    link: ProjectURLs.OwnGithub,
    icon: <Github className="h-6 w-6" />,
  },
  {
    platform: "LinkedIn",
    username: "emmanuelaguado",
    link: ProjectURLs.OwnLinkedIn,
    icon: <SiLinkedin className="h-6 w-6" />,
  },
  {
    platform: "Behance",
    username: "emmanueaguado",
    link: ProjectURLs.OwnBehance,
    icon: <FaBehance className="h-6 w-6" />,
  },
  {
    platform: "Letterboxd",
    username: "icecubes99",
    link: ProjectURLs.OwnLetterboxd,
    icon: <SiLetterboxd className="h-6 w-6" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SocialsBodySection = () => {
  return (
    <div>
      <div className="py-20">
        <motion.div
          className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto pb-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {socialLinks.map((social) => (
            <motion.div key={social.platform} variants={item}>
              <SocialLinkCard {...social} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialsBodySection;

interface SocialLinkCardProps {
  platform: string;
  username: string;
  link: string;
  icon: React.ReactNode;
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({
  platform,
  username,
  link,
  icon,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden bg-background border-2 border-primary/10 hover:border-primary/30 transition-colors">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
            <div className="flex-grow md:relative flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold">{platform}</h3>
              <p className="text-sm text-muted-foreground">@{username}</p>
            </div>
            <div className="flex gap-2 ">
              <motion.div
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: copied ? [1, 1.1, 1] : 1,
                  backgroundColor: copied
                    ? "rgb(34 197 94 / 0.1)"
                    : "transparent",
                }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant={"secondary"}
                  size={"icon"}
                  onClick={handleCopyLink}
                  className="hover:bg-primary/10 mt-2 md:mt-0"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: copied ? [0, -10, 10, 0] : 0,
                      scale: copied ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-900" />
                    ) : (
                      <Link2 className="h-4 w-4" />
                    )}
                  </motion.div>
                </Button>
              </motion.div>
              <Button
                asChild
                variant="secondary"
                className="hover:bg-primary/10 mt-2 md:mt-0"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Connect
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

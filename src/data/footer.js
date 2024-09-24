import { ANIMATION_CONTACT, ANIMATION_PROJECTS } from "../animations";
import { ANIMATION_ABOUT } from "../animations/About";

export const networks = [
    {
        href: "https://www.instagram.com/codedbyclement/",
        target: "Instagram"
    },
    {
        href: "https://www.linkedin.com/in/cl%C3%A9ment-p-35bab4220/",
        target: "Linkedin"
    },
    {
        href: "https://x.com/codedbyclement",
        target: "Twitter/X"
    },
    {
        href: "mailto:prtclement.ctc@gmail.com",
        target: "Mail"
    },
];

export const links_portfolio = [
    {
        href: "/about",
        target: "About",
        color: "#8DC7C7",
        callback: ANIMATION_ABOUT,
    },
    {
        href: "/projects",
        target: "Projects",
        color: "#7AB67D",
        callback: ANIMATION_PROJECTS,
    },
    {
        href: "/contact",
        target: "Contact",
        color: "#FFFFFF",
        callback: ANIMATION_CONTACT,
    },
];

const projects = [
    {
        id: 1,
        name: "Stream'It",
        date: 2021,
        banner: "stream_it",
        tags: ["UI, UX", "Design"],
        images: 1,
        available: false,
        description: [
            "The aim of this little project was to discover Figma and its features, around a random subject. I decided to choose a music application, like Spotify or Apple Music.",
            "So I had to create a logo from scratch, a few pages in mobile format, adding links between them and a few animations.",
            "It was the first time I'd discovered Figma, through an interesting subject. That's why I enjoyed using it, and still do, for this portfolio or personal projects."
        ],
        color: "#00000015"
    },
    {
        id: 2,
        name: "Flexin",
        date: 2023,
        banner: "flexin",
        tags: ["Development", "UI, UX", "Design"],
        images: 3,
        available: true,
        url: "https://perr0112.github.io/agency-website/",
        description: [
            "Flexin is a fictional, creative, multi-service company. The idea of creating this fictitious site came to me when I gradually discovered my interest in UI/UX.",
            "I set myself a deadline of 2 weeks for the design of this project and its web integration.",
        ],
        color: "#8A6DFF75"
    },
    // {
    //     id: 2,
    //     name: "Previous portfolio",
    //     date: 2023,
    //     banner: "old_portfolio",
    //     tags: ["Development", "UI, UX", "Design"]
    // },
    {
        id: 3,
        name: "Maxime's portfolio",
        date: 2024,
        banner: "bymax_portfolio",
        tags: ["Development", "UI, UX", "Design", "React"],
        images: 4,
        available: true,
        url: "https://perr0112.github.io/maxime-portfolio/",
        description: [
            "Alongside my studies, I offer my services to people I know to create websites to promote their services.",
            "A close friend asked me to integrate a model that he had designed himself to showcase what he could offer.",
            "As a graphic designer, Maxime has already worked with several youtubers/influencers in various fields."
        ],
        color: "#000000"
    },
    {
        id: 4,
        name: "WildWonderHub",
        date: 2024,
        banner: "wildwonderhub",
        tags: ["Development", "UI, UX", "Design", "APIPlatform", "React"],
        images: 7,
        available: false,
        description: [
            "As a group of 4 university students, our objective was to create a functional site on the theme of zoo management.",
            "The main functionalities, such as registration and connection, had to be operational, as well as the reservation of a zoological space on a schedule.",
            "There is also a list of animals available in the zoo and an interactive forum."
        ],
        color: "#007A0275"
    },
    {
        id: 5,
        name: "Qualitum",
        date: 2024,
        banner: "qualitum",
        tags: ["Development", "UI, UX", "Design", "GSAP", "React"],
        images: 7,
        available: true,
        url: "https://qualitum-pink.vercel.app/",
        description: [
            "Still with the idea of making progress on the UI, UX and interactive development aspects, I chose to design the website of a fictitious agency.",
            "I began to manipulate GSAP and understand how it works through this project."
        ],
        color: "#FFB6B675"
    },
    {
        id: 6,
        name: "FreshZea",
        date: 2024,
        banner: "freshzea",
        tags: ["Development", "UI, UX", "Design", "GSAP", "React"],
        images: 5,
        available: true,
        url: "https://freshzea.vercel.app/",
        description: [
            "Still with the idea of making progress on the UI, UX and interactive development aspects, I chose to design the website of a fictitious pizzeria.",
            "I continued to use GSAP to create interactive scroll animations."
        ],
        color: "#00673F75"
    },
];

const TAGS = ["Development", "UI, UX", "Design"];

const LENGTHPROJECTS = projects.length;

export { projects, TAGS, LENGTHPROJECTS }

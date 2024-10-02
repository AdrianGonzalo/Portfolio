import { BookText, Github, Mail, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/adrian-martin-gonzalo-37853432b/",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/AdrianGonzalo",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "https://mail.google.com/mail/u/0/#inbox",
    }
    //TODO change the mail
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/knowledge",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact-me",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Memaso",
        image: "/memaso.png",
        description: "Este es mi primer proyecto personal, utilicé y creé componentes de JavaScript puro y me conecté a una API, su funcion es buscar gifs dependiendo del prompt que se introduzca.",
        urlGithub: "https://github.com/AdrianGonzalo/Memaso",
        urlDemo: "https://github.com/AdrianGonzalo/Memaso",
    },
    {
        id: 2,
        title: "Game-Hub",
        image: "/game-hub1.png",
        description: "Primer gran proyecto personal, donde utilize JavaScript, React , Vite, Node, Express y Mocha chai ente otros... la funcion de la app es rankear de manera personal los videojuegos",
        urlGithub: "https://github.com/AdrianGonzalo/game-hub",
        urlDemo: "https://main--gamehub-players.netlify.app",
    },
    {
        id: 3,
        title: "Super-MarioCulé-Bros",
        image: "/mario.png",
        description: "Como buen fan de mario quise llevar mi passion a otro nivel recreandolo con JavaScript. Para ello utilize el motor de desarrollo Phaser, que me permitio integrar las mecanicas y animaciones",
        urlGithub: "https://github.com/AdrianGonzalo/Super-MarioCule-Bros",
        urlDemo: "https://github.com/AdrianGonzalo/Super-MarioCule-Bros",
    }
];

export const dataTechnology = [
    {
        id: 1,
        title: "Fronted",
        description: <>
            JavaScript, <br />
            Html, <br />
            Css, <br />
            Tailwind, <br />
            React, <br />
            Vite
        </>

    },
    {
        id: 2,
        title: "Backend",
        description: <>
            Nodejs, <br />
            Express, <br />
            Mongodb, <br />
            Mongoose, <br />
            Mocha Chai, <br />
        </>
    },
    {
        id: 3,
        title: "Habilidades Tecnicas",
        description: <>
            Git, <br />
            GitHub, <br />
            Jira, <br />
            Trello, <br />
        </>
    },
    {
        id: 4,
        title: "Metodologías",
        description: <>
            Scrum, <br />
            TDD, <br />
        </>
    }
];
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  quotes,
  threejs,
  airbnb,
  toothpaste,
  food,
  contact,
  rickandmorty,
  country,
  vowal,
  nextjs,
  vercel,
  notion,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "works",
    title: "Work",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Notion",
    icon: notion,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Airbnb Clone",
    description:
      "Airbnb clone built with NextJS and styled with Tailwind CSS. Features Leaflet library for map view. Users can search for listings and view detailed information about each listing, including price, reviews, and location on the map.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Leaflet",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/ManSOorcode/Airbnb-Clone",

    live_link: "https://mansoor-cairbnb-clone.vercel.app/",
  },
  {
    name: "Toothpaste Website",
    description:
      "This Toothpaste Website is a freelance project showcasing products with a user-friendly interface built with HTML5, JavaScript, and Tailwind CSS. It effectively represents the brand's values and goals and helps increase its online presence.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TailWind CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
    ],
    image: toothpaste,
    source_code_link: "https://halalopakeeza.com/",

    live_link: "https://halalopakeeza.com/",
  },
  {
    name: "Food Order App",
    description:
      "The Food Order App is a React web app styled with Tailwind CSS, enabling users to order food via delivery or pickup. Its intuitive interface and responsive design ensure a seamless experience, making it a fast and easy platform for food lovers.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Fire-Base",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/ManSOorcode/React-Food-Order-App",

    live_link: "https://react-food-order-app-mansoorcode.vercel.app/",
  },
  {
    name: "Quotes App",
    description:
      "The Quotes App is a React-based web app styled with Tailwind CSS and powered by Firebase. Users can add, browse, and search for quotes with an intuitive interface and real-time updates, making it perfect for quote enthusiasts.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "React Route",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: quotes,
    source_code_link: "https://github.com/ManSOorcode/React-Route",

    live_link: "https://react-route-alpha.vercel.app/quotes",
  },
  {
    name: "Contact App",
    description:
      "The Contact App is a React-based web application styled with Tailwind CSS and powered by Context API for efficient data management. It provides a user-friendly interface for storing and managing contact information in an organized manner.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Context Api",
        color: "green-text-gradient",
      },
      {
        name: "TailWind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: contact,
    source_code_link:
      "https://github.com/ManSOorcode/React-Contact-App/tree/new-branch",

    live_link: "https://contacts-directory.vercel.app/",
  },
  {
    name: "Rick and Morty",
    description:
      "The Rick and Morty web app is built with React and Tailwind CSS and features information on all characters from the popular TV series. With filtering, sorting, and detailed character views, it's an engaging experience for fans.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "TailWind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: rickandmorty,
    source_code_link:
      "https://github.com/ManSOorcode/Rick-and-morty-All-characters",

    live_link: "https://rick-and-morty-mansoorcode.vercel.app/",
  },
  {
    name: "Country Cards",
    description:
      "The Country Cards project is a web app that uses HTML5, CSS3, and JavaScript to display info on countries, leveraging an API for data retrieval. Its user-friendly interface and efficient data processing provide an engaging educational experience for users.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "HTML5",
        color: "orange-text-gradient",
      },
    ],
    image: country,
    source_code_link:
      "https://github.com/ManSOorcode/22-Country-Card/tree/chor/raw-code",

    live_link: "https://country-card.vercel.app/",
  },
  {
    name: "Vowal Filter App",
    description:
      "The Vowel Filter App is a simple yet effective web application that uses HTML5, CSS3, and JavaScript. It allows users to filter out vowels from text, leaving only the consonants. Its minimalist design and ease of use make it a handy tool for text processing.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
    ],
    image: vowal,
    source_code_link:
      "https://github.com/ManSOorcode/21-Filter-vowal-from-Sentence",

    live_link: "https://mansoorcode.github.io/21-Filter-vowal-from-Sentence/",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit, 
    Cplusplus,
    C,
    DSAlogo,
    express,
    MySQL,
    Postgres,
    Python,
    corizo,
    cre_matrix,
    Exide,
    expense_tracker,
    gobuynow,
    dialogix
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
  },
  {
      name: "MySQL",
      icon: MySQL,
  },
  {
      name: "Postgres",
      icon: Postgres,
  },
    {
      name: "C++",
      icon: Cplusplus,
    },
    {
      name: "C",
      icon: C,
    },
    {
        name: "Python",
        icon: Python,
    },
    {
        name: "DSA",
        icon: DSAlogo,
    }
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name: "Corizo",
      icon: corizo,
      iconBg: "#383E56",
      date: "December 2022 - January 2023",
      points: [
        "Bulding an E-commerce webapp using Mongo DB, Express, React and Node Js.",
        "Collaborating with a teams comprising of fellow developers throughout the development process.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "CRE Matrix",
      icon: cre_matrix,
      iconBg: "#E6DEDD",
      date: "June 2023 - August 2023",
      points: [
        "Developed product control and servicing rest API using NEST JS. Designed CRUD apps using MySQL.",
        "Building an expense management app, using mern stack technology.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Exide Industries Ltd",
      icon: Exide,
      iconBg: "#383E56",
      date: "December 2023 - April 2024",
      points: [
        "Working on an Android based application, that helps in generating digitalized buisness cards and sharing them via links and QR codes through social media platforms.",
        "Working on time series predictive analysis model to forecast lead and zinc prices.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "GoBuyNow",
      description:
        "A web-based e-commerce platform enabling users to search, browse, and simulate payments for products using a demo Paytm payment gateway.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gobuynow,
      source_code_link: "https://github.com/AL-510/GoBuyNow",
    },
    {
      name: "Dialogix",
      description:
        "Real-time chat platform enabling users to anonymously register and engage in conversations with diverse individuals.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "grey-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dialogix,
      source_code_link: "https://github.com/AL-510/Dialogix",
    },
    
  ];
  
  export { services, technologies, experiences, projects };
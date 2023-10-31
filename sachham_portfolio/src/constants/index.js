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
    carrent,
    jobit,
    tripguide,
    threejs,
    wordpress,
    vci,
    fap,
    sharon,
    labex,
    vic,
    njm,
    csharp,
    php,
    booking,
    antimatters,
    firstaidpro,
    vvci, 
    ausstennis,
    appointmentbooking,
    marketingexpert,
    baristacourse,
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
      title: "Full-Stack Developer/Programmer",
      icon: web,
    },
    {
      title: "Wordpress Developer & SEO Specialist",
      icon: mobile,
    },
    {
      title: "AWS/Azure Cloud Architech",
      icon: backend,
    },
    {
      title: "Content Creator/ Designer",
      icon: creator,
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
    },{
      name: "Wordpress",
      icon: wordpress,
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
      name: "PHP",
      icon: php,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C#",
      icon: csharp,
    },
     
    
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer & SEO Specialist",
      company_name: "FirstAidPro",
      icon: fap,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
       ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Victorian Chamber of Commerce & Industry(Short Term Contract)",
      icon: vvci,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - April 2021",
      points: [
         ],
    },
    {
      title: "Research Assistant(Short Term Contract)",
      company_name: "Victoria University",
      icon: vic,
      iconBg: "#383E56",
      date: "Apr 2021 - Dec 2021",
      points: [
      ],
    },
    {
      title: "Wordpress Developer & SEO(Internship)",
      company_name: "NJM Group",
      icon: njm,
      iconBg: "#E6DEDD",
      date: "Jun 2020 - Nov 2020",
      points: [
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "After Sachham optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Sharon McCulloch",
      designation: "CEO",
      company: "FirstAidPro",
      image: sharon,
    },
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sachham proved me wrong.",
      name: "Bonnie Gambhir",
      designation: "CFO",
      company: "NJM Group",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their company' success like Sachham does.",
      name: "Lisa Christiansen",
      designation: "Manager",
      company: "Labax Nominees",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Business Web App ( Technology: MongoDB, React, Express, Node.js(RESTful API))",
      description:
        "Web application that enables company to showcase there product, services, stories, contact and communicate with clients. Developing using MERN stack.",
      tags: [
        {
          name: "React #Node.js ",
          color: "blue-text-gradient",
        },
        {
          name: "CSS #HTML",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: antimatters,
      source_code_link: "https://github.com/sachham-karki/modern-front-end",
    },  {
      name: "Appointment Booking App ( React single Page project )",
      description:
        "I designed and developed a responsive single-page React app for appointment booking, offering an intuitive user interface for scheduling appointments.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: " HTML",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: appointmentbooking,
      source_code_link: "https://github.com/sachham-karki/user-interface-react",
    }, {
      name: "AussTennis ( Asp.Net, C# project )",
      description:
        "The Ausstennis website is a web application developed using Asp.Net, created for the management of Tournaments, Players, Organizers, Registrations, Venues, and Customers within the context of AussTennis.",
      tags: [
        {
          name: "Asp.Net",
          color: "blue-text-gradient",
        },
        {
          name: " HTML, CSS, JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "MySQL, C#",
          color: "pink-text-gradient",
        },
      ],
      image: ausstennis,
      source_code_link: "https://github.com/sachham-karki/AussTennis#ausstennis",
    },
    {
      name: "Online Orders & Booking Web App",
      description:
        "A comprehensive online booking platform that allows users to reserve or order online, and offers curated recommendations.",
      tags: [
        {
          name: "Wix",
          color: "blue-text-gradient",
        },
        {
          name: "HTML #CSS #Javascript",
          color: "green-text-gradient",
        },
        {
          name: "SEO, GMB",
          color: "pink-text-gradient",
        },
      ],
      image: booking,
      source_code_link: "https://www.thaioncharles.com.au/",
    },
    {
      name: "Firstaidpro",
      description:
        "Web-based platform that allows users to search, book, and manage courses, providing a convenient and efficient solution for institute, students & teachers.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "HTML, CSS, JavaScript, Jquery",
          color: "green-text-gradient",
        },
        {
          name: "PHP, SEO, GMB, GA4",
          color: "pink-text-gradient",
        },
      ],
      image: firstaidpro,
      source_code_link: "https://www.firstaidpro.com.au/",
    },
    
   
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
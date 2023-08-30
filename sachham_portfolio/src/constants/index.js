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
      title: "Full-Stack Developer",
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
        "Proficient in utilizing WordPress (Elementor and DIVI) to create visually appealing, mobile responsive, and user-friendly websites.",
        "Extensive knowledge and expertise in utilizing a wide range of WordPress plugins.",
        "Skilled in writing custom code using a variety of languages, including HTML, CSS, Javascript (JQuery), and PHP, to enhance website functionality and design.",
        "Well-versed in implementing effective SEO strategies, encompassing On-Page, Off-page, and Technical SEO techniques, to drive organic traffic and improve search engine rankings.",
        "Possess valuable 'sales experience', delivering exceptional results through strong service knowledge, effective communication, and relationship-building skills.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Labax Nominees(Short Term Contract)",
      icon: labex,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Oct 2022",
      points: [
        "- Development of front-end", 
"Design the backend of the application", 
"SEO(Search Engine Optimization)", 
"Ensuring Cross Platform compatibility", 
"Creating Product Manual", 
"Analyzing & Meet all technical and consumer requirements",
"Web Hosting"  ],
    },
    {
      title: "Research Assistant(Short Term Contract)",
      company_name: "Victoria University",
      icon: vic,
      iconBg: "#383E56",
      date: "Apr 2021 - Dec 2021",
      points: [
        "Did research on 'Human Facial Emotions Detecting AI' and successfully developed a mobile application that can be used to detect human emotions on the basis of facial expressions, by using Python(TensorFlow, Keras), Machine Learning algorithms ( Neural Networks and Deep Learning).",

        "Analyzing and gathering Data (Big Data)",
        "Developing MOdel with Python(TensorFlow, Keras).",
        "Training Model with Neural Network & Deep Learning Algorithm", 
        "Testing and Evaluating model using 'Confusion Matrix'",
        "Designing and Developing Mobile App",
        "Implementing trained Machine Learning Model into Mobile Application",],
    },
    {
      title: "Wordpress Developer(Internship)",
      company_name: "NJM Group",
      icon: njm,
      iconBg: "#E6DEDD",
      date: "Jun 2020 - Nov 2020",
      points: [
        "Proficiently skilled in harnessing the power of WordPress (specifically Elementor and DIVI) to craft visually captivating websites that seamlessly adapt to mobile devices, ensuring a user-friendly experience.",
"Boasts an extensive wealth of knowledge and mastery in employing a diverse array of WordPress plugins.",
"Demonstrates adeptness in composing custom code across various languages, encompassing HTML, CSS, JavaScript (JQuery), and PHP, in order to elevate website functionality and design.",

"Displays a comprehensive understanding of implementing potent SEO strategies, encompassing the gamut of On-Page, Off-Page, and Technical SEO methodologies, with the aim of propelling organic traffic and elevating search engine rankings.",
"Possesses invaluable acumen in 'sales experience', consistently delivering outstanding outcomes through a combination of profound service expertise, adept communication, and the art of fostering strong relationships.",
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
      name: "Firstaidpro(Course Booking & Blogs)",
      description:
        "Web-based platform that allows users to search, book, and manage courses, providing a convenient and efficient solution for organization, students & teachers.",
      tags: [
        {
          name: "Wordpress(Elementor)",
          color: "blue-text-gradient",
        },
        {
          name: "PHP, JS, Jquery",
          color: "green-text-gradient",
        },
        {
          name: "SEO, GMB, Google Ads",
          color: "pink-text-gradient",
        },
      ],
      image: firstaidpro,
      source_code_link: "https://www.firstaidpro.com.au/",
    },
    {
      name: "Antimatters(Service Website)",
      description:
        "Web application that enables company to showcase there product, services, stories and communicate with clients.",
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
      image: antimatters,
      source_code_link: "https://github.com/sachham-karki/modern-front-end",
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
          name: "PHP, JS, Jquery",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };
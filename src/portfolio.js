/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Puneet",
  logo_name: "Puneet Verma",
  nickname: "Puneet / picleric",
  full_name: "Puneet Verma",
  subTitle:
    "Full Stack  Developer, Next js Learning Enthusiast. Always learning .",
  resumeLink:
    "https://drive.google.com/file/d/19GIDSItOS1pMRSbV7mAlNEXmDN8j5lvB/view?usp=sharing",
  mail: "Puneet12345v@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Puneet95-max",
  linkedin: "https://www.linkedin.com/in/puneet-verma-933742235/",
  gmail: "Puneet12345v@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://x.com/is_puneet20756?t=csX-LhOWQQha10kuautW6g&s=09",
  instagram: "https://www.instagram.com/puneet_verma_x/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on Microsoft Azure",
        "⚡ Deploying Django backend on Azure and heroku",
        "⚡ knowledge of working on Docker ",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Backend and APIs",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and github projects",
        "⚡ Experience in Making and Development of APIs ",
        "⚡ Certifications by NIELIT in machince learning and AI",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjabi University ",
      subtitle: "B.tech in  Computer Engineering ",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "http://www.punjabiuniversity.ac.in/",
    },
    {
      title: "Modern Nabha Public Sr Sec School",
      subtitle: "12th in Non-medical",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I have learnt Problem Solving skills and core concepts of maths",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://mnps.co.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python and machine learning",
      subtitle: "Artificial Intelligence",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.linkedin.com/posts/puneet-verma-933742235_engineering-summertraining-learninganddevelopment-activity-7096522563995996160-sERb?utm_source=share&utm_medium=member_desktop",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for opportunities. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Rolf fit",
          company_url: "https://www.rolf.fit/",
          logo_path: "quicko.jpg",
          duration: "jan 2023 - Present",
          location: "Bengalore",
          description:
            "Rolf fit is an Organization which works for Emoployes Mental Health.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Developer",
          company: "Rolf fit",
          company_url: "https://www.rolf.fit/",
          logo_path: "google_logo.png",
          duration: "june 2023 - dec 2023",
          location: "Work From Home",
          description:
            "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
          color: "#ee3c26",
        },
        {
          title: "Machince Learning ",
          company: "NIELIT",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "april 2022 - auguest 2020",
          location: "Work From Home",
          description:
            "Internship task was to understand the basic learning models",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Hackathons",
          company: "Punjabi University",
          company_url: "/",
          logo_path: "google_logo.png",
          duration: "Summer of 2017 / 18 / 20",
          location: " ",
          description:
            "Hackathons completetion to make somethiing valuable in real life",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Dev projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    // profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    // link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Yummy",
      url: "https://yummyx.vercel.app",
      description: "Online Food Ordering application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "/",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },

    {
      name: "Pazcare",
      url: "https://Pazcarex.vercel.app",
      description: " ",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

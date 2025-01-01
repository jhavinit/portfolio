/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vinit Jha",
  title: "Hi all, I'm Vinit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building end to end software solutions with JavaScript / Reactjs / Nodejs / Mongodb and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jhavinit",
  linkedin: "https://www.linkedin.com/in/vinit-narayan-jha-07",
  gmail: "jhavinit07@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@vj76223",
  stackoverflow: "https://stackoverflow.com/users/10180554/jhavinit",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Driven Full Stack Developer with a passion for end-to-end development, turning startup ideas into impactful solutions!",
  skills: [
    emoji(
      "⚡ Developing End-to-End Solutions: Expertise in building full-stack applications, from crafting interactive UIs with Angular/React to designing scalable backends using Node.js and Express"
    ),
    emoji(
      "⚡ Data-Driven Systems: Proficient in integrating databases like Elasticsearch, MongoDB, and Hadoop, optimized for high-speed data storage and analytics"
    ),
    emoji(
      "⚡ Cloud & Containerized Services: Skilled in deploying and managing microservices on Docker, leveraging AWS for hosting, and integrating third-party services for enhanced functionality."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "Sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fa fa-stream"
    },
    {
      skillName: "Elasticsearch",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UIET Panjab University",
      logo: require("./assets/images/UIET_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "2017 - 2021",
      desc: "CGPA: 8.97",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "KV AFS Agra",
      logo: require("./assets/images/kv_logo.png"),
      subHeader: "12th Standard",
      duration: "2016-2017",
      desc: "SCORE: 91.8%",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Nubewell Networks",
      companylogo: require("./assets/images/nubewell_logo.png"),
      date: "2021 – Present",
      desc: "Led the end-to-end development of a high-performance Network Security and Analytics solution, handling 500M+ sessions with optimized storage and real-time data processing",
      descBullets: [
        "Optimized High-Volume Data Processing: Engineered a scalable system to handle 500M+ internet traffic sessions, enhancing Elasticsearch and Hadoop write speeds from 1M to 350M records, and achieving a 1:5 data compression ratio for efficient storage management.",
        "End-to-End Solution Development: Designed and implemented a microservices-based architecture using Node.js, Angular, Kafka, Redis, and Docker, integrating analytics, real-time monitoring, RBAC with Keycloak, and seamless data migration from Elasticsearch to HDFS."
      ]
    },
    {
      role: "Internship",
      company: "IIT BOMBAY",
      companylogo: require("./assets/images/iitb_logo.png"),
      date: "May 2019 - July 2019",
      desc: "Explored cutting-edge technologies at IIT Bombay, integrating Blockchain, IoT, and Robotics to develop innovative and decentralized automation solutions.",
      descBullets: [
        "Blockchain & IoT Integration: Developed an IoT-based blockchain network for robotic systems, comparing DAG and Blockchain models for data integrity and efficiency",
        "Smart Automation with AR & Algorithms: Designed a robot for shortest path planning using Dijkstra's algorithm, integrating augmented reality elements with OpenCV and Blender for real-world interactions",
        "Decentralized Framework Development: Created a blockchain-based decentralized framework for a multi-robot foraging system using V-Rep simulation and Python, showcasing innovative use of emerging technologies"
      ]
    },
    {
      role: "Internship",
      company: "Design Innovation Centre",
      companylogo: require("./assets/images/dic_logo.jpeg"),
      date: "July 2019 - July 2020",
      desc: "",
      descBullets: [
        "IoT Dashboard and Mobile Application Development: Engineered an IoT platform to receive live data from multiple devices, performing real-time analysis and visualization. Developed an Angular/Bootstrap-based web dashboard and a Flutter mobile application for Android and iOS, featuring real-time map tracking, live data streaming with Socket.io, and RESTful APIs using Node.js and Express. Deployed the solution on AWS EC2, integrating services like AWS SES, SNS, and S3 for comprehensive cloud functionality",
        "RFID UHF-Based Gateway Implementation: Designed and implemented an RFID UHF-based gateway to transmit RFID tag data to the cloud for validation purposes. Connected an RFID reader to a Raspberry Pi, utilizing MQTT protocols for secure data transmission. Developed an Angular-based application to monitor car entry, exit, and parking status, with backend services built in Node.js and Python, all deployed on AWS infrastructure",
        "pyVHR-Based Heart Rate Monitoring System: Developed RESTful API endpoints using Node.js, Express, and MongoDB to facilitate heart rate calculation from video streams. Integrated the pyVHR machine learning module for accurate heart rate monitoring, deploying the solution on AWS EC2 instances with Redis for caching, ensuring efficient and scalable performance"
      ]
    },
    {
      role: "Internship",
      company: "Telecommunication labs",
      companylogo: require("./assets/images/telelabs.png"),
      date: "Jun 2018 - July 2018",
      desc: "",
      descBullets: [
        "I developed a secure serverless peer-to-peer communication channel using WebRTC, enabling video and audio conferencing along with chat functionalities",
        "I also utilized SIP.js, HTML, CSS, and JavaScript to create a web application supporting video conferencing, audio conferencing, and chat features",
        "I implemented a secure serverless peer-to-peer communication channel using WebRTC protocol, supporting video conferencing, audio conferencing, and chat functionalities"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gms_logo.jpg"),
      projectName: "Centralized Configuration and Analysis Platform",
      projectDesc:
        "Developed a comprehensive network security and analytics solution that aggregated over 500 million internet traffic sessions from edge devices to a central server, optimized data processing speeds, achieved a 1:5 data compression ratio for efficient storage management, and led client communications and on-site deployments, contributing to increased company revenue",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/iot_logo.jpg"),
      projectName: "IoT Dashboard and Web/App",
      projectDesc:
        "Engineered an IoT platform to receive live data from multiple devices, performing real-time analysis and visualization, and developed a web dashboard using Angular/Bootstrap and a mobile app with Flutter, featuring real-time map tracking, live data streaming via Socket.io, and RESTful APIs using Node.js and Express",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Nodejs Certificate",
      subtitle: "Completed Certifcation from Udemy for Nodejs Development",
      image: require("./assets/images/nodejs_logo.png"),
      imageAlt: "Udemy nodejs code",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-f3e209bc-1a05-4dd1-a55e-2008c4e2d895"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Arctic Code Vault Contributor",
      subtitle:
        "@jhavinit contributed code to 2 repositories in the 2020 GitHub Archive Program",
      image: require("./assets/images/arctic_code_github_badge.png"),
      imageAlt: "Arctic Code Vault Contributor Logo",
      footerLink: [
        {
          name: "View Arctic Code Vault Contributor",
          url: "https://github.com/jhavinit?tab=achievements"
        }
      ]
    },

    {
      title: "IIT Bombay Scholarship Winner",
      subtitle:
        "4th position in IIT Bombay eYantra Robotics Hackathon out of 4000 teams in India",
      image: require("./assets/images/iitb_logo.png"),
      imageAlt: "IIT Bombay eYantra Logo",
      footerLink: [
        {name: "eYRC", url: "https://portal.e-yantra.org/"}
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Research Paper Published",
      subtitle:
        "Internet of Things (IoT) Protocols, Communication Technologies, and Services in Industry",
      image: require("./assets/images/research_page.png"),
      imageAlt: "Research Paper Logo",
      footerLink: [
        {
          name: "Research Paper Link",
          url: "https://www.researchgate.net/publication/359124654_Internet_of_Things_IoT_Protocols_Communication_Technologies_and_Services_in_Industry"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "jhavinit07@gmail"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

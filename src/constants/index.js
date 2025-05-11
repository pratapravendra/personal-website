export const myProjects = [
  {
    id: 1,
    title: "Tube-Mate",
    description:
      "A full-featured YouTube clone that allows users to watch, upload, like, and comment on videos, featuring a responsive UI, real-time updates, and channel subscriptions.",
    subDescription: [
      "Developed a YouTube-like video streaming platform using React and Node.js, enabling video upload, playback, and user interaction features",
      "Integrated secure user authentication and authorization using JWT and MongoDB for managing user profiles, likes, and subscriptions.",
      "Implemented real-time updates for likes, comments, and views using WebSockets and RESTful APIs.",
      "Designed a responsive and modern UI with Tailwind CSS, supporting dark mode and optimized for mobile and desktop devices",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/tube mate.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb-logo-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "ExpressJs",
        path: "/assets/logos/express-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "ReactJs",
        path: "/assets/logos/react-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "NodeJs",
        path: "/assets/logos/node-js-svgrepo-com.svg",
      },
    ],
  },
   {
    id: 2,
    title: "SnapGram",
    description:
      "A full-feature Instagram clone",
    subDescription: [
      "Developed a Instagram clone with feature like uploading photos and sharing videos",
      "Integrated secure user authentication and authorization using JWT and MongoDB for managing user profiles, likes, and subscriptions.",
      "Implemented real-time updates for likes, comments, and views using WebSockets and RESTful APIs.",
      "Designed a responsive and modern UI with Tailwind CSS, supporting dark mode and optimized for mobile and desktop devices",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/instgram.jpg",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb-logo-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "ExpressJs",
        path: "/assets/logos/express-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "ReactJs",
        path: "/assets/logos/react-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "NodeJs",
        path: "/assets/logos/node-js-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 2,
    title: "QuickRickshaw",
    description:
      "A full-feature transportation service platform",
    subDescription: [
      "Developed a feature very similar to Rapido and Uber",
      "Integrated secure user authentication and authorization using JWT and MongoDB for managing user profiles, real time locations , OTP and ride status .",
      "Implemented real-time updates for likes, comments, and views using WebSockets and RESTful APIs.",
      "Designed a responsive and modern UI with Tailwind CSS, supporting dark mode and optimized for mobile and desktop devices",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Erickshaw.jpg",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb-logo-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "ExpressJs",
        path: "/assets/logos/express-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "ReactJs",
        path: "/assets/logos/react-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "NodeJs",
        path: "/assets/logos/node-js-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Grilli Restaurant LookUp",
    description:
      "A Restaurant lading page",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented Jquery and also reponsiveness",
      "Added a table booking system",
      "Integrated Sections for adding new dishes and restaurants ."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/restaurant.jpg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5-01-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/logos/javascript-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "Jquery",
        path: "/assets/logos/javascript-svgrepo-com.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "E-mail",
    href: "https://mail.google.com/mail/?view=cm&to=ravendrapratapsin78@gmail.com" ,
    icon: "/assets/socials/email-part-2-svgrepo-com.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ravendra-pratap-/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/pratapravendra/",
    icon: "/assets/socials/github-color-svgrepo-com.svg",
  },
];

export const experiences = [
  {
    title: "QuickRickshaw",
    job: "College Major Project",
    date: "2024-2025",
    contents: [
      "Quick Rickshaw is an innovative transport application developed using the MERN stack (MongoDB, Express.js, React, Node.js), designed to provide fast, reliable ", 
      "And affordable rickshaw booking services. It leverages Mobile Edge Radio Technology (MERT) to offer low-latency communication and real-time tracking, ensuring smoother coordination between drivers and passengers.", 
      "The app features a user-friendly interface where users can quickly book rides, track driver location, view estimated fare, and make secure payments."
    ],
  },
  {
    title: "SnapGram",
    job: "Collge Minor Project",
    date: "2024",
    contents: [
      "Image Uploading: Users can upload images with captions using Cloudinary for efficient cloud storage and optimized delivery.",
       "Like System: Real-time like/unlike functionality with user tracking to prevent duplicate likes.",
       "Follow System: Allows users to follow/unfollow each other and view feed based on followed users.",
        "MERN Stack Architecture: Structured into a scalable backend (Express + MongoDB) and reactive frontend (React + Tailwind)."
    ],
  },
  {
    title: "Health Management Platform",
    job: "Next-Js",
    date: "2025-Present",
    contents: [
      "Front-End Development: Building responsive and accessible UI using Next.js (App Router) with TailwindCSS and ShadCN UI for a clean and consistent design system.",
       "Secure Authentication: Implementing role-based access control with JWT for patients, doctors, and admins.",
      " Appointment Scheduling System: Users can book, manage, and receive reminders for doctor appointments.",
      "Medical Records Management: Secure upload and retrieval of patient medical records stored in MongoDB.",
      "Live Chat & Consultation: Real-time chat feature for patient-doctor communication (planned/in progress).",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

import maroon from "@/assets/maroon.png";
import portfolio from "@/assets/portfolio.png";
// import webopsify from "@/assets/webopsify.png";
import kite from "@/assets/kite.png";
import resolve from "@/assets/resolve.png";
import onparlefrench from "@/assets/onparlefrench.png"
import craftyr from "@/assets/craftyr.png"

export type projectData = {
    image: {
      src: string;
    };
    title: string;
    description: string;
    header: string;
    tags: string[];
    link: {
      github: string;
      youtube?: string;
      live?: string;
    };
  };
  
  export const projectsContent: projectData[] = [
    {
      image: {
        src: onparlefrench,
      },
      title: "onparlefrench",
      header: "SaaS",
      description:
        "Built a platform for teachers to upload French language materials and students to access them securely by having subscription.",
      tags: [
        "Nextjs",
        "Tailwind CSS",
        "Shadcn/ui",
        "PostgreSQL",
        "Prisma",
        "AWS S3",
        "Redis",
        "Clerk"
      ],
      link: {
        github: "https://github.com/themanoz",
        youtube: "",
        live: "https://onparlefrench.site",
      },
    },
    {
      image: {
        src: resolve,
      },
      title: "Resolve",
      header: "Complaint Handling Management System",
      description:
        "Resolve is a complaint management system. It offers a user-friendly platform for tracking and ensuring timely resolutions, enhancing student satisfaction.",
      tags: [
        "Nextjs",
        "Tailwind CSS",
        "Shadcn/ui",
      ],
      link: {
        github: "https://github.com/themanoz/resolve",
        youtube: "",
        live: "https://resolve-one.vercel.app/",
      },
    },
    {
      image: {
        src: craftyr,
      },
      title: "craftyr",
      header: "AI Resume Builder",
      description:
        "craftyr is resume builder, it tailors the resume based on the job description using AI.",
      tags: [
        "Nextjs",
        "Tailwind CSS",
        "Shadcn/ui",
      ],
      link: {
        github: "https://github.com/themanoz/craftyr",
        youtube: "",
        live: "https://craftyr.vercel.app/",
      },
    },
    {
      image: {
        src: maroon,
      },
      title: "Maroon Marketing Agency",
      header: "Marketing Agency website",
      description:
        "Maroon Marketing Agency is a digital marketing agency that offers a suite of marketing services to help brands grow their business.",
      tags: [
        "Typescript",
        "React.js",
        "TailwindCSS",
        "ShadcnUI",
      ],
      link: {
        github: "https://github.com/themanoz/maroonmarketing",
        youtube: "",
        live: "https://maroonmarketing.vercel.app/",
      },
    },
    {
      image: {
        src: portfolio,
      },
      title: "Portfolio",
      header: "Manoj Kumar | Portfolio",
      description:
        "The goal of this project is to design and develop a personal portfolio website that effectively highlights my skills, projects, and professional experience.",
      tags: [
        "Javascript",
        "React.js",
        "Tailwind Css",
        "Framar Motion",
        "Typescript",
        "Shadcn UI",
      ],
      link: {
        github: "https://github.com/themanoz/themanoz",
        youtube: "",
        live: "https://themanoz.vercel.app/",
      },
    },
    // {
    //     image: {
    //       src: webopsify,
    //     },
    //     title: "WebOpsify",
    //     header: "Blogging app",
    //     description:
    //       "WebOpsify is a blogging website which allows user to do CRUD operations on their blogs. Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests.",
    //     tags: [
    //       "Javascript",
    //       "Node.js",
    //       "Hono.js",
    //       "Prisma",
    //       "PostgreSQL",
    //       "JWT",
    //       "bCrypt",
    //       "Reactjs",
    //       "TypeScript"
    //     ],
    //     link: {
    //       github: "https://github.com/themanoz/medium-clone",
    //       youtube: "",
    //       live: "https://medium-clone-gules-tau.vercel.app/",
    //     },
    //   },
      {
        image: {
          src: kite,
        },
        title: "Kite Connect Clone",
        header: "API app",
        description:
          "Kite Connect APIs to execute real orders, obtain live market data, manage portfolios and more. Make your platform market execution ready within minutes without the hassles of becoming a stock brokerage.",
        tags: [
          "Javascript",
          "Reactjs",
        ],
        link: {
          github: "https://github.com/themanoz/kite",
          youtube: "",
          live: "https://kite-clone-black.vercel.app/",
        },
      },
      
  ];
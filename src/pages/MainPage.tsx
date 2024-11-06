import React from 'react';
import './MainPage.css';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/MainPageHeader';
import Services from '../components/Services';
import Teams from '../components/Teams';
import { TbBrandLinkedin } from 'react-icons/tb';
import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';
import Credits from '../components/Credits';
import Shapes from '../components/Shapes';

const SocialIcons = {
    "LinkedIn": TbBrandLinkedin
}

const TeamData = [

    {
        "fullName": "Sep Aminian",
        "description": "Sep, with an MSc in Artificial Intelligence, is your go-to tech wizard for all things software, machine learning, AI, and web app development. Whether it's crafting smart solutions with NLP magic, building robust web applications, or diving deep into cutting-edge tech like LLMs, RAG, and cloud wizardry, he's got it covered. From crunching code in Python, JavaScript, and TypeScript to wielding PyTorch, Django, React, and Node.js, Sep brings innovation to life. With a knack for blending sharp analytical skills, seamless communication, and expertise in full-stack development, he ensures every project is not just efficient and scalable, but also a touch of genius!",
        "img": "/eagle.png",
        "socials": [
            // { "name": "LinkedIn", "link": "", }
        ]
    }, {
        "fullName": "Amirali Monjar",
        "description": "Amirali holds an MSc in Games Development and a BSc in Computer Engineering, with expertise in software engineering, game design and programming, computer graphics, and web, mobile, and desktop application development. He is also highly skilled in Virtual and Augmented Reality (VR/AR) development. Combining technical proficiency with a passion for creativity, Amirali excels at crafting immersive, interactive experiences that push the boundaries of innovation. His work blends artistic vision with precise engineering, resulting in projects that are both visually stunning and technically sound. From designing compelling games to developing cutting-edge VR/AR solutions, he is committed to delivering high-quality, engaging experiences that captivate users.",
        "img": "/horse.png",
        "socials": [
            // { "name": "LinkedIn", "link": "", }
        ]
    },
    {
       "fullName": "Parastoo Falakaflaki",
       "description": "Parastoo, with an MSc in Big Data Science, is a highly skilled innovator who thrives on tackling complex challenges in software development, machine learning, and web app creation. Whether designing advanced NLP systems, developing cutting-edge web applications, or leveraging the latest in LLMs, RAG, and cloud technologies, Parastoo delivers excellence at every turn. Proficient in Python, JavaScript, TypeScript, React, Node.js, and a host of other tools, she combines deep technical expertise with strategic insight to build scalable, high-impact solutions that are as powerful as they are seamless.",
       "img": "/pony.png",
       "socials": [
           // { "name": "LinkedIn", "link": "", }
       ]
   }, {
        "fullName": "Ali Shahri",
        "description": "Ali holds a BSc and PhD in Software Engineering, as well as an MSc in Ethical Hacking and Cyber Security. His expertise concerns system design, system architecture, and requirements engineering. With a deep understanding of designing and architecting complex software systems, Ali ensures they are both scalable and secure. Over the years, he has successfully designed, assessed, and delivered numerous projects, including the development of specialised modelling languages that streamline and enhance the software design process. His approach guarantees that every project is built on a solid foundation, adhering to the highest standards of quality and security.",
        "img": "/lion.png",
        "socials": [
            // { "name": "LinkedIn", "link": "", }
        ]
    }
]


const ProjectsData = [
    { url: './magehands.mp4', title: 'Mage Hands', desc: "A VR game set in a fantasy viking world" },
    { url: './magehands.mp4', title: 'Mage Hands', desc: "A VR game set in a fantasy viking world" },
    { url: './magehands.mp4', title: 'Mage Hands', desc: "A VR game set in a fantasy viking world" },
    { url: './magehands.mp4', title: 'Mage Hands', desc: "A VR game set in a fantasy viking world" },
    { url: './magehands.mp4', title: 'Mage Hands', desc: "A VR game set in a fantasy viking world" },
];

const ServicesData = {
    tagline: "Partner with us to unlock a world of possibilities for your digital projects-driving growth, innovation, and excellence in every solution we deliver.",
    serviceList:[
        {
            title: "Web Development",
            desc: "Create high-performance websites optimized for user experience and growth."
        },
        {
            title: "Digital Transformation",
            desc: "Modernise processes with cutting-edge tech for efficiency and agility."
        },
        {
            title: "IT Strategy & Consulting",
            desc: "Align IT investments with business goals for maximum impact and ROI."
        },
        {
            title: "Cloud Services",
            desc: "Scale operations with tailored cloud integration and management."
        },
        {
            title: "Software Development",
            desc: "Build custom software that drives innovation and meets your needs."
        },
        {
            title: "AI-powered Applications",
            desc: "Develop intelligent solutions to support data-driven strategies."
        }
    ]
}





function MainPage() {


    return (
        <>

            <div className="background">
                <NavBar siteName="FerdowSoft"/>
                <MainPageHeader />
                <Shapes />

            </div>
            <hr className="gradient services-scroll-section" />
            <Services serviceList={ServicesData.serviceList} desc={ServicesData.tagline}/>
            <hr className="gradient team-scroll-section" />
            <Teams SocialIcons={SocialIcons} TeamData={TeamData} />
            <hr className="gradient projects-scroll-section" />
            <Gallery Projects={ProjectsData} />
            <hr className="gradient contact-scroll-section" />
            <ContactUs SocialIcons={SocialIcons} />
            <hr className="gradient" />
            <Credits />

        </>
    )

}


export default MainPage
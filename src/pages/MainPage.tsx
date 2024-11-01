import React from 'react';
import './MainPage.css';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/MainPageHeader';
import Services from '../components/Services';
import Teams from '../components/Teams';
import { TbBrandLinkedin } from 'react-icons/tb';
import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';

const SocialIcons = {
    "LinkedIn": TbBrandLinkedin
}

const TeamData = [

    {
        "fullName": "Sep Aminian",
        "description": "Sep Aminian holds an MSc in Artificial Intelligence. His expertise lies in software development, machine learning, and artificial intelligence, with a focus on natural language processing. With professional experience in financial and legal sector, Sep has demonstrated proficiency in developing innovative machine learning solutions using cutting-edge technologies such as LLMs, RAG, and various cloud services. His skills span multiple programming languages and frameworks, including Python, JavaScript, PyTorch, and Django. Sep's approach combines technical expertise with strong analytical and communication skills, ensuring the delivery of efficient, scalable, and innovative software solutions.",
        "img": "/sep.jpg",
        "socials": [
            { "name": "LinkedIn", "link": "", }
        ]
    }, {
        "fullName": "Amirali Monjar",
        "description": "Amirali holds an MSc in Games Development and a BSc in Computer Engineering, with expertise in software engineering, game design and programming, computer graphics, and web, mobile, and desktop application development. He is also highly skilled in Virtual and Augmented Reality (VR/AR) development. Combining technical proficiency with a passion for creativity, Amirali excels at crafting immersive, interactive experiences that push the boundaries of innovation. His work blends artistic vision with precise engineering, resulting in projects that are both visually stunning and technically sound. From designing compelling games to developing cutting-edge VR/AR solutions, he is committed to delivering high-quality, engaging experiences that captivate users.",
        "img": "https://i.postimg.cc/sgBkfbtx/img-1.jpg",
        "socials": [
            { "name": "LinkedIn", "link": "", }
        ]
    }, {
        "fullName": "Ali Shahri",
        "description": "Ali holds a BSc and PhD in Software Engineering, as well as an MSc in Ethical Hacking and Cyber Security. His expertise concerns system design, system architecture, and requirements engineering. With a deep understanding of designing and architecting complex software systems, Ali ensures they are both scalable and secure. Over the years, he has successfully designed, assessed, and delivered numerous projects, including the development of specialised modelling languages that streamline and enhance the software design process. His approach guarantees that every project is built on a solid foundation, adhering to the highest standards of quality and security.",
        "img": "https://i.postimg.cc/sgBkfbtx/img-1.jpg",
        "socials": [
            { "name": "LinkedIn", "link": "", }
        ]
    }, {
        "fullName": "Amirali Monjar",
        "description": "In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old.",
        "img": "https://i.postimg.cc/sgBkfbtx/img-1.jpg",
        "socials": [
            { "name": "LinkedIn", "link": "", }
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
    tagline: "we do a lot of stuff, just give us money please. thanks",
    serviceList:[
        { title: "Web Development", desc: "Yeah, like... we totally do web dev" },
        { title: "Web Development", desc: "Yeah, like... we totally do web dev" },
        { title: "Web Development", desc: "Yeah, like... we totally do web dev" },
        { title: "Web Development", desc: "Yeah, like... we totally do web dev" },
        { title: "Web Development", desc: "Yeah, like... we totally do web dev" },
        { title: "Web Development", desc: "Yeah, like... we totally do web dev" }
    ]

}





function MainPage() {


    return (
        <>

            <div className="background">
                <NavBar siteName="FerdowSoft"/>
                <MainPageHeader />

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


        </>
    )

}


export default MainPage
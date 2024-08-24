import React from 'react';
import './MainPage.css';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/MainPageHeader';
import Services from '../components/Services';
import Teams from '../components/Teams';
import { TbBrandLinkedin } from 'react-icons/tb';
import Gallery from '../components/Gallery';

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
        "description": "In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old.",
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
    }, {
        "fullName": "Amirali Monjar",
        "description": "In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old.",
        "img": "https://i.postimg.cc/sgBkfbtx/img-1.jpg",
        "socials": [
            { "name": "LinkedIn", "link": "", }
        ]
    }
]


function MainPage() {


    return (
        <>

            <div className="background">
                <NavBar />
                <MainPageHeader />

            </div>
            <hr className="gradient" />
            <Services />
            <hr className="gradient" />
            <Teams SocialIcons={SocialIcons} TeamData={TeamData} />
            <hr className="gradient" />
            <Gallery />


        </>
    )

}


export default MainPage
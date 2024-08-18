import React from 'react';
import './MainPage.css';
import NavBar from '../components/NavBar';
import MainPageHeader from '../components/MainPageHeader';
import Services from '../components/Services';
import Teams from '../components/Teams';
import { TbBrandLinkedin } from 'react-icons/tb';

const SocialIcons = {
    "LinkedIn": TbBrandLinkedin
}

const TeamData = [

    {
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


        </>
    )

}


export default MainPage
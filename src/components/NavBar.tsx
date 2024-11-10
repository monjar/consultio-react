import React, { useState } from "react"
import { scroller } from "react-scroll";

import "../pages/MainPage.css"

// Define an interface for the props
interface NavBarProps {
    siteName: string;
    // Add other expected props here
}

function NavBar(props: NavBarProps) {

    const [isOpen, setIsOpen] = useState(false)
    const onNavBarClick = () => {
        setIsOpen(!isOpen)
    }


    const GetOnScrollToSection = (sectionName: string) => {
        return () => {
            setIsOpen(false);
            scroller.scrollTo(sectionName + "-scroll-section", {
                delay: 0,
                smooth: "easeInOutQuart",
            });
        }
    };
    return (<nav>
        <div className="navWrapper">
            <a href="." id="logo">{props.siteName}</a>
            <div className="right">
                <div id="nav-icon" className={(isOpen ? "open" : "")} onClick={onNavBarClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={"overlay " + (isOpen ? "open" : "")}>
                    <div className="overlayContent">
                        <div id="services" className={(isOpen ? "overlay-item open" : "")} onClick={ GetOnScrollToSection("services")}>Services</div>
                        <div id="team" className={(isOpen ? "overlay-item open" : "")} onClick={GetOnScrollToSection("team")}>The team</div>
                        <div id="work" className={(isOpen ? "overlay-item open" : "")} onClick={GetOnScrollToSection("projects")}>Our work</div>
                        <div id="contact" className={(isOpen ? "overlay-item open" : "")} onClick={GetOnScrollToSection("contact")}>Contact</div>
                        <p className={(isOpen ? "open" : "")} >Copyright ©{new Date().getFullYear()} FerdowSoft</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
}


export default NavBar
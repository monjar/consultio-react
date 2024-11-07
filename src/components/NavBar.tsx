// $(document).ready(function () {
//     $('#nav-icon').click(function () {
//         $(this).toggleClass('open');
//         $(".overlay").toggleClass("open");
//         $(".overlay a").toggleClass("open");
//         $(".overlay p").toggleClass("open");
//     });

import { useState } from "react"
import { scroller } from "react-scroll";

import "../pages/MainPage.css"
//     // Scroll Reveal
//     // ScrollReveal().reveal('.services .grid .card');

//     $('.square.blue').on('inview', function (event, isInView) {
//         if (isInView) {
//             // element is now visible in the viewport
//             $(this).addClass("in-view");
//         } else {
//             // element has gone out of viewport
//             $(this).removeClass("in-view");
//         }
//     });
// });



function NavBar(props: any) {

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
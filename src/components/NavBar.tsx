// $(document).ready(function () {
//     $('#nav-icon').click(function () {
//         $(this).toggleClass('open');
//         $(".overlay").toggleClass("open");
//         $(".overlay a").toggleClass("open");
//         $(".overlay p").toggleClass("open");
//     });

import { useState } from "react"
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



function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const onNavBarClick = () => {
        setIsOpen(!isOpen)
    }
    return (<nav>
        <div className="navWrapper">
            <a href="" id="logo">Powit</a>
            <div className="right">
                <div id="nav-icon" className={(isOpen ? "open" : "")} onClick={onNavBarClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={"overlay " + (isOpen ? "open" : "")}>
                    <div className="overlayContent">
                        <a href="#" id="services" className={(isOpen ? "open" : "")} >Services</a>
                        <a href="#" id="work" className={(isOpen ? "open" : "")} >Our work</a>
                        <a href="#" id="contact" className={(isOpen ? "open" : "")} >Contact</a>
                        <p className={(isOpen ? "open" : "")} >Copyright 2018</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
}


export default NavBar
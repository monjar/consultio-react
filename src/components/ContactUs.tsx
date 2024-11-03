
import "./ContactUs.css"

import React, { useEffect, useRef } from "react";

const ContactUs = (props: any) => {
    // Use refs to target the input elements
    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);
    const socialIcons: {
        [key: string]: React.ComponentType<{
            className?: string;
        }>
    } = props.SocialIcons


    const getSocial = (name: string) => {

        const ItemIcon = socialIcons[name]
        return (<ItemIcon className="contact-social-item" />)

    }
    // Add focus/blur event listeners for input elements
    useEffect(() => {
        const inputs = [
            nameInputRef.current,
            emailInputRef.current,
            phoneInputRef.current,
            messageInputRef.current,
        ];

        const handleFocus = (e: Event) => {
            const target = e.target as HTMLElement;
            const parent = target.parentElement;
            parent?.classList.add("focus");
        };

        const handleBlur = (e: Event) => {
            const target = e.target as HTMLInputElement | HTMLTextAreaElement;
            const parent = target.parentElement;
            if (target.value === "") {
                parent?.classList.remove("focus");
            }
        };

        inputs.forEach((input) => {
            input?.addEventListener("focus", handleFocus);
            input?.addEventListener("blur", handleBlur);
        });

        return () => {
            inputs.forEach((input) => {
                input?.removeEventListener("focus", handleFocus);
                input?.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    return (
        <div className="contact-container">
            {/* <span className="big-circle"></span>
            <img src="img/shape.png" className="square" alt="" /> */}
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Let's get in touch</h3>
                    <p className="text">
                    Get in touch with us today to see how we can enhance your applications and websites,
                     creating a seamless, powerful experience for your users!
                    </p>

                    <div className="info">
                        {/* <div className="information">
                            <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                            <p>92 Cherry Drive Uniondale, NY 11553</p>
                        </div> */}
                        <div className="information">
                            <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                            <p>amirsepehr.aminian@gmail.com</p>
                        </div>
                        <div className="information">
                            <i className="fas fa-phone"></i>&nbsp;&nbsp;
                            <p>+447878807771</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us:</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/amirsepehr-aminian/">
                                {/* <i className="fab fa-facebook-f"></i> */}
                                {getSocial("LinkedIn")}
                            </a>
                            {/* <a href=".">
                                <i className="fab fa-twitter"></i>
                            </a> */}
                            {/* <a href=".">
                                <i className="fab fa-instagram"></i>
                            </a> */}
                            {/* <a href=".">
                                <i className="fab fa-linkedin-in"></i>
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <span className="circle one"></span>
                    <span className="circle two"></span>

                    <form action="index.html" autoComplete="off">
                        <h3 className="title">Contact us</h3>

                        <div className="contact-input-container">
                            <input
                                ref={nameInputRef}
                                type="text"
                                name="name"
                                className="contact-input"
                                autoComplete="Off"
                            />
                            <label>Username</label>
                            <span>Username</span>
                        </div>

                        <div className="contact-input-container">
                            <input
                                ref={emailInputRef}
                                type="email"
                                name="email"
                                className="contact-input"
                                autoComplete="Off"
                            />
                            <label htmlFor="">Email</label>
                            <span>Email</span>
                        </div>

                        <div className="contact-input-container">
                            <input
                                ref={phoneInputRef}
                                type="tel"
                                name="phone"
                                className="contact-input"
                                autoComplete="Off"
                            />
                            <label>Phone</label>
                            <span>Phone</span>
                        </div>

                        <div className="contact-input-container textarea">
                            <textarea
                                ref={messageInputRef}
                                name="message"
                                className="contact-input"
                            ></textarea>
                            <label>Message</label>
                            <span>Message</span>
                        </div>

                        <input type="submit" value="Send" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

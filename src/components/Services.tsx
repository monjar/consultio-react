import { useInView } from "react-intersection-observer";

function Services() {

    //     $('.square.blue').on('inview', function (event, isInView) {
    //         if (isInView) {
    //             // element is now visible in the viewport
    //             $(this).addClass("in-view");
    //         } else {
    //             // element has gone out of viewport
    //             $(this).removeClass("in-view");
    //         }
    //     });

    const { ref, inView } = useInView({
        threshold: 0
    });
    return (<div className="section services">
        <div className="sectionWrapper">
            <h6>what we offer</h6>
            <h2>Our services</h2>
            <p className="description">I am developing these skills from when I was 12 years old. I still love what I do and I would love to share my knowledge with the world.</p>
            <div ref={ref} className={"square blue" + (inView ? " in-view" : "")}></div>
            <div className="grid">
                <div className="card">
                    <h3>Web Development</h3>
                    <p>I create websites and web services.</p>
                </div>
                <div className="card">
                    <h3>Web Design</h3>
                    <p>I design webpages and web platforms.</p>
                </div>
                <div className="card">
                    <h3>Branding</h3>
                    <p>I design brand guidelines and brand styles.</p>
                </div>
                <div className="card">
                    <h3>Social Media Marketing</h3>
                    <p>I run a social media business.</p>
                </div>
                <div className="card">
                    <h3>Social Media Marketing</h3>
                    <p>I run a social media business.</p>
                </div>
                <div className="card">
                    <h3>Social Media Marketing</h3>
                    <p>I run a social media business.</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Services
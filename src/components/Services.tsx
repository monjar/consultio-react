import { useInView } from "react-intersection-observer";

function Services(props: any) {

    //     $('.square.blue').on('inview', function (event, isInView) {
    //         if (isInView) {
    //             // element is now visible in the viewport
    //             $(this).addClass("in-view");
    //         } else {
    //             // element has gone out of viewport
    //             $(this).removeClass("in-view");
    //         }
    //     });

    const servicesData = props.serviceList
    const { ref, inView } = useInView({
        threshold: 0
    });
    return (<div className="section services">
        <div className="sectionWrapper">
            <h6>what we offer</h6>
            <h2>Our services</h2>
            <p className="description">{props.desc}</p>
            <div ref={ref} className={"square blue" + (inView ? " in-view" : "")}></div>
            <div className="grid">
                {servicesData.map((service: any, index: number) => (
                    <div className="card">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </div>)
}

export default Services
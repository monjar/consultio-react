import React from "react";

// Define an interface for the props
interface ServicesProps {
    serviceList: { title: string; desc: string }[];
    desc: string;
}

function Services(props: ServicesProps) {
    const servicesData = props.serviceList;
    return (
        <div className="section services">
            <div className="sectionWrapper">
                <h6>what we offer</h6>
                <h2>Our services</h2>
                <p className="description">{props.desc}</p>
                <div className="grid">
                    {servicesData.map((service, index) => (
                        <div className="card" key={index}>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
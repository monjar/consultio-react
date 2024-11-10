import React from "react";
import "./Gallery.css"

// Define a TypeScript interface for the project objects
interface Project {
    type: string;
    url: string;
    title: string;
    desc: string;
}

function Gallery(props: { Projects: Project[] }) {
    const galleryItems = props.Projects;
    
    const playVideo = (event: React.MouseEvent<HTMLVideoElement>) => {
        const video = event.currentTarget;
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > video.HAVE_CURRENT_DATA;

        if (!isPlaying) video.play();
    };

    const PauseVideo = (event: React.MouseEvent<HTMLVideoElement>) => {
        const video = event.currentTarget;
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > video.HAVE_CURRENT_DATA;

        if (isPlaying) video.pause();
    };

    const renderMedia = (project: Project, index: number) => {
        if (project.type === 'video') {
            return (
                <video playsInline muted loop preload="auto"
                    key={index}
                    onMouseOver={playVideo}
                    onMouseOut={PauseVideo}
                >
                    <source src={project.url} />
                </video>
            );
        } else {
            return (
                <img 
                    src={project.url} 
                    alt={project.title}
                    loading="lazy"
                />
            );
        }
    };

    return (
        <div className="gallery-container">
            <h6>Where we shined</h6>
            <h2>Sample Projects</h2>
            <div className="gallery-wrap">
                {galleryItems.map((project: Project, index: number) => (
                    <div className="gallery-item" key={index}>
                        {renderMedia(project, index)}
                        <div className="gallery-item-title">
                            {project.title}
                        </div>
                        <div className="gallery-item-description">
                            {project.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery
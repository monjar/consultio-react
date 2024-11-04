
import "./Gallery.css"
function Gallery(props : any) {
    
    const  galleryItems = props.Projects
    const playVideo = (event: any) => {
        const video = event.target;
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > video.HAVE_CURRENT_DATA;

        if (!isPlaying)
            event.target.play()
    }
    const PauseVideo = (event: any) => {
        const video = event.target;

        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > video.HAVE_CURRENT_DATA;

        if (isPlaying)
            event.target.pause()
    }

    return (<div className="gallery-container">
        <h6>Where we shined</h6>
        <h2>Sample Projects</h2>
        {/* <h1 className="gallery-title">Gallery</h1> */}

        <div className="gallery-wrap">
            {/* <div className="gallery-item gallery-item-1"></div>
            <div className="gallery-item gallery-item-2"></div>
            <div className="gallery-item gallery-item-3"></div>
            <div className="gallery-item gallery-item-4"></div>
            <div className="gallery-item gallery-item-5"></div> */}
            {/* // style={{
                    //     backgroundImage: `url(${url})`,
                    // }} */}
            {galleryItems.map((project : any, index: number) => (
                <div className="gallery-item" key={index}>
                    <video playsInline muted loop preload="auto"
                        key={index}
                        onMouseOver={playVideo}
                        onMouseOut={PauseVideo}
                    >
                        {/* <iframe src="https://www.youtube.com/embed/-PEmQkcHclY" title="MageHands" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                        <source src={project.url} />

                    </video>
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
    )
}


export default Gallery
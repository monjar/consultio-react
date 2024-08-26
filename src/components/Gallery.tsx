
import "./Gallery.css"
function Gallery() {
    const galleryItems = [
        './magehands.mp4',
        './pianohands.mkv',
        'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format',
        'https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format',
        'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format',
    ];

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
        <h1 className="gallery-title">Gallery</h1>

        <div className="gallery-wrap">
            {/* <div className="gallery-item gallery-item-1"></div>
            <div className="gallery-item gallery-item-2"></div>
            <div className="gallery-item gallery-item-3"></div>
            <div className="gallery-item gallery-item-4"></div>
            <div className="gallery-item gallery-item-5"></div> */}
            {/* // style={{
                    //     backgroundImage: `url(${url})`,
                    // }} */}
            {galleryItems.map((url, index) => (
                <div className="gallery-item">
                    <video playsInline muted loop preload="auto"
                        key={index}
                        onMouseOver={playVideo}
                        onMouseOut={PauseVideo}
                    >
                        {/* <iframe src="https://www.youtube.com/embed/-PEmQkcHclY" title="MageHands" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                        <source src={url} />

                    </video>
                    <div className="gallery-item-title">
                        ssssssss
                    </div>
                    <div className="gallery-item-description">
                        asfasfas fasjfh asjf as;jf as;lf aj;shf a;sf asfh asf aspufg
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}


export default Gallery
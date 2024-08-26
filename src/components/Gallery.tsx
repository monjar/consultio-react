
import "./Gallery.css"
function Gallery() {
    const galleryItems = [
        'https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format',
        'https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format',
        'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format',
        'https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format',
        'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format',
    ];
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
                    <video autoPlay playsInline muted loop preload="auto" poster="http://i.imgur.com/xHO6DbC.png"
                        key={index}


                    >

                        <source src="https://storage.coverr.co/videos/7RzPQrmB00s01rknm8VJnXahEyCy4024IMG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI5MTg2NjA0fQ.M8oElp5VNO8bWEWmdF2nGiu3qDOOYRFfP8wkKvl8I20" />

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
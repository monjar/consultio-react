
function MainPageHeader() {
    return (<div className="header">
        <div className="headerWrapper">
            <h6>we do</h6>
            <h1>Software Design<br /> & Development</h1>
            <div className="circle blue"></div>
            <div className="square red"></div>
            <div className="circle orange"></div>
            <div className="triangle green">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 177.893 177.893">
                    <defs>
                        <style>{`.a{fill:url(#a);}.b{filter:url(#b);}`}</style>
                        <linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#3dbed5" />
                            <stop offset="1" stopColor="#3dd55a" />
                        </linearGradient>
                        <filter id="b" x="0" y="0" width="177.893" height="177.893" filterUnits="userSpaceOnUse">
                            <feOffset dx="3" dy="3" />
                            <feGaussianBlur stdDeviation="7.5" result="c" />
                            <feFlood floodColor="#3dd55a" floodOpacity="0.396" />
                            <feComposite operator="in" in2="c" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g className="b" transform="matrix(1, 0, 0, 1, 0, 0)">
                        <path className="a" d="M136.727,21104.928l-50.222,100h100Z" transform="translate(-8978.23 -19029.24) rotate(-25)" />
                    </g>
                </svg>
            </div>
        </div>
    </div>)
}

export default MainPageHeader
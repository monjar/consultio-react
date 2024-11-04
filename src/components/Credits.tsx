import { useInView } from "react-intersection-observer";

function Credits(props: any) {

    return (<div className="credits">   
        <span className="credits">Copyright ©{new Date().getFullYear()} FerdowSoft</span>
    </div>)
}

export default Credits
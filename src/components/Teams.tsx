import { PropsWithChildren, useState } from "react"
import "./Teams.css"

function Teams(props: any) {

    const teamData = props.TeamData
    const socialIcons: {
        [key: string]: React.ComponentType<{
            className?: string;
        }>
    } = props.SocialIcons

    const [selectedBox, setSelectedBox] = useState("")
    const onBoxClicked = (boxNumStr: string) => {

        return () => {
            if (boxNumStr === selectedBox)
                setSelectedBox("")
            else
                setSelectedBox(boxNumStr)
        }
    }
    const selectedMember = teamData[Number.parseInt(selectedBox) - 1]

    return (
        <>
            <h6>Who are we</h6>
            <h2>The Team</h2>
            <div className="teams">

                <div className="teamspanel">
                    <div className={"container " + "selected-" + selectedBox}>
                        {teamData.map((member: any, index: number) => {

                            const numString: string = (index + 1).toString();
                            return (<div
                                className={"box " + (selectedBox === numString ? "selected" : "unselected")}
                                style={{
                                    backgroundImage: `url(${member.img})`
                                }}

                                data-text={member.fullName}
                                onClick={onBoxClicked(numString)}
                            ></div>)
                        })}
                        {/* <div
                        className={"box " + (selectedBox === "1" ? "selected" : "unselected")}
                        style={{
                            backgroundImage: "url(https://i.postimg.cc/sgBkfbtx/img-1.jpg)"
                        }}

                        data-text="Renji"
                        onClick={onBoxClicked("1")}
                    ></div>
                    <div
                        className={"box " + (selectedBox === "2" ? "selected" : "unselected")}
                        style={{
                            backgroundImage: "url(https://i.postimg.cc/sgBkfbtx/img-1.jpg)"
                        }}
                        data-text="Renji"
                        onClick={onBoxClicked("2")}

                    ></div>
                    <div
                        className={"box " + (selectedBox === "3" ? "selected" : "unselected")}
                        style={{
                            backgroundImage: "url(https://i.postimg.cc/sgBkfbtx/img-1.jpg)"
                        }}
                        data-text="Renji"
                        onClick={onBoxClicked("3")}

                    ></div>
                    <div
                        className={"box " + (selectedBox === "4" ? "selected" : "unselected")}
                        style={{
                            backgroundImage: "url(https://i.postimg.cc/sgBkfbtx/img-1.jpg)"
                        }}
                        data-text="Renji"
                        onClick={onBoxClicked("4")}

                    ></div> */}


                    </div>

                    <div className="decriptions">
                        <h3>{selectedMember?.fullName}</h3>
                        <p>{selectedMember?.description}</p>
                        <div className="socials">
                            {selectedMember?.socials.map((item: { name: string }, index: number) => {
                                const ItemIcon = socialIcons[item.name]
                                return (<ItemIcon key={index} className="social-item" />)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams
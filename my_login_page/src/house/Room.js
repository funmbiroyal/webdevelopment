import Pillar from "./Pillar"

const Room = ({pillar})=>{
    return(
        <div className ="room">
            Room{pillar}
            <div className="roomPillarContainer">
                <Pillar />
                <Pillar />
                <Pillar />
                <Pillar />
            </div>
        </div>
    )
}

export default Room


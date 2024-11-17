import Bedroom1 from "./Bedroom1";
import Bedroom2 from "./Bedroom2";
import Bedroom3 from "./Bedroom3";
import Kitchen from "./Kitchen";
import FullBath from "./FullBath";
import HalfBath from "./HalfBath";
import LivingRoom from "./LivingRoom";

const FloorPlan = () => {
    return (
        <div>
            <Bedroom1 />
            <Kitchen />
            <FullBath />
            <Bedroom2 />
            <LivingRoom />
            <HalfBath />
            <Bedroom3 />
        </div>
    );
}

export default FloorPlan;
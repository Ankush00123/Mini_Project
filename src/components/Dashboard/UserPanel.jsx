import { useDispatch, useSelector } from "react-redux";
import GoalCard from "./GoalCard";
import UserGreet from "./UserGreet";
import ChartContainer from "../Charts/ChartContainer";

const UserPanel = () => {
    const { subjectList } = useSelector(state => state.subject);
    return (
        <div>
            <UserGreet />
            <GoalCard />
            <ChartContainer/>
        </div>
    );
};

export default UserPanel;
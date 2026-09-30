import ChartContainer from "../Charts/ChartContainer";
import GoalCard from "./GoalCard";
import UserGreet from "./UserGreet";

const UserOnboarded = () =>
{
    return (
        <div>
            <UserGreet />
            <GoalCard />
            <ChartContainer />
        </div>
    )
}

export default UserOnboarded;
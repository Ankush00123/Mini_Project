import { useSelector } from "react-redux";

const GoalCard = () => {
    const { goal, deadline } = useSelector(state => state.goal);
    return (
        <div>
            <h1><strong>{goal}</strong></h1>
            <h5>{deadline}</h5>
        </div>
    )
};

export default GoalCard;


import { useDispatch, useSelector } from "react-redux";
import GoalCard from "./GoalCard";
import UserGreet from "./UserGreet";
import { addDummySubjects } from "../../utils/subjectUtils";
import SubjectCard from "../Subjects/SubjectCard";

const UserPanel = () => {
    const subjectList = useSelector(state => state.subject.subjectList);
    const dispatch = useDispatch();
    const addDummyHandler = () => {
        addDummySubjects(dispatch);
    }
    return (
        <div>
            <UserGreet />
            <GoalCard />
            <button onClick={addDummyHandler}>Add Dummy Subejcts</button>
            {
                subjectList.map((subject) => (
                    <SubjectCard subject={subject} key={subject.id} />
                ))
            }
        </div>
    );
};

export default UserPanel;
import { useDispatch } from "react-redux";
import { mountNewUser } from "./../../store/features/userSlice";
import { addDummySubjects } from "../../utils/subjectUtils";
import { addDummySession } from "../../store/features/subjectSlice";

const NoUserPanel = () => {
    const dispatch = useDispatch();

    const addUserHandler = (userName) => {
        dispatch(mountNewUser({ name: userName }));
        addDummySubjects(dispatch);
        dispatch(addDummySession());
    };

    return (
        <div>
            <h1>No User Found</h1>
            <button onClick={() => addUserHandler("user")}>Add User</button>
        </div>
    );
};

export default NoUserPanel;
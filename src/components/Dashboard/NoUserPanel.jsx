import { useDispatch } from "react-redux";
import { addNewUser } from "./../../store/features/userSlice";

const NoUserPanel = () => {
    const dispatch = useDispatch();

    const addUserHandler = (userName) => {
        dispatch(addNewUser({name: userName}));
    };

    return (
        <div>
            <h1>No User Found</h1>
            <button onClick={() => addUserHandler("user5")}>Add User</button>
        </div>
    );
};

export default NoUserPanel;
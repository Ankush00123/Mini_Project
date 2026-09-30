import { useSelector } from "react-redux";

const UserGreet = () => {
    const username = useSelector(state => state.user.name);
    return (
        <div
            className=""
        >
            <h1>Welcome! {username}</h1>
        </div>
    )
};

export default UserGreet;
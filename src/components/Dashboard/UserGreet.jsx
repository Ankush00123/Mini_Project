import { useSelector } from "react-redux";

const UserGreet = () => {
    const username = useSelector(state => state.user.name);
    return (
        <div className="mb-1">
            <h1 className="font-['Lexend'] text-3xl font-semibold text-zinc-100">
                Welcome! {username}
            </h1>
        </div>
    )
};

export default UserGreet;
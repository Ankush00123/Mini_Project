import { useSelector } from "react-redux";
import NoUserPanel from "./NoUserPanel";
import UserPanel from "./UserPanel";

const Dashboard = () => {

    const { isLoggedIn } = useSelector(state => state.user);

    return (
        <div>
            {!isLoggedIn && <NoUserPanel />}
            {isLoggedIn && <UserPanel />}
        </div>
    );
};

export default Dashboard;
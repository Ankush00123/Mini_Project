import { useSelector } from "react-redux";
import NoUserPanel from "./NoUserPanel";
import UserPanel from "./UserPanel";

const Dashboard = () => {

    const { userProfileMounted } = useSelector(state => state.user);

    return (
        <div>
            {!userProfileMounted && <NoUserPanel />}
            {userProfileMounted && <UserPanel />}
        </div>
    );
};

export default Dashboard;
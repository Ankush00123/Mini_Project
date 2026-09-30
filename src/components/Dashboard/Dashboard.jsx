import { useSelector } from "react-redux";
import UserNotOnboarded from "./UserNotOnboarded";
import UserOnboarded from "./UserOnboarded";

const Dashboard = () => {

    const { userProfileMounted } = useSelector(state => state.user);

    return (
        <div>
            {!userProfileMounted && <UserNotOnboarded />}
            {userProfileMounted && <UserOnboarded />}
        </div>
    );
};

export default Dashboard;
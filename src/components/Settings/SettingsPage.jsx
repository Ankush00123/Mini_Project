import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../store/features/userSlice";
import ImportExport from "./ImportExport";
import DeleteProfile from "./DeleteProfile";
import GoalEdit from "./GoalEdit";
import UsernameEdit from "./UsernameEdit";
import DummyDataSeeder from "./DummyDataSeeder";

const SettingsPage = () => {
    const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });

    const userProfileMounted = useSelector(state => state.user.userProfileMounted);
    return (
        <div className="p-4 sm:p-8 max-w-3xl mx-auto w-full space-y-6 font-['Lexend']">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-100">Settings</h1>
                <p className="text-sm text-zinc-400 mt-1">Manage your profile</p>
            </div>

            {/* Notification */}
            {statusMessage.text && (
                <div className={`p-4 rounded-2xl text-sm border transition-all ${
                    statusMessage.type === "success" 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                        : "bg-red-500/10 border-red-500/20 text-red-400"
                }`}>
                    {statusMessage.text}
                </div>
            )}

            <UsernameEdit setStatusMessage={setStatusMessage}/>
            
            <GoalEdit setStatusMessage={setStatusMessage}/>
            <ImportExport setStatusMessage={setStatusMessage} />

            <DummyDataSeeder setStatusMessage={setStatusMessage}/>
            
            {userProfileMounted && <DeleteProfile setStatusMessage={setStatusMessage}/>}
        </div>
    );
};

export default SettingsPage;
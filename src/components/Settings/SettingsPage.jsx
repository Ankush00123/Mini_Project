import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exportUserData, importUserData } from "../../utils/exportImportUtils";
import { updateUsername } from "../../store/features/userSlice";

const SettingsPage = () => {
    const dispatch = useDispatch();
    
    //active sessions are not saved or exported
    const userState = useSelector(state => state.user);
    const goalState = useSelector(state => state.goal);
    const subjectState = useSelector(state => state.subject);
    const u_name = useSelector(state => state.user.name);
    const userProfileMounted = useSelector(state => state.user.userProfileMounted);

    //input field local
    const [userNameInput, setUserNameInput] = useState(u_name);
    const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });

    const handleExportData = () => {
        try {
            exportUserData(userState, goalState, subjectState);
            setStatusMessage({ text: "Backup file exported successfully!", type: "success" });
            setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
        } catch (error) {
            setStatusMessage({ text: "Failed to export backup.", type: "error" });
        }
    };

    const handleImportData = (e) => {
        importUserData(e, dispatch, (success) => {
            if (success) {
                setStatusMessage({ text: "Data imported successfully!", type: "success" });
            } else {
                setStatusMessage({ text: "Invalid or corrupted backup file.", type: "error" });
            }
            setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
        });
    };

    const handleUpdateName = (e) => {
        e.preventDefault();
        // no user profile 
        if (!userProfileMounted)
        {
            setStatusMessage({ text: "Username Update Failed! No user found", type: "failure" })
            setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
            return;
        }

        //no username provided
        if (!userNameInput.trim()) return;
        dispatch(updateUsername(userNameInput.trim()));
        setStatusMessage({ text: "Username updated successfully!", type: "success" });
        setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
    };

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

            {/* User related info*/}
            <div className="bg-[#121216] border border-zinc-800/70 p-6 rounded-3xl shadow-xl space-y-4">
                <h3 className="text-base font-semibold text-zinc-100">User Profile</h3>
                <form onSubmit={handleUpdateName} className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        value={userNameInput}
                        onChange={e => setUserNameInput(e.target.value)}
                        placeholder="Enter username"
                        className="
                            flex-1 bg-zinc-900 border border-zinc-800 rounded-xl
                            px-4 py-2.5 text-sm text-zinc-100
                            focus:outline-none focus:border-indigo-500 transition-all
                        "
                    />
                    <button 
                        type="submit"
                        className="
                            px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 
                            text-white rounded-xl text-sm font-medium 
                            transition-all shadow-lg shadow-indigo-500/20 active:scale-95
                        "
                    >
                        {userNameInput !== u_name ? "Save" : "Change Name"}
                    </button>
                </form>
            </div>

            {/* Data Portability (import export)*/}
            <div className="bg-[#121216] border border-zinc-800/70 p-6 rounded-3xl shadow-xl space-y-4">
                <div>
                    <h3 className="text-base font-semibold text-zinc-100">Data Portability</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                        create a backup of your profile keep your sessions data safe and move from one device to another
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    {/* Export Button */}
                    <button 
                        onClick={handleExportData}
                        className="
                            px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 
                            border border-zinc-700/60 text-zinc-200 rounded-xl 
                            text-sm font-medium transition-all flex items-center gap-2
                        "
                    >
                        Export Backup (.stc)
                    </button>

                    {/* Import Button */}
                    <label className="
                        px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 
                        border border-zinc-700/60 text-zinc-200 rounded-xl 
                        text-sm font-medium transition-all cursor-pointer flex items-center gap-2
                    ">
                        Import Backup
                        <input
                            type="file"
                            accept=".stc,.json"
                            onChange={handleImportData}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>

            {/* Goal details */}
            <div className="bg-[#121216] border border-zinc-800/70 p-6 rounded-3xl shadow-xl space-y-3">
                <h3 className="text-base font-semibold text-zinc-100">Active Academic Goal</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-2xl">
                        <span className="text-xs text-zinc-500 block mb-1">Goal</span>
                        <span className="text-zinc-200 font-semibold">{goalState.goal}</span>
                    </div>
                    <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-2xl">
                        <span className="text-xs text-zinc-500 block mb-1">Deadline Date</span>
                        <span className="text-red-400 font-semibold">{goalState.deadline}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
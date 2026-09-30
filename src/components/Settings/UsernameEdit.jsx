import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../store/features/userSlice";

const UsernameEdit = ({setStatusMessage}) =>
{
    const { name, userProfileMounted } = useSelector(state => state.user);
    const dispatch = useDispatch();

    //input field local
    const [userNameInput, setUserNameInput] = useState(name);

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

    /* User related info*/
    return (
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
                    {userNameInput !== name ? "Save" : "Change Name"}
                </button>
            </form>
        </div>
    )
}

export default UsernameEdit;
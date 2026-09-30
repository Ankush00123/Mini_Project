import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUserState } from "../../store/features/userSlice";
import { resetSessionState } from "../../store/features/sessionSlice";
import { resetGoalState } from "../../store/features/goalSlice";
import { resetSubjectState } from "../../store/features/subjectSlice";

const DeleteProfile = ({setStatusMessage}) =>
{
    const name = useSelector(state => state.user.name);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteUserData = () =>
    {
        if (!isConfirmed)
        {
            setIsConfirmed(true);
            return;
        }

        dispatch(resetSessionState());
        dispatch(resetGoalState());
        dispatch(resetSubjectState());
        dispatch(resetUserState());
        setStatusMessage({ text: "User Profile Deleted", type: "success" });
        setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
    }

    
    {/* Delete user data */}
    return (   
        <div className="bg-[#121216] border border-red-900/30 p-6 rounded-3xl shadow-xl space-y-3">
            <h3 className="text-base font-semibold text-red-400">Delete Profile</h3>
            <p className="text-sm text-zinc-400">
                Delete <span className="text-zinc-200 font-medium">{name}</span>'s profile — this removes all subjects, sessions, and your goal. This can't be undone unless you have a backup.
            </p>

            <div className="flex items-center gap-3">
                <button
                    onClick={handleDeleteUserData}
                    className={`
                        px-5 py-2.5 rounded-xl text-sm font-medium transition-all
                        ${isConfirmed
                            ? 'bg-red-500 hover:bg-red-400 text-white' 
                            : 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20'
                        }
                    `}
                >
                    {isConfirmed ? "Click again to confirm" : "Delete Profile"}
                </button>

                {isConfirmed && (
                    <button
                        onClick={() => setIsConfirmed(false)}
                        className="text-xs text-zinc-500 hover:text-zinc-300"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </div>   
    )
}

export default DeleteProfile;
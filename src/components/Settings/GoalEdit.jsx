import { useDispatch, useSelector } from "react-redux";
import { updateGoal } from "../../store/features/goalSlice";
import { useState } from "react";

const GoalEdit = ({ setStatusMessage }) => {

    const { goal, deadline } = useSelector(state => state.goal);
    const [isGoalStateEditing, setIsGoalStateEditing] = useState(false);
    const [goalInput, setGoalInput] = useState("");
    const [deadlineInput, setDeadlineInput] = useState("");

    const dispatch = useDispatch();

    const handleEditGoal = () =>
    {
        setIsGoalStateEditing(true);
        setGoalInput(goal);
        setDeadlineInput(deadline);
    }

    const handleSaveGoal = () =>
    {
        if (!goalInput.trim())
        {
            setStatusMessage({ text: "Goal or deadline updating failed", type: "error" });
            setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
            setIsGoalStateEditing(false);
            return;
        }
        dispatch(updateGoal({ goal: goalInput.trim(), deadline: deadlineInput }));
        setIsGoalStateEditing(false);
        setStatusMessage({ text: "Goal or deadline updated successfully", type: "success" });
        setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
    }

    const inputClass = "bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-zinc-100 focus:outline-none focus:border-indigo-500/50";

    return (
        <div className="bg-[#121216] border border-zinc-800/70 p-6 rounded-3xl shadow-xl space-y-4">
            <h3 className="text-base font-semibold text-zinc-100">Active Academic Goal</h3>
            
            {/* Added flex items-center justify-between to keep everything aligned horizontally on the same line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                    {isGoalStateEditing ? (
                        <input
                            value={goalInput}
                            onChange={(e) => setGoalInput(e.target.value)}
                            autoFocus
                            className={`${inputClass} font-['Lexend'] font-semibold flex-1`}
                        />
                    ) : (
                        <h1 className="font-['Lexend'] text-xl font-semibold text-zinc-100">{goal ? goal : "Not set"}</h1>
                    )}

                    {isGoalStateEditing ? (
                        <input
                            value={deadlineInput}
                            onChange={(e) => setDeadlineInput(e.target.value)}
                            placeholder="e.g. Feb 2027"
                            className={`${inputClass} sm:w-36`}
                        />
                    ) : (
                        <div className="text-sm text-red-400/90 self-start sm:self-center">{deadline ? deadline : "Not set"}</div>
                    )}
                </div>

                <button
                    className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 
                        text-white rounded-xl text-sm font-medium 
                        transition-all shadow-lg shadow-indigo-500/20 active:scale-95
                        shrink-0 self-start sm:self-auto
                    "
                    onClick={isGoalStateEditing ? handleSaveGoal : handleEditGoal}
                >
                    {isGoalStateEditing ? "Save Changes" : "Change Goal"}
                </button>
            </div>
        </div>
    )
}

export default GoalEdit;
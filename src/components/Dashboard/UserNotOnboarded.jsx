import { useState } from "react";
import { mountNewUser } from "../../store/features/userSlice";
import { useDispatch } from "react-redux";

const UserNotOnboarded = () => {
    const [onboarding, setOnboarding] = useState(false);
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleAddNewUser = () => {
        if (!onboarding) {
            setOnboarding(true);
            return;
        } else {
            name.trim() ? dispatch(mountNewUser({ name })) : dispatch(mountNewUser({ name: "user" }));
            setOnboarding(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="
                w-full max-w-sm
                bg-[#121216] border border-zinc-800/70 rounded-3xl
                p-8 shadow-2xl
                flex flex-col items-center gap-1
            ">

                <h1 className="font-['Lexend'] text-xl font-semibold text-zinc-100 text-center">
                    Welcome to Study Tracker
                </h1>
                <p className="text-sm text-zinc-500 text-center mb-3">
                    {onboarding ? "Enter a username" : "Let's set up your profile to get started"}
                </p>

                {onboarding && (
                    <div className="w-full mb-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                            placeholder="Your name"
                            onKeyDown={(e) => e.key === "Enter" && handleAddNewUser()}
                            className="
                                w-full bg-zinc-900/60 border border-zinc-800 rounded-xl
                                px-4 py-2.5 text-sm text-zinc-100 text-center
                                placeholder:text-zinc-600
                                focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900
                                transition-all
                            "
                        />
                    </div>
                )}

                <button
                    onClick={handleAddNewUser}
                    className="
                        w-full py-3 
                        bg-indigo-500 hover:bg-indigo-400 
                        text-white rounded-xl text-sm font-medium
                        shadow-lg shadow-indigo-500/20
                        transition-all active:scale-95
                    "
                >
                    {onboarding ? "Get Started" : "Add New User"}
                </button>
            </div>
        </div>
    )
}

export default UserNotOnboarded;
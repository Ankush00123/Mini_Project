import { useSelector } from "react-redux";

const GoalCard = () => {
    const { goal, deadline } = useSelector(state => state.goal);
    return (
        <div
            className="
                relative overflow-hidden
                bg-[#16161d] border border-zinc-900 rounded-2xl
                p-5 mb-5"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -mr-8 -mt-8" />
            <h1 className="font-['Lexend'] text-xl font-semibold text-zinc-100 mb-3"><strong>{goal}</strong></h1>
            <div className="flex items-center gap-1.5 text-sm text-red-400/90">
                {deadline}
            </div>
        </div>
    )
};

export default GoalCard;


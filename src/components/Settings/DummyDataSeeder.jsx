import { useDispatch } from "react-redux";
import { addDummySubjects } from "../../utils/subjectUtils";
import { addDummySession } from "../../store/features/subjectSlice";

const DummyDataSeeder = ({ setStatusMessage }) => {
    const dispatch = useDispatch();

    const handleLoadDummyData = () => {
        try {
            
            addDummySubjects(dispatch);
            dispatch(addDummySession());

            setStatusMessage({ text: "Dummy data loaded successfully!", type: "success" });
            setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
        } catch (error) {
            setStatusMessage({ text: "Failed to load dummy data.", type: "error" });
            setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
        }
    };

    return (
        <div className="bg-[#121216] border border-zinc-800/70 p-6 rounded-3xl shadow-xl space-y-3 font-['Lexend']">
            <div>
                <h3 className="text-base font-semibold text-zinc-100">Load Demo / Dummy Data</h3>
                <p className="text-sm text-zinc-400 mt-1">
                    Instantly populate your application with sample subjects and realistic historical study sessions to test charts and metrics.
                </p>
            </div>

            <button
                onClick={handleLoadDummyData}
                className="
                    px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 
                    border border-zinc-700/60 text-indigo-400 rounded-xl 
                    text-sm font-medium transition-all active:scale-95 shadow-sm
                "
            >
                Load Sample Data
            </button>
        </div>
    );
};

export default DummyDataSeeder;
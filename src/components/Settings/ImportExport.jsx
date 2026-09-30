import { useDispatch, useSelector } from "react-redux";
import { exportUserData, importUserData } from "../../utils/exportImportUtils";

const ImportExport = ({setStatusMessage}) =>
{
    //active sessions are not saved or exported
    const userState = useSelector(state => state.user);
    const goalState = useSelector(state => state.goal);
    const subjectState = useSelector(state => state.subject);

    const dispatch = useDispatch();

    //import export handlers
    const handleExportData = () => {
        try {
            exportUserData(userState, goalState, subjectState);
            setStatusMessage({ text: "Backup file exported successfully!", type: "success" });
            setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
        } catch (error) {
            setStatusMessage({ text: "Failed to export backup.", type: "error" });
            setTimeout(() => setStatusMessage({ text: "", type: "" }),4000);
        }
    };

    const handleImportData = (e) => {
        importUserData(e, dispatch);
        setStatusMessage({ text: "userfile imported successfully!", type: "success" });
        setTimeout(() => setStatusMessage({ text: "", type: "" }), 4000);
    };

    /* Data Portability (import export)*/
    return (
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
    )
}

export default ImportExport;
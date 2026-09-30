import { useSelector } from "react-redux";
import WeeklyHoursBarChart from "./WeeklyHoursBarChart";
import WeeklyHoursLineChart from "./WeeklyHoursLineChart";
import WeeklyHoursPieChart from "./WeeklyHoursPieChart";
import { useState } from "react";

const ChartContainer = () => {
    const subjectList = useSelector(state => state.subject.subjectList);
    const [chartType, setChartType] = useState("Bar");

    return (
        <div className="bg-[#121216] border border-zinc-800/70 rounded-3xl p-5 sm:p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h3 className="font-['Lexend'] text-base font-semibold text-zinc-100">
                        Study Activity
                    </h3>
                </div>

                <select
                    value={chartType}
                    onChange={e => setChartType(e.target.value)}
                    className="
                        bg-zinc-900 border border-zinc-700/60 rounded-xl
                        px-3.5 py-2 text-xs text-zinc-200 font-medium
                        focus:outline-none focus:border-indigo-500
                        cursor-pointer shadow-sm transition-all
                    "
                >
                    <option value="Bar"> Bar Chart </option>
                    <option value="Line"> Line Chart </option>
                    <option value="Pie"> Pie Chart </option>
                </select>
            </div>

            <div className="w-full">
                {chartType === "Bar" && <WeeklyHoursBarChart subjectList={subjectList}/>}
                {chartType === "Line" && <WeeklyHoursLineChart subjectList={subjectList}/>}
                {chartType === "Pie" && <WeeklyHoursPieChart subjectList={subjectList}/>}
            </div>
        </div>
    )
}

export default ChartContainer;
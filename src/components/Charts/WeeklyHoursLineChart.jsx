import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { getWeeklyHoursData } from "../../utils/dataUtils";

const WeeklyHoursLineChart = ({ subjectList }) => {
    const data = getWeeklyHoursData(subjectList);
    return (
        <div className="w-full">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">Last Week Details</h3>
            <div className="w-full h-70">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                        <XAxis 
                            dataKey="day" 
                            stroke="#71717a" 
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            axisLine={{ stroke: '#3f3f46' }}
                            tickLine={false}
                        />
                        <YAxis 
                            stroke="#71717a" 
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            axisLine={{ stroke: '#3f3f46' }}
                            tickLine={false}
                        />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#09090b', 
                                border: '1px solid #27272a', 
                                borderRadius: '10px',
                                fontSize: '12px',
                                color: '#f4f4f5'
                            }}
                            itemStyle={{ color: '#10b981' }}
                        />
                        <Line 
                            type="linear" 
                            dataKey="hours" 
                            stroke="#10b981" 
                            strokeWidth={2.5}
                            dot={{ fill: '#10b981', r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default WeeklyHoursLineChart;
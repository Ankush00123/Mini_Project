import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getWeeklyHoursData } from '../../utils/dataUtils';

const COLORS = ['#10b981', '#eab308', '#a855f7', '#ea580c', '#0ea5e9', '#f43f5e', '#84cc16'];

const WeeklyHoursPieChart = ({ subjectList }) => {
    const data = getWeeklyHoursData(subjectList).filter(entry => entry.hours > 0);

    return (
        <div className="w-full">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                Weekly Hours Breakdown
            </h3>

            {data.length === 0 ? (
                <div className="text-zinc-600 italic text-center py-12 text-sm">
                    No sessions logged this week
                </div>
            ) : (
                <div className="w-full h-70">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="hours"
                                nameKey="day"
                                cx="50%"
                                cy="50%"
                                outerRadius={85}
                                label={({ day, hours }) => `${day}: ${hours}h`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={entry.day} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#09090b', 
                                    border: '1px solid #27272a', 
                                    borderRadius: '10px',
                                    fontSize: '12px',
                                    color: '#f4f4f5'
                                }}
                            />
                            <Legend wrapperStyle={{ fontSize: '11px', color: '#a1a1aa' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    )
}

export default WeeklyHoursPieChart;
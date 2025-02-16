import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

interface ProdConsuCardProps {
    data: {
        agricultural_production: number,
        energy_consumption_per_capita: number,
        energy_production: number,
        land_use: {
            agriculture: number,
            industry: number,
            urban: number,
            conservation: number
        }
    }[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ProdConsuCard: React.FC<ProdConsuCardProps> = ({ data }) => {
    return (
        <Card className="bg-green-100 p-5 rounded-xl shadow-md">
            <CardHeader title="Uso del Suelo" />
            <CardContent>
                <ResponsiveContainer height={300}>
                    <PieChart>
                        <Pie data={Object.entries(data[0].land_use).map(([key, value]) => ({ name: key, value }))} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
                            {Object.keys(data[0].land_use).map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default ProdConsuCard
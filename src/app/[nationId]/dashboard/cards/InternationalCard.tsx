import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface InternationalCardProps {
    data: {
        international_perception: string,
        international_trade_level: string
    }[];
}

const InternationalCard: React.FC<InternationalCardProps> = ({ data }) => {
    return (
        <Card className="bg-yellow-100 p-5 rounded-xl shadow-md">
            <CardHeader
                title="Variables Economicas"
                subheader={"a"}
                action=<AttachMoneyIcon />
            />
            <CardContent>
                <ResponsiveContainer height={300}>
                    <LineChart data={data}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="GDP" stroke="#0088FE" name="PIB" />
                        <Line type="monotone" dataKey="inflation" stroke="#FF8042" name="Inflación" />
                        <Line type="monotone" dataKey="unemployment" stroke="#00C49F" name="Desempleo" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default InternationalCard
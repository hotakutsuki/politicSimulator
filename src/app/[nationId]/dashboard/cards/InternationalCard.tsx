import Paper from '@mui/material/Paper';

interface InternationalCardProps {
    data: {
        international_perception: string,
        international_trade_level: string
    }[];
}

const InternationalCard: React.FC<InternationalCardProps> = ({ data }) => {
    return (
        <Paper elevation={3} className="p-5 rounded-xl shadow-md">
            <div className="flex flex-col space-y-1">
                <label className="text-xl">
                    Perception:
                </label>
                <div>
                    {data[0].international_perception}
                </div>
                <label className="text-xl">
                    Trade Level:
                </label>
                <div>
                    {data[0].international_trade_level}
                </div>
            </div>
        </Paper>
    )
}

export default InternationalCard
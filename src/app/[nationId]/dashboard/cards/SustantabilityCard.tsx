import EmojiRepeater from '@/app/ui/components/EmojiRepeter';
import Paper from '@mui/material/Paper';

interface SustantabilityProps {
    data: SustantabilityVariables[];
}

type SustantabilityVariables = {
    resource_exploitation_index: number,
    ecological_footprint: number
}

const SustantabilityCard: React.FC<SustantabilityProps> = ({ data }) => {

    const cur: SustantabilityVariables = data[0]

    return (
        <Paper elevation={3} className="bg-yellow-100 p-5 rounded-xl shadow-md">
            <div className="flex flex-col items-end">
                <label className="place-self-start mb-2">
                    Datos Economicos
                </label>
                <label className="place-self-start text-xl">
                    Resource Explotation Index
                </label>
                <div className="flex flex-row space-x-2 items-end">
                    {cur.resource_exploitation_index}
                </div>
                <label className="place-self-start text-xl">
                    Ecological Footprint
                </label>
                <div className="flex flex-row space-x-2 items-end">
                    <EmojiRepeater className="tracking-tighter" emoji='🌎' times={cur.ecological_footprint} fontSize={60} />
                </div>
            </div>
        </Paper>
    )
}

export default SustantabilityCard
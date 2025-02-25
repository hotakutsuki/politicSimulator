import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
} from '@mui/x-charts/Gauge';
import EmojiRepeater from '@/app/ui/components/EmojiRepeter';
import GaugePointer from '../../../ui/components/GaugePointer';
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
        <Paper elevation={3} className="p-5 rounded-xl shadow-md h-full">
            <div className="flex flex-col items-center">
                <label className="place-self-start mb-2">
                    Sustentability info
                </label>
                <label className="place-self-start text-xl">
                    Ecological Footprint:
                </label>
                <label>
                    {cur.ecological_footprint} Earths
                </label>
                <div className="flex flex-row space-x-2 items-end">
                    <EmojiRepeater className="tracking-tighter" emoji='🌎' times={cur.ecological_footprint} fontSize={60} />
                </div>
                <label className="place-self-start text-xl">
                    Resource Explotation Index:
                </label>
                <label className='-mb-4'>
                    {cur.resource_exploitation_index} / 1.0
                </label>
                <GaugeContainer
                    width={100}
                    height={100}
                    startAngle={-110}
                    endAngle={110}
                    value={cur.resource_exploitation_index * 100}
                >
                    <GaugeReferenceArc />
                    <GaugeValueArc />
                    <GaugePointer />
                </GaugeContainer>
            </div>
        </Paper>
    )
}

export default SustantabilityCard
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {
    Gauge,
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
} from '@mui/x-charts/Gauge';
import GaugePointer from '../../../ui/components/GaugePointer';

interface SocialPropsCard {
    data: {
        population: number;
        life_expectancy: number;
        birth_rate: number;
        mortality_rate: number;
        education_index: number;
        poverty_index: number;
        corruption_index: number;
        migration_index: number;
        happiness_index: number;
    }[];
}

const SocialCard: React.FC<SocialPropsCard> = ({ data }) => {
    return (
        < Card className="bg-white p-5 rounded-xl shadow-md">
            <CardHeader title="Índices Sociales" />
            <div className="grid grid-cols-3 gap-5">
                <div>
                    <h3 className="text-sm font-semibold">Corrupción</h3>
                    <Gauge width={100} height={100} value={data[0].corruption_index * 10} />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Felicidad</h3>
                    <Gauge width={100} height={100} value={data[0].happiness_index} />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Migración</h3>
                    <GaugeContainer
                        width={100}
                        height={100}
                        startAngle={-110}
                        endAngle={110}
                        value={30}
                    >
                        <GaugeReferenceArc />
                        <GaugeValueArc />
                        <GaugePointer />
                    </GaugeContainer>
                    {/* <Gauge value={(data[0].social_variables.migration_index + 10) * 5} /> */}
                </div>
            </div>
        </Card>
    )
}

export default SocialCard
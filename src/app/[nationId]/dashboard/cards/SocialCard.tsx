import Paper from '@mui/material/Paper';
import {
    Gauge,
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
} from '@mui/x-charts/Gauge';
import GaugePointer from '../../../ui/components/GaugePointer';
import NumberFormatter from '@/app/ui/components/numberFormater';

interface SocialPropsCard {
    data: SocialData[];
}

type SocialData = {
    population: number;
    middle_age: number,
    percentage_under_20: number;
    life_expectancy: number;
    birth_rate: number;
    mortality_rate: number;

    education_index: number;
    poverty_index: number;
    corruption_index: number;
    migration_index: number;
    happiness_index: number;
}

const SocialCard: React.FC<SocialPropsCard> = ({ data }) => {
    const cur: SocialData = data[0]

    function getPopulationChange() {
        return 0.02
    }

    return (
        <Paper elevation={3} className="bg-white p-5 rounded-xl shadow-md">
            <div className="flex flex-col items-end space-y-4">
                <label className="place-self-start mb-2">
                    Índices Sociales
                </label>
                <div className='w-full flex flex-row justify-between items-center mb-4'>
                    <label className="place-self-start text-xl">
                        Population 🧍🏻‍♂️
                    </label>
                    <div className="flex flex-row text-xl space-x-2 items-end">
                        <NumberFormatter value={cur.population} decimalPlaces={0} />
                        <div className={`${getPopulationChange() > 0 ? "text-green-400" : "text-red-400"} text-sm`}>
                            {getPopulationChange() > 0 ? "▲" : "▼"}
                            {getPopulationChange()} %
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-evenly items-center'>
                    <div className="flex flex-col items-center justify-end">
                        <label className="place-self-start">
                            Birth Rate
                            {/* 👶 */}
                        </label>
                        <NumberFormatter value={cur.birth_rate} decimalPlaces={0} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <label className="place-self-start">
                            Middle Age
                        </label>
                        <NumberFormatter value={cur.mortality_rate} decimalPlaces={0} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <label className="place-self-start">
                            Mortality Rate
                            {/* 💀 */}
                        </label>
                        <NumberFormatter value={cur.middle_age} decimalPlaces={0} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <label className="place-self-start">
                            Life Expectancy
                        </label>
                        <NumberFormatter value={cur.life_expectancy} decimalPlaces={0} />
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-5">
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
            </div>
        </Paper>
    )
}

export default SocialCard
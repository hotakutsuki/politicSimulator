import NumberFormatter from '@/app/ui/components/numberFormater';
import Paper from '@mui/material/Paper';
import { PieChart } from '@mui/x-charts/PieChart';

interface ProdConsuCardProps {
    data: ProductionConsumption[]
}

type ProductionConsumption = {
    agricultural_production: number,
    agricultural_consumption: number,
    agricultural_import: number,
    agricultural_export: number,
    energy_import: number,
    energy_export: number,
    energy_consumption: number,
    energy_production: {
        hydroelectric: number,
        wind: number,
        solar: number,
        nuclear: number,
        fossil_fuels: number
    },
    land_use: {
        agriculture: number,
        industry: number,
        urban: number,
        conservation: number
    }
}

function getPowerProduction(data: ProductionConsumption): number {
    return data.energy_production.fossil_fuels +
        data.energy_production.hydroelectric +
        data.energy_production.nuclear +
        data.energy_production.solar +
        data.energy_production.wind
}

const ProdConsuCard: React.FC<ProdConsuCardProps> = ({ data }) => {
    const cur: ProductionConsumption = data[0]

    const available = getPowerProduction(cur) + cur.energy_import
    const consumption = cur.energy_consumption + cur.energy_export

    const remaining = available - consumption

    const series = [
        {
            cx: 100,
            innerRadius: 25,
            outerRadius: 45,
            paddingAngle: 2,
            cornerRadius: 5,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { additionalRadius: -1, color: 'gray' },
            data: [
                { label: 'Power Consumption', value: cur.energy_consumption, color: 'Tomato' },
                { label: 'Power Exported', value: cur.energy_export, color: 'Orange' },
                remaining > 0 && { label: 'Unused', value: remaining, color: 'transparent' },
            ],
        },
        {
            cx: 100,
            data: [
                { label: 'Power Generation', value: getPowerProduction(cur), color: 'LimeGreen' },
                { label: 'Imported', value: cur.energy_import, color: 'CornflowerBlue' },
                remaining < 0 && { label: 'Deficit', value: -remaining, color: 'red' },
            ],
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { additionalRadius: -1, color: 'gray' },
            innerRadius: 50,
            outerRadius: 70,
            paddingAngle: 2,
            cornerRadius: 5,
        },
    ];

    return (
        <Paper className="bg-green-100 p-5 rounded-xl shadow-md">
            <div className="flex flex-col items-end space-y-1">
                <label className="place-self-start mb-2">
                    Produccion / Consumo
                </label>
                {/* {productionDetails(data)} */}
                <div className='w-full flex flex-row justify-between items-start'>
                    <label className="place-self-start text-xl">
                        Power
                    </label>
                    <span className={`place-self-start text-xs ${consumption / available > .9 ? "text-red-500" : "text-green-500"}`}>
                        Grid load (<NumberFormatter value={consumption / available * 100} /> %)
                    </span>

                </div>
                {/* <label className="place-self-start text-sm">
                    Available (<NumberFormatter value={available} />{" "}MWh)
                </label>
                <label className="place-self-start text-sm">
                    Consumed (<NumberFormatter value={consumption} />{" "}MWh)
                </label> */}
                <PieChart
                    series={series}
                    slotProps={{
                        legend: {
                            itemMarkHeight: 10,
                        }
                    }}
                    height={150}
                />
                {/* <Gauge width={100} height={100} value={getEnergyConsumptionPercentage()} /> */}
            </div>
        </Paper>
    )
}

// function productionDetails(data) {
//     return (
//         <>
//             <label className="place-self-start text-xl">
//                 Land use
//             </label>
//             <PieChart
//                 series={[
//                     {
//                         data: [
//                             { label: 'Agriculture', value: data[0].land_use.agriculture },
//                             { label: 'Conservation', value: data[0].land_use.conservation },
//                             { label: 'Industry', value: data[0].land_use.industry },
//                             { label: 'Urban', value: data[0].land_use.urban }
//                         ].sort((a, b) => b.value - a.value),
//                         highlightScope: { fade: 'global', highlight: 'item' },
//                         faded: { additionalRadius: -5, color: 'gray' },
//                         innerRadius: 30,
//                         outerRadius: 60,
//                         paddingAngle: 5,
//                         cornerRadius: 5
//                     },
//                 ]}
//                 height={150}
//             />
//             <label className="place-self-start text-xl">
//                 Power Production (
//                 <NumberFormatter value={getPowerProduction(data)} />
//                 {" "}MWh)
//             </label>
//             <PieChart
//                 series={[
//                     {
//                         data: [
//                             { label: 'fossil_fuels', value: data[0].energy_production.fossil_fuels },
//                             { label: 'Hydroelectric', value: data[0].energy_production.hydroelectric },
//                             { label: 'Nuclear', value: data[0].energy_production.nuclear },
//                             { label: 'Solar', value: data[0].energy_production.solar },
//                             { label: 'Wind', value: data[0].energy_production.wind },
//                         ].sort((a, b) => b.value - a.value),
//                         cx: 100,
//                         sortingValues: 'desc',
//                         highlightScope: { fade: 'global', highlight: 'item' },
//                         faded: { additionalRadius: -5, color: 'gray' },
//                         innerRadius: 30,
//                         outerRadius: 60,
//                         paddingAngle: 5,
//                         cornerRadius: 5,
//                     },
//                 ]}
//                 slotProps={{
//                     legend: {
//                         itemMarkHeight: 10,
//                     }
//                 }}
//                 height={150}
//             />
//         </>
//     )
// }

export default ProdConsuCard
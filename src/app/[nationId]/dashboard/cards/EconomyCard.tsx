import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';
import MoneyFormatter from "@/app/ui/components/moneyFormater";

interface EconomyCardProps {
    data: {
        GDP: number;
        inflation: number;
        unemployment: number;
        public_debt: number;
        tax_burden: number;
    }[];
}

const EconomyCard: React.FC<EconomyCardProps> = ({ data }) => {

    function getGDPChange() {
        // TODO
        return 0.1
    }

    function getPublicDebtChange() {
        // TODO
        return -1.01
    }

    function getUnemploymentChange() {
        //todo
        return 1
    }

    return (
        <Paper elevation={3} className="bg-yellow-100 p-5 rounded-xl shadow-md">
            <div className="flex flex-col items-end">
                <label className="place-self-start mb-2">
                    Datos Economicos
                </label>
                <label className="place-self-start text-xl">
                    GDP
                </label>
                <div className="flex flex-row space-x-2 items-end">
                    <MoneyFormatter className="text-3xl" amount={data[0].GDP} />
                    <div className={`${getGDPChange() > 0 ? "text-green-400" : "text-red-400"}`}>
                        {getGDPChange() > 0 ? "▲" : "▼"}
                        {getGDPChange()} %
                    </div>
                </div>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 3, 5, 4.7, 7, 8],
                            color: 'SteelBlue',
                            area: true,
                        },
                    ]}
                    width={500}
                    height={200}
                />
                <div className="w-full grid grid-cols-3 place-items-center mt-4">
                    <div>
                        <label className="place-self-start">
                            Public Debt
                        </label>
                        <div className="flex flex-row space-x-2 items-end">
                            <div className="text-xl">
                                {data[0].public_debt} %
                            </div>
                            <div className={`text-xs ${getPublicDebtChange() > 0 ? "text-green-400" : "text-red-400"}`}>
                                {getPublicDebtChange() > 0 ? "▲" : "▼"}
                                {getPublicDebtChange()} %
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="place-self-start">
                            Inflation
                        </label>
                        <div className="flex flex-row space-x-2 items-end">
                            <div className="text-xl">
                                {data[0].inflation} %
                            </div>
                            <div className={`text-xs ${getPublicDebtChange() > 0 ? "text-green-400" : "text-red-400"}`}>
                                {getPublicDebtChange() > 0 ? "▲" : "▼"}
                                {getPublicDebtChange()} %
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="place-self-start">
                            Unemployment
                        </label>
                        <div className="flex flex-row space-x-2 items-end">
                            <div className="text-xl">
                                {data[0].unemployment} %
                            </div>
                            <div className={`text-xs ${getUnemploymentChange() > 0 ? "text-green-400" : "text-red-400"}`}>
                                {getUnemploymentChange() > 0 ? "▲" : "▼"}
                                {getUnemploymentChange()} %
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default EconomyCard
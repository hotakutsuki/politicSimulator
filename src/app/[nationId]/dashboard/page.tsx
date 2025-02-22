"use client"

import React from "react";
import EconomyCard from './cards/EconomyCard'
import * as jsonData from './mockup/data.json'
import ProdConsuCard from "./cards/ProductionConsumption";
import SocialCard from "./cards/SocialCard";
import SustantabilityCard from "./cards/SustantabilityCard"
import InternationalCard from "./cards/InternationalCard";
import NewsCard from "./cards/NewsCard"

const data = jsonData;

const SimulationDashboard: React.FC = () => {
    return (
        <div suppressHydrationWarning className="w-full p-5 space-y-4">
            <div>
                <div className="flex justify-between text-xl">
                    <label>
                        Summary
                    </label>
                    <label>
                        {data[0].date}
                    </label>
                </div>
                <div>
                    {data[0].context}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <div className="col-span-5">
                    <NewsCard events={data[0].past_events} />
                </div>
                <div className="col-span-3">
                    <EconomyCard data={[data[0].economic_variables]} />
                </div >
                <div className="col-span-2">
                    <SustantabilityCard data={[data[0].sustainability_variables]} />
                </div>
                <div className="col-span-2">
                    <SocialCard data={[data[0].social_variables]} />
                </div>
                <div className="col-span-3">
                    <ProdConsuCard data={[data[0].production_consumption_variables]} />
                </div >
                <div className="col-span-5">
                    <InternationalCard data={[data[0].international_variables]} />
                </div>
            </div>
        </div>
    );
};

export default SimulationDashboard;
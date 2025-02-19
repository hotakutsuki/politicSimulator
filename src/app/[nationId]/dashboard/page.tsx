"use client"

import React from "react";
import EconomyCard from './cards/EconomyCard'
import * as jsonData from './mockup/data.json'
import ProdConsuCard from "./cards/ProductionConsumption";
import SocialCard from "./cards/SocialCard";
import SustantabilityCard from "./cards/SustantabilityCard"

const data = jsonData;

const SimulationDashboard: React.FC = () => {
    return (
        <div suppressHydrationWarning className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <EconomyCard data={[data[0].economic_variables]} />
            <ProdConsuCard data={[data[0].production_consumption_variables]} />
            <SocialCard data={[data[0].social_variables]} />
            <SustantabilityCard data={[data[0].sustainability_variables]} />
        </div>
    );
};

export default SimulationDashboard;
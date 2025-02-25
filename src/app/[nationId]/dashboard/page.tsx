"use client"

import React, { useState, useEffect } from "react";
import EconomyCard from './cards/EconomyCard'
import * as jsonData from './mockup/data.json'
import * as jsonInitialData from './mockup/initialData.json'
import ProdConsuCard from "./cards/ProductionConsumption";
import SocialCard from "./cards/SocialCard";
import SustantabilityCard from "./cards/SustantabilityCard"
import InternationalCard from "./cards/InternationalCard";
import NewsCard from "./cards/NewsCard"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ResourcesVariables, { ResourcesVariablesType } from "../../game/resourcesVariables";
import DistributedVariables, { DistributedVariablesType } from "../../game/distributedVariables"
import OrientationVariables, { OrientationVariablesType } from "../../game/orientationVariables";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const data = jsonData;
const initialData = jsonInitialData;

const SimulationDashboard: React.FC = () => {
    const orientationRef = React.useRef<{ getData: () => OrientationVariablesType, setData: (data: OrientationVariablesType) => void }>(null);
    const distributedRef = React.useRef<{ getData: () => DistributedVariablesType, getAvailable: () => number, setData: (data: DistributedVariablesType) => VideoDecoderInit }>(null);
    const resourcesRef = React.useRef<{ getData: () => ResourcesVariablesType, setAllRand: () => void, getPIB: () => number }>(null);
    const [available, setPercentageAvailable] = useState(100);

    useEffect(() => {
        if (orientationRef.current != null) {
            orientationRef.current.setData(
                initialData.orientation
            )
        }
        if (distributedRef.current != null) {
            distributedRef.current.setData(initialData.economicDistribution)
        }
    }, [])

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
            <NewsCard events={data[0].past_events} />
            <div className="text-xl mt-4">
                Summary
            </div>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
                <div className="col-span-6">
                    <EconomyCard data={[data[0].economic_variables]} />
                </div >
                <div className="col-span-4">
                    <SustantabilityCard data={[data[0].sustainability_variables]} />
                </div>
                <div className="col-span-5">
                    <SocialCard data={[data[0].social_variables]} />
                </div>
                <div className="col-span-5">
                    <ProdConsuCard data={[data[0].production_consumption_variables]} />
                </div >
                <div className="col-span-10">
                </div>
            </div>
            <InternationalCard data={[data[0].international_variables]} />

            <Accordion className="w-full">
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                    <h2 className="text-2xl">Orientacion del estado</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <OrientationVariables ref={orientationRef} />
                </AccordionDetails>
            </Accordion>
            <div className="hidden">
                <ResourcesVariables disref={distributedRef} ref={resourcesRef} />
            </div>

            <Accordion className="w-full">
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}
                >
                    <div className="flex flex-row w-full justify-between items-center">
                        <h2 className="text-2xl">Distribucion del estado</h2>
                        <label>available: {available.toFixed(2)}</label>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <DistributedVariables percentageAvailable={available} setAvailable={setPercentageAvailable} resRef={resourcesRef} ref={distributedRef} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SimulationDashboard;
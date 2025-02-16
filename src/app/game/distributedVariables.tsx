import React, { useState, useEffect } from "react";
import SliderPercentual from "../ui/components/sliderPercentual";
import { valueLabelFormat } from '../ui/components/sliderNumeric';
import { ResourcesVariablesType } from "./resourcesVariables";

export type DistributedVariablesType = {
    education: number,
    health: number,
    security: number,
    publicSpending: number,
    innovation: number,
    welfare: number,
    preservation: number,
};

const DistributedVariables = React.forwardRef(({ percentageAvailable, setAvailable, resRef }: {
    percentageAvailable: number,
    setAvailable: (val: number) => void;
    resRef: React.RefObject<{ getData: () => ResourcesVariablesType, setAllRand: () => void, getPIB: () => number } | null>;
}, ref) => {
    const [education, setEducation] = useState(0);
    const [health, setHealth] = useState(0);
    const [security, setSecurity] = useState(0);
    const [publicSpending, setPublicSpending] = useState(0);
    const [innovation, setInnovation] = useState(0);
    const [welfare, setWelfare] = useState(0);
    const [preservation, setPreservation] = useState(0);

    useEffect(() => {
        const total = education + health + security + publicSpending + innovation + welfare + preservation;
        setAvailable(100 - total);
    }, [education, health, security, publicSpending, innovation, welfare, preservation, setAvailable]);

    React.useImperativeHandle(ref, () => ({
        getData: () => (
            {
                education,
                health,
                security,
                publicSpending,
                innovation,
                welfare,
                preservation,
            }
        )
    }));

    function getValueFromPercentage(percentage: number) {
        return percentage * (resRef.current?.getPIB() || 0) / 100
    }


    return (
        <div className="flex flex-col space-y-4">
            <SliderPercentual val={education} setVal={setEducation} valName="Inversión en Educación"
                subtitle={valueLabelFormat(getValueFromPercentage(education))} available={percentageAvailable} />
            <SliderPercentual val={health} setVal={setHealth} valName="Inversión en Salud"
                subtitle={valueLabelFormat(getValueFromPercentage(health))} available={percentageAvailable} />
            <SliderPercentual val={security} setVal={setSecurity} valName="Inversión en Seguridad"
                subtitle={valueLabelFormat(getValueFromPercentage(security))} available={percentageAvailable} />
            <SliderPercentual val={publicSpending} setVal={setPublicSpending} valName="Inversión en Infraestructura"
                subtitle={valueLabelFormat(getValueFromPercentage(publicSpending))} available={percentageAvailable} />
            <SliderPercentual val={innovation} setVal={setInnovation} valName="Inversión en Innovación"
                subtitle={valueLabelFormat(getValueFromPercentage(innovation))} available={percentageAvailable} />
            <SliderPercentual val={welfare} setVal={setWelfare} valName="Inversión en Bienestar"
                subtitle={valueLabelFormat(getValueFromPercentage(welfare))} available={percentageAvailable} />
            <SliderPercentual val={preservation} setVal={setPreservation} valName="Inversión en Preservación"
                subtitle={valueLabelFormat(getValueFromPercentage(preservation))} available={percentageAvailable} />
        </div>
    );
});

DistributedVariables.displayName = "DistributedVariables";

export default DistributedVariables;
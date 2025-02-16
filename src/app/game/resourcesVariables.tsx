import React, { useState } from 'react';
import SliderNumeric, { valueLabelFormat } from '../ui/components/sliderNumeric';
import { sufToNum } from '../utils/utils';
import { DistributedVariablesType } from './distributedVariables';

export type ResourcesVariablesType = {
    PIB: number,
    population: number,
    gasReserves: number,
    oilReserves: number,
    mineralReserves: number,
    cultivableLand: number,
    forest: number,
    water: number,
    biodiversity: number
};

const ResourcesVariables = React.forwardRef((
    { disref }: {
        disref: React.RefObject<{ getData: () => DistributedVariablesType, getAvailable: () => number } | null>
    },
    ref) => {
    const minPop = 100000
    const minPIB = sufToNum("100M")
    const maxPIB = sufToNum("50T")// 50000000000000
    const [PIB, setPIB] = useState(minPIB);
    const PibRerf = React.useRef<{ setRandom: () => void }>(null);
    const [population, setPopulation] = useState(minPop);
    const popRef = React.useRef<{ setRandom: () => void }>(null);
    const [gasReserves, setGasReserves] = useState(0);
    const gasResRref = React.useRef<{ setRandom: () => void }>(null);
    const [oilReserves, setOilReserves] = useState(0);
    const oilResRef = React.useRef<{ setRandom: () => void }>(null);
    const [mineralReserves, setMineralReserves] = useState(0);
    const minResRef = React.useRef<{ setRandom: () => void }>(null);
    const [cultivableLand, setCultivableLand] = useState(0);
    const cultLandRef = React.useRef<{ setRandom: () => void }>(null);
    const [forest, setForest] = useState(0);
    const forestRef = React.useRef<{ setRandom: () => void }>(null);
    const [water, setWater] = useState(0);
    const waterRef = React.useRef<{ setRandom: () => void }>(null);
    const [biodiversity, setBiodiversity] = useState(0);
    const bioRef = React.useRef<{ setRandom: () => void }>(null);

    React.useImperativeHandle(ref, () => ({
        getData: () => (
            {
                PIB,
                population,
                gasReserves,
                oilReserves,
                mineralReserves,
                cultivableLand,
                forest,
                water,
                biodiversity
            }
        ),
        setAllRand: () => {
            setAllRand()
        },
        getPIB: () => PIB,
    }));

    const setAllRand = () => {
        PibRerf.current?.setRandom()
        popRef.current?.setRandom()
        gasResRref.current?.setRandom()
        oilResRef.current?.setRandom()
        minResRef.current?.setRandom()
        cultLandRef.current?.setRandom()
        forestRef.current?.setRandom()
        waterRef.current?.setRandom()
        bioRef.current?.setRandom()
    }

    function getPibPerCapita() {
        return (PIB || 0) / population;
    }

    return (
        <div className="flex flex-col space-y-4">
            <SliderNumeric val={PIB} setVal={setPIB} valName="PIB" min={minPIB} max={maxPIB} ref={PibRerf} />
            <SliderNumeric
                val={population}
                setVal={setPopulation}
                valName="Población"
                subtitle={valueLabelFormat(getPibPerCapita(), '$/P')}
                unit='P' min={minPop} max={sufToNum("1MM")} ref={popRef} />
            <SliderNumeric val={gasReserves} setVal={setGasReserves} valName="Reservas de gas" unit='m³' min={sufToNum("0.1B", "esp")} max={sufToNum("50B", "esp")} ref={gasResRref} />
            <SliderNumeric val={oilReserves} setVal={setOilReserves} valName="Reservas de petróleo" unit='bbl' min={sufToNum("0.1MM")} max={sufToNum("300MM")} ref={oilResRef} />
            <SliderNumeric val={mineralReserves} setVal={setMineralReserves} valName="Reservas minerales" unit='kg' min={sufToNum("0.1M")} max={sufToNum("1000M")} ref={minResRef} />
            <SliderNumeric val={cultivableLand} setVal={setCultivableLand} valName="Tierra cultivable" unit='ha' min={sufToNum("1k")} max={sufToNum("200M")} ref={cultLandRef} />
            <SliderNumeric val={forest} setVal={setForest} valName="Bosque" unit='ha' ref={forestRef} min={sufToNum("1k")} max={sufToNum("800M")} />
            <SliderNumeric val={water} setVal={setWater} valName="Agua" unit='m³/cap' min={sufToNum("500")} max={sufToNum("100K")} ref={waterRef} />
            <SliderNumeric val={biodiversity} setVal={setBiodiversity} valName="Biodiversidad" unit='sp' min={sufToNum("100")} max={sufToNum("100k")} ref={bioRef} />
        </div>
    );
});

ResourcesVariables.displayName = "OtherVariables";

export default ResourcesVariables;
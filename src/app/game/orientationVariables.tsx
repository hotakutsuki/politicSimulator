import React, { useState } from 'react';
import SliderOposite from '../ui/components/sliderOposite';

export type OrientationVariablesType = {
    protectionism: number,
    freeMarket: number,
    openBorders: number,
    closeBorders: number,
    stateException: number,
    ruleLaw: number,
    conservatism: number,
    progressivism: number,
    secularState: number,
    religiousInfluence: number,
    socialJustice: number,
    individualMerit: number,
    laborRights: number,
    workFlexibility: number,
    redistributionOfWealth: number,
    privateProperty: number,
    centralization: number,
    decentralization: number,
    tradition: number,
    innovation: number,
};

const OrientationVariables = React.forwardRef((props, ref) => {
    const [market, setMercado] = useState(50);
    const [border, setFronteras] = useState(50);
    const [state, setEstado] = useState(50);
    const [conservatism, setConservadurismo] = useState(50);
    const [secular, setELaico] = useState(50);
    const [socJus, setJusticiaSocial] = useState(50);
    const [labRights, setDerechosLaborales] = useState(50);
    const [redistribution, setRedistribucion] = useState(50);
    const [centralization, setCentralizacion] = useState(50);
    const [tradition, setTradicion] = useState(50);

    React.useImperativeHandle(ref, () => ({
        setData: (data: OrientationVariablesType) => {
            setMercado(data.freeMarket)
            setFronteras(data.closeBorders)
            setEstado(data.ruleLaw)
            setConservadurismo(data.progressivism)
            setELaico(data.secularState)
            setJusticiaSocial(data.socialJustice)
            setDerechosLaborales(data.laborRights)
            setRedistribucion(data.redistributionOfWealth)
            setCentralizacion(data.centralization)
            setTradicion(data.tradition)
        },
        getData: () => ({
            protectionism: market,
            freeMarket: 100 - market,
            openBorders: border,
            closeBorders: 100 - border,
            stateException: state,
            ruleLaw: 100 - state,
            conservatism: conservatism,
            progressivism: 100 - conservatism,
            secularState: secular,
            religiousInfluence: 100 - secular,
            socialJustice: socJus,
            individualMerit: 100 - socJus,
            laborRights: labRights,
            workFlexibility: 100 - labRights,
            redistributionOfWealth: redistribution,
            privateProperty: 100 - redistribution,
            centralization: centralization,
            decentralization: 100 - centralization,
            tradition: tradition,
            innovation: 100 - tradition,
        }),
    }));

    return (
        <div className="flex flex-col items-center">
            <SliderOposite
                val={market} setVal={setMercado}
                valName="Proteccionismo"
                opName="Mercado Libre" />
            <SliderOposite
                val={border} setVal={setFronteras}
                valName="Fronteras Abiertas"
                opName="Fronteras Cerradas" />
            <SliderOposite
                val={state} setVal={setEstado}
                valName="Estado de Excepción"
                opName="Estado de Derecho" />
            <SliderOposite
                val={conservatism} setVal={setConservadurismo}
                valName="Conservadurismo"
                opName="Progresismo" />
            <SliderOposite
                val={secular} setVal={setELaico}
                valName="Estado Laico"
                opName="Influencia Religiosa" />
            <SliderOposite
                val={socJus} setVal={setJusticiaSocial}
                valName="Justicia Social"
                opName="Mérito Individual" />
            <SliderOposite
                val={labRights} setVal={setDerechosLaborales}
                valName="Derechos Laborales"
                opName="Flexibilidad Laboral" />
            <SliderOposite
                val={redistribution} setVal={setRedistribucion}
                valName="Redistribución de la Riqueza"
                opName="Propiedad Privada" />
            <SliderOposite
                val={centralization} setVal={setCentralizacion}
                valName="Centralización"
                opName="Descentralización" />
            <SliderOposite
                val={tradition} setVal={setTradicion}
                valName="Tradición"
                opName="Innovación" />
        </div>
    );
});

OrientationVariables.displayName = 'OrientationVariables';

export default OrientationVariables;
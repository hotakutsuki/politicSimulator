"use client"

import React, { useState } from "react";
import Logo from "../ui/components/logo";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import OrientationVariables, { OrientationVariablesType } from "./orientationVariables";
import ResourcesVariables, { ResourcesVariablesType } from "./resourcesVariables";
import DistributedVariables, { DistributedVariablesType } from "./distributedVariables";
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CasinoIcon from '@mui/icons-material/Casino';

const ConfiguracionPantalla: React.FC = () => {
  const orientationRef = React.useRef<{ getData: () => OrientationVariablesType }>(null);
  const resourcesRef = React.useRef<{ getData: () => ResourcesVariablesType, setAllRand: () => void, getPIB: () => number }>(null);
  const distributedRef = React.useRef<{ getData: () => DistributedVariablesType, getAvailable: () => number }>(null);
  const [available, setPercentageAvailable] = useState(100);

  async function sendPromptToChatGPT() {
    const response = await fetch("/api/GPT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: "Genera un informe económico para un país ficticio.",
        filename: "simulation_result.json",
      }),
    });
    console.log('4', response)

    const data = await response.json();
    console.log("Archivo guardado:", data);
  }

  const handleStartGame = async () => {
    const inicialData = {
      orientation: orientationRef.current?.getData(),
      resources: resourcesRef.current?.getData(),
      distribution: distributedRef.current?.getData(),
    };

    await sendPromptToChatGPT()
    // const prompt = "Genera un informe sobre el estado económico de una nación ficticia.";
    // const result = await fetchAndSaveChatGPTResponse(prompt, "simulation_result.json");
    // console.log("Resultado guardado:", result);

  };

  return (
    <div className="flex flex-col items-center p-10 space-y-6">
      <h1 className="text-3xl font-bold">Configuración de tu Nación</h1>
      <Logo className="size-20" />
      <Accordion className="w-full">
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <h2 className="text-2xl">Orientacion del estado</h2>
        </AccordionSummary>
        <AccordionDetails>
          <OrientationVariables ref={orientationRef} />
        </AccordionDetails>
      </Accordion>

      <Accordion className="w-full">
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <div className="flex flex-row w-full justify-between items-center">
            <h2 className="text-2xl">Recursos</h2>
            <Button variant='text' onClick={e => {
              e.stopPropagation(); //skip close accordion
              resourcesRef.current?.setAllRand();
            }}><CasinoIcon color="action" /></Button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ResourcesVariables disref={distributedRef} ref={resourcesRef} />
        </AccordionDetails>
      </Accordion>

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

      {/* Botón de inicio */}
      <button
        onClick={handleStartGame}
        className="mt-6 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition"
      >
        Empezar mi nueva nación
      </button>
    </div >
  );
};

export default ConfiguracionPantalla;

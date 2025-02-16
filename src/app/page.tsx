"use client"

import React from "react";
import Logo from "./ui/components/logo";
import Button from "@mui/material/Button";

const ConfiguracionPantalla: React.FC = () => {

  const handleStartGame = () => {
    window.location.href = "/game";
  };

  return (
    <div className="flex flex-col items-center">
      <Logo />
      <Button
        variant="contained"
        color="primary"
        onClick={handleStartGame}
      >
        Iniciar Juego
      </Button  >
    </div>
  );
};

export default ConfiguracionPantalla;

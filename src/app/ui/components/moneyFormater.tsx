import React from 'react';

interface MoneyFormatterProps {
    amount: number; // El número que se formateará como dinero
    currency?: string; // Símbolo de moneda (opcional, por defecto es "$")
    decimalPlaces?: number; // Número de decimales (opcional, por defecto es 2)
    className?: string; // Clase CSS para personalizar estilos (opcional)
}

const MoneyFormatter: React.FC<MoneyFormatterProps> = ({
    amount,
    currency = '$',
    decimalPlaces = 2,
    className = '', // Clase por defecto vacía
}) => {
    // Formatea el número como dinero
    const formattedAmount = amount.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    });

    return (
        <span className={className}>
            {currency}
            {formattedAmount}
        </span>
    );
};

export default MoneyFormatter;
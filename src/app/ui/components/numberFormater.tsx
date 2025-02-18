import React from 'react';

interface NumberFormatterProps {
    value: number; // El número que se formateará
    decimalPlaces?: number; // Número de decimales (opcional, por defecto es 2)
    thousandSeparator?: string; // Separador de miles (opcional, por defecto es ",")
    decimalSeparator?: string; // Separador de decimales (opcional, por defecto es ".")
    className?: string; // Clase CSS para personalizar estilos (opcional)
}

const NumberFormatter: React.FC<NumberFormatterProps> = ({
    value,
    decimalPlaces = 2,
    thousandSeparator = ',',
    decimalSeparator = '.',
    className = '',
}) => {
    // Función para formatear el número
    const formatNumber = (num: number): string => {
        // Divide el número en parte entera y decimal
        const [integerPart, decimalPart = ''] = num.toFixed(decimalPlaces).split('.');

        // Formatea la parte entera con separadores de miles
        const formattedInteger = integerPart.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            thousandSeparator
        );

        // Combina la parte entera y decimal
        return decimalPlaces > 0
            ? `${formattedInteger}${decimalSeparator}${decimalPart}`
            : formattedInteger;
    };

    return <span className={className}>{formatNumber(value)}</span>;
};

export default NumberFormatter;
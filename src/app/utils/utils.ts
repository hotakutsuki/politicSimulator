export function sufToNum(valor: string, idioma: 'esp' | 'eng' = 'eng'): number | null {
    valor = valor.trim().toUpperCase();

    // Extraer el sufijo (últimos caracteres no numéricos)
    const sufijo = valor.match(/[^0-9.,]+$/)?.pop() || '';

    // Extraer la parte numérica
    const parteNumerica = valor.replace(/[^0-9.,]/g, '');

    // Si no hay parte numérica, devolver null
    if (!parteNumerica) {
        return null;
    }

    // Convertir comas a puntos para manejar decimales
    const numero = parseFloat(parteNumerica.replace(',', '.'));

    // Si no es un número válido, devolver null
    if (isNaN(numero)) {
        return null;
    }

    // Factor de multiplicación basado en el sufijo y el idioma
    let factor = 1;
    switch (sufijo) {
        case 'K':
            factor = 1e3; // Mil
            break;
        case 'M':
            factor = 1e6; // Millón
            break;
        case 'MM':
            factor = 1e9; // Miles de millones (español)
            break;
        case 'B':
            factor = idioma === 'esp' ? 1e12 : 1e9; // Billón (español) o Billion (inglés)
            break;
        case 'T':
            factor = idioma === 'esp' ? 1e18 : 1e12; // Trillón (español) o Trillion (inglés)
            break;
        default:
            factor = 1; // Sin sufijo
            break;
    }

    return numero * factor;
}

export function numToSuf(numero: number, idioma: 'esp' | 'eng' = 'eng'): string {
    const sufijos = {
        eng: ['', 'K', 'M', 'B', 'T'], // Inglés: K (mil), M (millón), B (billion), T (trillion)
        esp: ['', 'K', 'M', 'MM', 'B', 'T'], // Español: K (mil), M (millón), MM (miles de millones), B (billón), T (trillón)
    };
    const sufijosIdioma = sufijos[idioma];

    if (numero === 0) {
        return '0';
    }

    // Determinar el índice del sufijo basado en la magnitud del número
    let indiceSufijo = 0;
    let valorAbsoluto = Math.abs(numero);

    while (valorAbsoluto >= 1000 && indiceSufijo < sufijosIdioma.length - 1) {
        valorAbsoluto /= 1000;
        indiceSufijo++;
    }

    // Redondear a 2 decimales para evitar números largos
    const valorRedondeado = Math.round(valorAbsoluto * 100) / 100;

    // Añadir el sufijo correspondiente
    return `${valorRedondeado}${sufijosIdioma[indiceSufijo]}`;
}
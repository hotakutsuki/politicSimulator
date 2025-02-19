import React from 'react';

interface PartialEmojiProps {
  emoji: string; // El emoji que se mostrará
  times: number; // Número de veces que se mostrará el emoji (puede ser decimal)
  fontSize?: string | number; // Tamaño de fuente (opcional, por defecto es "1em")
  className?: string; // Clase CSS para personalizar estilos (opcional)
}

const PartialEmoji: React.FC<PartialEmojiProps> = ({
  emoji,
  times,
  fontSize = '1em', // Tamaño de fuente por defecto
  className = '',
}) => {
  // Separa la parte entera y la parte decimal
  const integerPart = Math.floor(times);
  const decimalPart = times - integerPart;

  return (
    <span
      className={className}
      style={{ fontSize }} // Aplicar el tamaño de fuente
    >
      {/* Emojis completos */}
      {Array(integerPart)
        .fill(emoji)
        .map((e, index) => (
          <span key={index}>{e}</span>
        ))}

      {/* Emoji parcial */}
      {decimalPart > 0 && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            width: '1em',
            height: '1em',
            overflow: 'hidden',
          }}
        >
          {/* Emoji completo (oculto parcialmente) */}
          <span
            style={{
              // position: 'absolute',
              clipPath: `inset(0 ${100 - decimalPart * 100}% 0 0)`,
            }}
          >
            {emoji}
          </span>

          {/* Emoji vacío (fondo) */}
          {/* <span style={{ opacity: 0.3 }}>{emoji}</span> */}
        </span>
      )}
    </span>
  );
};

export default PartialEmoji;
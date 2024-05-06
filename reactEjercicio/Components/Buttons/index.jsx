import React from 'react';

const ButtonComponents = ({ tipo, onClick }) => {
  const buttonStyles = {
    MAYOR: { backgroundColor: 'green'},
    MENOR: { backgroundColor: 'red' },
    IGUAL: { backgroundColor: 'yellow' },
  };

  return (
    <button style={buttonStyles[tipo]} onClick={onClick}>
      {tipo}
    </button>
  );
};

export default ButtonComponents;
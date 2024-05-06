import React, { useState } from 'react';
import ButtonComponents from '../Buttons/index';

const LogicAnswer = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(getRandomIntInclusive(min, max));

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = (operation) => {
    switch (operation) {
      case 'MAYOR':
        setMin(count + 1);
        setCount(getRandomIntInclusive(count + 1, max));
        break;
      case 'MENOR':
        setMax(count - 1);
        setCount(getRandomIntInclusive(min  , count - 1));
        break;
      case 'IGUAL':
        alert("Ganaste brodelll");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p>{count}</p>
      <div>
        <ButtonComponents tipo="MAYOR" onClick={() => handleClick('MAYOR')} />
        <ButtonComponents tipo="MENOR" onClick={() => handleClick('MENOR')} />
        <ButtonComponents tipo="IGUAL" onClick={() => handleClick('IGUAL')} />
      </div>
    </div>
  );
};

export default LogicAnswer;
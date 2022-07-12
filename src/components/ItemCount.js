import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert('No hay suficiente stock!');
    }
  };

  const descrementar = () => {
    setCount((valAnt) => (valAnt > 0 ? count - 1 : count));
  };

  return (
    <div>
      <h3>{count}</h3>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={descrementar}
      >
        {' '}
        -{' '}
      </button>
      <button type="button" className="btn btn-secondary" onClick={incrementar}>
        {' '}
        +{' '}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          onAdd(count);
        }}
      >
        {' '}
        Agregar al carrito{' '}
      </button>
    </div>
  );
};

export default ItemCount;

// create component stepper.tsx


import React, { useState } from 'react';

interface StepperProps {
  initialCount?: number;
}

const Stepper: React.FC<StepperProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button data-cy="decrement" onClick={decrement}>-</button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={increment}>+</button>
    </div>
  );
};

export default Stepper;
import React, { useState } from "react";

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(props.initialValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

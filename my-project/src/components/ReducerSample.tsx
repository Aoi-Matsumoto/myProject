import { useReducer } from "react";
type Action = "Decrement" | "Increment" | "Double" | "Reset";

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case "Increment":
      return currentCount + 1;
    case "Decrement":
      return currentCount - 1;
    case "Double":
      return currentCount * 2;
    case "Reset":
      return 0;
    default:
      return currentCount;
  }
};

type CounterProps = {
  initialValue: number;
};

const Counter2 = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => dispatch("Decrement")}>-</button>
      <button onClick={() => dispatch("Increment")}>+</button>
      <button onClick={() => dispatch("Double")}>×2</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};

export default Counter2;

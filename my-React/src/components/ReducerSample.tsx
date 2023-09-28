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
    <div
      style={{
        border: "5px solid honeydew",
        margin: "5px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex", // 子要素を水平に配置するためにFlexコンテナを使用
        flexDirection: "column",
      }}
    >
      <p>ReducerSample</p>
      <p>Count:{count}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => dispatch("Decrement")}>-</button>
        <button onClick={() => dispatch("Increment")}>+</button>
        <button onClick={() => dispatch("Double")}>×2</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>
    </div>
  );
};

export default Counter2;

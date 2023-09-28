import React, { useState, useMemo } from "react";

export const UsemomoSample = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  };

  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0);
  }, [items]);

  return (
    <div
      style={{ backgroundColor: "skyblue", color: "white", padding: "10px" }}
    >
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters1: {numberOfCharacters1}</p>
        <p>Total Number of Characters2: {numberOfCharacters2}</p>
      </div>
    </div>
  );
};

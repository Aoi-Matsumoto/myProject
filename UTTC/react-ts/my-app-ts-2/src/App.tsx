import "./App.css";
import { useState } from "react";

type Person = {
  name: string;
  age: number;
};

function App() {
  const [age, setAge] = useState(0);
  const [inputName, setInputName] = useState("inada");

  const handleSubmit = async () => {
    const response = await fetch(
      "https://react-example-e186a-default-rtdb.firebaseio.com/tweets.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: { [key: string]: Person } = await response.json();
    const obj = Object.values(data).filter((v) => v.name === inputName)[0];
    const ageNumber =
      typeof obj.age === "string" ? parseInt(obj.age, 10) : obj.age;
    setAge(ageNumber + 10);
  };

  return (
    <div className="App">
      <input
        type="text"
        id="nameInput"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <p>さんの年齢を+10した値は{age}です</p>
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}

export default App;

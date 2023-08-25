import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const submit = (event) => {
    event.preventDefault();
    props.onSubmit(name, email, age);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={submit}
    >
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default Form;

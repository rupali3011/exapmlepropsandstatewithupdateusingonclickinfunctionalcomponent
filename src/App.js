import { useState } from "react";
import "./styles.css";
function Print(props) {
  return (
    <h3>
      hello {props.name} {props.deg}
    </h3>
  );
}
function Name(props) {
  return (
    <div>
      <h1>hi name is {props.name}</h1>
      <h3>age is {props.age}</h3>
      <Print name="patil" deg={"eln"} />
    </div>
  );
}
export default function App() {
  const [name, setname] = useState("rupali");
  const [age, setage] = useState(19);
  return (
    <div className="App">
      <Name name={name} age={age} />
      <button
        onClick={() => {
          setname("pawar");
          setage(30);
        }}
      >
        change
      </button>
      <Name name="ruturaj" age={29} />
    </div>
  );
}

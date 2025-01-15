import { useState } from "react";
import "./App.css";
import Button from "./Button";

const App = () => {
  const [display, setDisplay] = useState([]);
  const operators = ["%", "-", "+", "/", "*"];

  const handleOnClick = (e) => {
    const { innerText } = e.target;
    setDisplay([...display, innerText]);

    // make the ac button work
    if (innerText === "AC") {
      setDisplay([]);
    }

    // make c button work
    if (innerText === "C") {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
    }

    if (innerText === "=") {
      const total = eval(...display.join(""));
      setDisplay([total]);
    }

    if (operators.includes(innerText)) {
      const lastChar = display[display.length - 1];

      if (operators.includes(lastChar)) {
        const newDis = [display.slice(0, -1), innerText];
        setDisplay(newDis);
      }
    }

    // allow only one dot for the programme

    // Allow only one dot per number
  };

  const btns = [
    {
      cls: "btn-ac",
      label: "AC",
    },
    {
      cls: "btn-c",
      label: "C",
    },
    {
      cls: "btn-per",
      label: "%",
    },
    {
      cls: "btn-divide",
      label: "/",
    },

    {
      cls: "btn-seven",
      label: "7",
    },
    {
      cls: "btn-eight",
      label: "8",
    },

    {
      cls: "btn-nine",
      label: "9",
    },

    {
      cls: "btn-star",
      label: "*",
    },

    {
      cls: "btn-four",
      label: "4",
    },
    {
      cls: "btn-five",
      label: "5",
    },
    {
      cls: "btn-six",
      label: "6",
    },
    {
      cls: "minus",
      label: "-",
    },

    {
      cls: "btn-one",
      label: "1",
    },
    {
      cls: "btn-two",
      label: "2",
    },
    {
      cls: "btn-three",
      label: "3",
    },

    {
      cls: "btn-plus",
      label: "+",
    },
    {
      cls: "btn-zero",
      label: "0",
    },
    {
      cls: "btn-dot",
      label: ".",
    },
    {
      cls: "btn-equal",
      label: "=",
    },
  ];
  return (
    <div className="wrapper flex-center">
      <div className="calculator">
        <div className="display">{display}</div>

        {btns.map((btn, i) => (
          // <Button key={i} cls={btn.cls} label={btn.label} />
          <Button handleOnClick={handleOnClick} key={i} {...btn} />
        ))}
      </div>
    </div>
  );
};

export default App;

import "./styles.css";
import React, { useState } from "react";
import Operators from "./components/Operators";
import NumberButtons from "./components/NumberButtons";
import BottomPad from "./components/BottomPad";
import Display from "./components/services/Display";
export default function App() {
  const [expression, setExpression] = useState("");
  const numpadHandler = (buttonValue) => {
    setExpression(expression.concat(buttonValue));
  };
  console.log(expression);
  return (
    <div className="App">
      <Display char={expression} />
      <Operators />
      <NumberButtons numpadHandler={numpadHandler} />
      <BottomPad />
    </div>
  );
}

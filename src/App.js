import "./styles.css";
import React, { useState } from "react";
import Operators from "./components/Operators";
import NumberButtons from "./components/NumberButtons";
import BottomPad from "./components/BottomPad";
import Display from "./components/services/Display";
export default function App() {
  const [expression, setExpression] = useState("");
  const [displayRes, setDisplayRes] = useState(false);
  const numpadHandler = (buttonValue) => {
    setExpression(expression.concat(buttonValue));
  };

  return (
    <div className="App">
      <Display char={expression} displayRes={displayRes} />
      <Operators numpadHandler={numpadHandler} />
      <NumberButtons numpadHandler={numpadHandler} />
      <BottomPad numpadHandler={numpadHandler} setDisplayRes={setDisplayRes} />
    </div>
  );
}

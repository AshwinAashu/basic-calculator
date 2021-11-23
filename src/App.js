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

  const resHandler = (resValue) => {
    if (displayRes) {
      setDisplayRes(false);
    }
    setExpression(resValue.toString());
  };
  return (
    <div className="App">
      <Display
        char={expression}
        resHandler={resHandler}
        displayRes={displayRes}
      />
      <Operators numpadHandler={numpadHandler} />
      <NumberButtons numpadHandler={numpadHandler} />
      <BottomPad numpadHandler={numpadHandler} setDisplayRes={setDisplayRes} />
    </div>
  );
}

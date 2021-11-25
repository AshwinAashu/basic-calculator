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
    const ops = ["*", "/", "+", "-"];
    //when a key is pressed after '=' and it is not operator
    if (displayRes && !ops.includes(buttonValue)) {
      setDisplayRes(false);
      setExpression(buttonValue.toString());
    }
    //when a key is pressed after = and it is a operator
    else if (displayRes && ops.includes(buttonValue)) {
      setDisplayRes(false);
      setExpression(expression.concat(buttonValue));
    }
    //when any other key is pressed
    else {
      setExpression(expression.concat(buttonValue));
    }
  };

  //delete a digit
  const delHandler = () => {
    const newDigit = expression.slice(0, -1);
    setExpression(newDigit);
  };

  //set the result as the new expression
  const resHandler = () => {
    setDisplayRes(true);
    const ansv = eval(expression);
    setExpression(ansv.toString());
  };
  return (
    <div className="App">
      <Display
        char={expression}
        resHandler={resHandler}
        displayRes={displayRes}
      />
      <Operators numpadHandler={numpadHandler} delHandler={delHandler} />
      <NumberButtons numpadHandler={numpadHandler} />
      <BottomPad numpadHandler={numpadHandler} resHandler={resHandler} />
    </div>
  );
}

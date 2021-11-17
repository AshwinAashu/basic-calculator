import "./styles.css";
import React, { useState } from "react";
import Operators from "./components/Operators";
import NumberButtons from "./components/NumberButtons";
import BottomPad from "./components/BottomPad";
import Display from "./components/services/Display";
export default function App() {
  const [buttonVal, setButtonVal] = useState("");

  const numpadHandler = (buttonValue) => {
    setButtonVal(buttonValue);
  };

  return (
    <div className="App">
      <Display char={buttonVal} />
      <Operators />
      <NumberButtons numpadHandler={numpadHandler} />
      <BottomPad />
    </div>
  );
}

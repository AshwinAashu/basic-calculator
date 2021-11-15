import { useState, useEffect } from "react";
const NumberList = () => {
  const [numPad, setNumPad] = useState([""]);
  useEffect(() => {
    let number = [];
    for (let i = 1; i < 10; i++) {
      number.push(i);
      setNumPad(number);
    }
  }, []);
  return (
    <div className="numpad">
      {numPad.map((item) => {
        return (
          <button className="button-pad" key={item} onChange>
            {item.toString()}
          </button>
        );
      })}
    </div>
  );
};
export default NumberList;

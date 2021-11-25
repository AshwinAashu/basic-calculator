const Display = ({ char, resHandler, displayRes }) => {


  return (
    <div className="calculator-display">
      <div className="calculator-display-char">
        {/* {displayRes ? evalChar() : char} */}
        {char}
      </div>
    </div>
  );
};
export default Display;

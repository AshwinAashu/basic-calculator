const Display = ({ char, resHandler, displayRes }) => {
  const evalChar = () => {
    let ans = eval(char);
    resHandler(ans);
    return ans;
  };

  return (
    <div className="calculator-display">
      <div className="calculator-display-char">
        {displayRes ? evalChar() : char}
      </div>
    </div>
  );
};
export default Display;

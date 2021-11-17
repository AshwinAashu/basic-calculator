const Display = ({ char, displayRes }) => {
  //needs to check if we are adding two operators
  //consequently
  const evalChar = () => {
    return eval(char);
  };
  return (
    <div className="calculator-display">{displayRes ? evalChar() : char}</div>
  );
};
export default Display;

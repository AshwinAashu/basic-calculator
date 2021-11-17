const Operators = ({ numpadHandler }) => {
  return (
    <div className="operators-tab">
      <button
        className="button-pad-operator"
        value="+"
        onClick={(e) => {
          numpadHandler(e.target.value);
        }}
      >
        +
      </button>

      <button
        className="button-pad-operator"
        value="-"
        onClick={(e) => {
          numpadHandler(e.target.value);
        }}
      >
        -
      </button>

      <button
        className="button-pad-operator"
        value="*"
        onClick={(e) => {
          numpadHandler(e.target.value);
        }}
      >
        *
      </button>

      <button
        className="button-pad-operator"
        value="/"
        onClick={(e) => {
          numpadHandler(e.target.value);
        }}
      >
        /
      </button>
      <button className="button-pad-operator">Del</button>
    </div>
  );
};
export default Operators;

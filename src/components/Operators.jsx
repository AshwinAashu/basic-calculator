const Operators = ({ numpadHandler, delHandler }) => {
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
      <button className="button-pad-operator" onClick={delHandler}>
        Del
      </button>
    </div>
  );
};
export default Operators;

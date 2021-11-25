const BottomPad = ({ numpadHandler, resHandler }) => {
  return (
    <div className="bttoom-pad">
      <button
        className="button-bottom"
        value="."
        onClick={(e) => {
          numpadHandler(e.target.value);
        }}
      >
        .
      </button>
      <button
        className="button-bottom"
        value="0"
        onClick={(e) => {
          numpadHandler(e.target.value);
        }}
      >
        0
      </button>
      <button className="button-bottom" onClick={resHandler}>
        =
      </button>
    </div>
  );
};
export default BottomPad;

import "./styles.css";
import Operators from "./components/Operators";
import NumberButtons from "./components/NumberButtons";
import BottomPad from "./components/BottomPad";
export default function App() {
  return (
    <div className="App">
      <Operators />
      <NumberButtons />
      <BottomPad />
    </div>
  );
}

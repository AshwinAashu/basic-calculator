import "./styles.css";
import Operators from "./components/Operators";
import NumberButtons from "./components/NumberButtons";
export default function App() {
  return (
    <div className="App">
      <Operators />
      <NumberButtons />
    </div>
  );
}

import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { OnOff } from "./components/onOff/OnOff";
import { Rating } from "./components/rating/Rating";

function App() {
  return (
    <div className="App">
      <Accordion titleValue="Menu" collapsed={true} />
      <Accordion titleValue="Users" collapsed={false} />

      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />

      <OnOff isActive={true} />
      <OnOff isActive={false} />
    </div>
  );
}

export default App;

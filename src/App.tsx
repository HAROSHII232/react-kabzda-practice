import { useState } from "react";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { UncontrolledAccordion } from "./components/accordion/UncontrolledAccordion";
import { Rating, RatingValueType } from "./components/rating/Rating";
import { UncontrolledRating } from "./components/rating/UncontrolledRating";
/* import { OnOff } from "./components/onOff/OnOff"; */
import { UncontrolledOnOff } from "./components/onOff/UncontrolledOnOff";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState(true);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="App">
      <UncontrolledAccordion titleValue="Menu" />
      <UncontrolledRating />
      <Accordion
        titleValue={"Menu"}
        onClick={() => setAccordionCollapsed(!accordionCollapsed)}
        accordionCollapsed={accordionCollapsed}
      />
      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)} /> */}
      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
    </div>
  );
}

export default App;

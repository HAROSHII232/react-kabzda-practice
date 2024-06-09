import { useState } from "react";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { UncontrolledAccordion } from "./components/accordion/UncontrolledAccordion";
import { Rating, RatingValueType } from "./components/rating/Rating";
import { UncontrolledRating } from "./components/rating/UncontrolledRating";
import { OnOff } from "./components/onOff/OnOff";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState(true);

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

      {/*       <OnOff isActive={true} /> */}
      <OnOff />
    </div>
  );
}

export default App;

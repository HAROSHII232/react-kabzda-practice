import { useReducer } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
  titleValue: string;
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

export const UncontrolledAccordion = ({ titleValue }: AccordionPropsType) => {
  const [state, dispatch] = useReducer(reducer, { collapsed: false });
  const toggleAccordion = () => dispatch({ type: TOGGLE_COLLAPSED });

  return (
    <div>
      <AccordionTitle title={titleValue} onClick={toggleAccordion} />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
};

const AccordionTitle = ({ title, onClick }: AccordionTitlePropsType) => {
  return <h3 onClick={onClick}>{title}</h3>;
};

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

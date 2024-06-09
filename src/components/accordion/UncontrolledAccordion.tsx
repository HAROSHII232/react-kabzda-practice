import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

export const UncontrolledAccordion = ({ titleValue }: AccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleAccordion = () => setCollapsed(!collapsed);

  return (
    <div>
      <AccordionTitle title={titleValue} onClick={toggleAccordion} />
      {collapsed && <AccordionBody />}
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

import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

type AccordionTitlePropsType = {
  title: string;
  toggleAccordion: () => void;
};

export const UncontrolledAccordion = ({ titleValue }: AccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleAccordion = () => setCollapsed(!collapsed);

  return (
    <div>
      <AccordionTitle title={titleValue} toggleAccordion={toggleAccordion} />
      <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        toggle
      </button>
      {collapsed && <AccordionBody />}
    </div>
  );
};

const AccordionTitle = ({
  title,
  toggleAccordion,
}: AccordionTitlePropsType) => {
  return <h3 onClick={toggleAccordion}>{title}</h3>;
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

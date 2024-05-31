import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

type AccordionTitlePropsType = {
  title: string;
};

export const UncontrolledAccordion = ({ titleValue }: AccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <AccordionTitle title={titleValue} />
      <button
        onClick={() => {
          setCollapsed(collapsed ? false : true);
        }}
      >
        toggle
      </button>
      {!collapsed && <AccordionBody />}
    </div>
  );
};

const AccordionTitle = ({ title }: AccordionTitlePropsType) => {
  return <h3>{title}</h3>;
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

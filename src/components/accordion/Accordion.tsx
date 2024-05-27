type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

type AccordionTitlePropsType = {
  title: string;
};

export const Accordion = ({ titleValue, collapsed }: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={titleValue} />
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

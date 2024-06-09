type AccordionPropsType = {
  titleValue: string;
  accordionCollapsed: boolean;
  onClick: () => void;
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

export const Accordion = ({
  titleValue,
  onClick,
  accordionCollapsed,
}: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={titleValue} onClick={onClick} />
      {!accordionCollapsed && <AccordionBody />}
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

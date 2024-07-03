type AccordionPropsType = {
  titleValue: string;
  accordionCollapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

type ItemType = {
  title: string;
  value: any;
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

export const Accordion = ({
  titleValue,
  onChange,
  accordionCollapsed,
  items,
  onClick,
}: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={titleValue} onClick={onChange} />
      {!accordionCollapsed && <AccordionBody items={items} onClick={onClick} />}
    </div>
  );
};

const AccordionTitle = ({ title, onClick }: AccordionTitlePropsType) => {
  return <h3 onClick={(e) => onClick()}>{title}</h3>;
};

const AccordionBody = (props: AccordionBodyPropsType) => {
  return (
    <ul>
      {props.items.map((i, index) => (
        <li
          key={index}
          onClick={() => {
            props.onClick(i.value);
          }}
        >
          {i.title}
        </li>
      ))}
    </ul>
  );
};

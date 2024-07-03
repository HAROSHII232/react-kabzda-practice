import { Accordion } from "./Accordion";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  component: Accordion,
};

const onChangeCallback = action("onChange");
const onClickCallback = action("onClick");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      onChange={onChangeCallback}
      accordionCollapsed={true}
      items={[]}
      onClick={onClickCallback}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={"Opened Accordion"}
      onChange={onChangeCallback}
      accordionCollapsed={false}
      onClick={onClickCallback}
      items={[
        { title: "Jackie", value: 1 },
        { title: "Arnold", value: 2 },
        { title: "Silvest", value: 3 },
      ]}
    />
  );
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={"Accordion Demo"}
      onChange={() => setCollapsed(!collapsed)}
      onClick={(value) => {
        alert(`user with ID ${value} should be happy`);
      }}
      accordionCollapsed={collapsed}
      items={[
        { title: "Jackie", value: 1 },
        { title: "Arnold", value: 2 },
        { title: "Silvest", value: 3 },
      ]}
    />
  );
};

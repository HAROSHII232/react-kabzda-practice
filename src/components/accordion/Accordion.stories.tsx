import { Accordion } from "./Accordion";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  component: Accordion,
};

const onChangeCallback = action("onChange");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      onClick={onChangeCallback}
      accordionCollapsed={true}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={"Opened Accordion"}
      onClick={() => {}}
      accordionCollapsed={false}
    />
  );
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={"Accordion Demo"}
      onClick={() => setCollapsed(!collapsed)}
      accordionCollapsed={collapsed}
    />
  );
};

import * as React from "react";
import { boolean } from "@storybook/addon-knobs";
import Accordion from "./Accordion/index";
import AccordionList from "./index";
import { IconActivity } from "../../icons";
import ListItem from "../List/ListItem";
import IconFolder from "../../icons/Folder";
import List from "../List";
import TextLink from "../TextLink";

export default {
  title: "AccordionList",
  component: AccordionList,
};

const getCommonProps = () => {
  return {
    toggleOnExpand: boolean("Toggle on Expand", false),
  };
};

export const Playground = () => (
  <AccordionList {...getCommonProps()}>
    <Accordion header={"Accordion First"}>First child</Accordion>
    <Accordion header={"Accordion Second"}>Second child</Accordion>
  </AccordionList>
);

export const ExpandOneByOne = () => (
  <AccordionList>
    <Accordion leftContent={<IconActivity />} header={"Accordion title"}>
      Child message
    </Accordion>
    <Accordion
      leftContent={<IconActivity />}
      rightContent={<TextLink>link</TextLink>}
      header={"Accordion title"}
      subHeader={"small content"}
    >
      <List>
        <ListItem leftContent={<IconFolder />}>Text</ListItem>
        <ListItem rightContent={<IconFolder />}>Text</ListItem>
        <ListItem
          leftContent={<IconFolder />}
          rightContent={<IconFolder />}
          active
        >
          Text
        </ListItem>
      </List>
    </Accordion>
    <Accordion
      leftContent={<IconActivity />}
      header={"Expanded by default"}
      isDefaultExpanded
    >
      Expanded
    </Accordion>
  </AccordionList>
);

export const ExpandAll = () => (
  <AccordionList toggleOnExpand={false}>
    <Accordion leftContent={<IconActivity />} header={"Accordion First"}>
      First child
    </Accordion>
    <Accordion
      leftContent={<IconActivity />}
      header={"Accordion Second"}
      isDefaultExpanded
    >
      Second child
    </Accordion>
  </AccordionList>
);

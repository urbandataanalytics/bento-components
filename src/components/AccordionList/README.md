# AccordionList

To implement AccordionList component into your project you'll need to the import the AccordionList and the [Accordion](#Accordion):

```jsx
import { Accordion, AccordionList } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<AccordionList>
  <Accordion>Hello</Accordion>
</AccordionList>
```

## Props

Table below contains all types of the props available in the AccordionList component.

| Name           | Type                                                   | Default | Description                                                                |
| :------------- | :----------------------------------------------------- | :------ | :------------------------------------------------------------------------- |
| children       | `React.ChildrenArray<React.Element<typeof Accordion>>` |         | The content of the AccordionList. You can use only [Accordion](#Accordion) |
| toggleOnExpand | `boolean`                                              | true    | If `true` it will toggle others element when the section is expanded       |

### Accordion

```jsx
import { Accordion, AccordionList } from '@uda/bento-components';
```

#### Usage

```jsx
<AccordionList>
  <Accordion header="Accordion option">Hello World!</Accordion>
</AccordionList>
```

#### Props

| Name              | Type         | Default | Description                                   |
| :---------------- | :----------- | :------ | :-------------------------------------------- |
| children          | `React.Node` |         | The content of the Accordion                  |
| expanded          | `boolean`    | `false` | If set to `true` content will be be displayed |
| header            | `React.Node` |         | The header of the Accordion.                  |
| isDefaultExpanded | `boolean`    |         | Optional to set a default expanded state      |
| leftContent       | `React.Node` |         | Displayed item on the left                    |
| onClick           | `() => void` |         | Function for handling onClick event           |
| rightContent      | `React.Node` |         | Displayed item on the right                   |
| subHeader         | `React.Node` |         | Subheader of the Accordion                    |

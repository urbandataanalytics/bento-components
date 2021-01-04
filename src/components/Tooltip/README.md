# Tooltip

To implement `Tooltip` component into your project you'll need to import it as:

```jsx
import { Tooltip } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Tooltip title="Title For Tooltip" position="left">
  <Button variant="primary" size="medium">
    Tooltip Bottom
  </Button>
</Tooltip>
```

## Props

Table below contains all types of the props available in the Tooltip component.

| Name           | Type          | Default | Description                                                                          |
| :------------- | :------------ | :------ | :----------------------------------------------------------------------------------- |
| **children**   | `React.node`  |         | Elements within the tooltip. The elements that trigger the tooltip on hover.         |
| enterDelay     | `number`      | `100`   | Sets a time delay for the tooltip to open. In milisecs.                              |
| enterNextDelay | `number`      | `0`     | Sets a time delay to open another tooltip when another is already open. In milisecs. |
| leaveDelay     | `number`      | `0`     | Sets a time delay for closing the tooltip when leaving the hover. In milisecs.       |
| position       | [enum](#enum) | `top`   | Determines the position of the tooltip relative to the element that triggers it      |
| **title**      | `string`      |         | Displays a paragraph on the top as a title for the tooltip                           |
| value          | `string`      |         | Displays a paragraph below the `title` with text for the tooltip                     |

### Enum

| position |
| :------- |
| top      |
| right    |
| bottom   |
| left     |

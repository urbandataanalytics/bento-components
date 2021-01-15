# Dropdown

To implement Dropdown component into your project you'll need to import it:

```jsx
import { Dropdown } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Dropdown label={<Button>Label example</Button>}>List of Elements Here</Dropdown>
```

This component can be used with `<List>` and `<ListItem>` components.

## Props

Table below contains all types of the props available in the Dropdown component.

| Name                | Type            | Default    | Description                                                                     |
| :------------------ | :-------------- | :--------- | :------------------------------------------------------------------------------ |
| align               | [`enum`](#enum) | `'left'`   | The alignment side on which side the Dropdown children container should appear. |
| children            | `React.node`    |            | Elements to be included within the Dropdown.                                    |
| className           | `string`        |            | Specific class name to pass down to the Dropdown component.                     |
| closeOnClickInside  | `boolean`       | `false`    | Close Dropdown when an option is selected.                                      |
| closeOnClickOutside | `boolean`       | `true`     | Close Dropdown when a click outside is detected.                                |
| isOpen              | `boolean`       | `false`    | Set Dropdown open status.                                                       |
| **label**           | `React.Node`    |            | The label for the Dropdown.                                                     |
| onChange            | `event => void` |            | Function for handling onChange event.                                           |
| position            | [`enum`](#enum) | `'bottom'` | The position on which side the Dropdown children container should appear.       |

### enum

| align      | position   |
| :--------- | :--------- |
| `"left"`   | `"top"`    |
| `"center"` | `"bottom"` |
| `"right"`  |

# Checkbox

To implement Checkbox component into your project you'll need to add the import:

```jsx
import Checkbox from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Checkbox label="Checkbox" />
```

## Props

Table below contains all types of the props available in Checkbox component.

| Name         | Type                         | Default    | Description                                                            |
| :----------- | :--------------------------- | :--------- | :--------------------------------------------------------------------- |
| **checked**  | `boolean`                    | `false`    | If `true`, the Checkbox will be checked.                               |
| **disabled** | `boolean`                    | `false`    | If `true`, the Checkbox will be set up as disabled.                    |
| label        | `string | React.node`        |            | The label of the Checkbox. It can also admit nodes such as '<h3></h3>' |  |
| name         | `string`                     |            | The name for the Checkbox.                                             |
| onChange     | `event => void | React.Node` |            | Function for handling onChange event.                                  |
| size         | [`enum`](#enum)              | `"medium"` | The size of the Checkbox.                                              |
| tabIndex     | `string | number`            |            | Specifies the tab order of an element                                  |

### enum

| size       |
| :--------- |
| `"small"`  |
| `"medium"` |
|            |

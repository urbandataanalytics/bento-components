# Button

To implement Button component into your project you'll need to add the import:

```jsx
import { Button } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Button>Bento rocks!</Button>
```

## Props

Table below contains all types of the props available in Button component.

| Name        | Type            | Default     | Description                                                           |
| :---------- | :-------------- | :---------- | :-------------------------------------------------------------------- |
| block       | `boolean`       | false       | If `true`, the Button will grow up to the full width of its container |  |
| children    | `React.Node`    |             | The content of the Button                                             |
| className   | `string`        |             | Specific class name to pass down to the Button component              |
| disabled    | `boolean`       | `false`     | If `true`, the Button will be disabled.                               |
| iconLeft    | `React.Node`    |             | The displayed icon on the left.                                       |
| iconRight   | `React.Node`    |             | The displayed icon on the right.                                      |
| loading     | `boolean`       | `false`     | If `true`, a loader [icon](../Icon/README.md) will be displayed       |
| loadingText | `string`        |             | Text to display when the button has loading prop = `true`             |
| onClick     | `event => void` |             | Function for handling onClick event.                                  |
| size        | [`enum`](#enum) | `"medium"`  | The size of the Button.                                               |
| tabIndex    | `string`        |             | Specifies the tab order of an element.                                |
| variant     | [`enum`](#enum) | `"primary"` | The variant of Button.                                                |

### enum

| variant       | size       |
| :------------ | :--------- |
| `"normal"`    | `"medium"` |
| `"primary"`   | `"large"`  |
| `"secondary"` |            |

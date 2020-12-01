# ButtonLink

To implement ButtonLink component into your project you'll need to add the import:

```jsx
import { ButtonLink } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<ButtonLink>Bento rocks!</ButtonLink>
```

## Props

Table below contains all types of the props available in ButtonLink component.

| Name        | Type            | Default     | Description                                                   |
| :---------- | :-------------- | :---------- | :------------------------------------------------------------ |
| children    | `React.Node`    |             | The content of the ButtonLink.                                |
| className   | `string`        |             | Specific class name to pass down to the ButtonLink component. |
| disabled    | `boolean`       | `false`     | If `true`, the ButtonLink will be disabled.                   |
| iconLeft    | `React.Node`    |             | The displayed icon on the left.                               |
| iconRight   | `React.Node`    |             | The displayed icon on the right.                              |
| onClick     | `event => void` |             | Function for handling onClick event.                          |
| **size**    | [`enum`](#enum) | `"medium"`  | The size of the ButtonLink.                                   |
| tabIndex    | `string`        |             | Specifies the tab order of an element.                        |
| **variant** | [`enum`](#enum) | `"primary"` | The variant of ButtonLink.                                    |

### enum

| variant       | size       |
| :------------ | :--------- |
| `"normal"`    | `"medium"` |
| `"primary"`   | `"large"`  |
| `"secondary"` |            |

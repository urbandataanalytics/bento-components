# InlineInputField

To implement InlineInputField component into your project you'll need to import it as:

```jsx
import { InlineInputField } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<InlineInputField type="email" placeholder="Insert Email" />
```

## Props

Table below contains all types of the props available in the InlineInputField component.

| Name        | Type                  | Default | Description                                                                                                                                       |
| :---------- | :-------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| className   | `string`              |         | Add class to this node                                                                                                                            |
| disabled    | `boolean`             | `false` | It 'true' disables input and avoids edition                                                                                                       |
| error       | `boolean`             |         | If 'true' adds falsy style to the field                                                                                                           |
| help        | `string`              |         | Assisting text for the user                                                                                                                       |
| label       | `string | React.node` |         | Text for the field label. Also accepts nodes.                                                                                                     |
| name        | `string`              |         | Assigns 'name' attribute to the input                                                                                                             |
| onChange    | `event => void`       |         | Method to handle onChange event                                                                                                                   |
| placeholder | `string`              |         | Assigns 'placeholder' attribute to the input, displaying assisting text inside the field, and dissapears when something is written into the input |
| tabIndex    | `string`              |         | Assigns "tabIndex" attribute to the input, in order to control focus and sequential navigation                                                    |
| **type**    | `string`              | `text`  | Indicates the type of input in order to display correct validations                                                                               |
| value       | `string`              | `""`    | Sets an initial value of the input field                                                                                                          |
| textAlign   | [`enum`](#enum)       | `left`  | Sets text alignment both for the text input and the help text                                                                                     |
| labelIcon   | `React.node`          |         | Expects a node (usually icon), used to select an icon to be shown on the left side of the label                                                   |

### enum

| textAlign |
| :-------- |
| `"left"`  |
| `"right"` |

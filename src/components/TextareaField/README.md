# TextareaField

To implement TextareaField component into your project you'll need to import it as:

```jsx
import { TextareaField } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<TextareaField placeholder="Type your text..." />
```

## Props

Table below contains all types of the props available in the TextareaField component.

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
| value       | `string`              | `""`    | Sets an initial value of the input field                                                                                                          |
| counter     | `boolean`             | `true`  | Shows the count of characters left if maxlength is informed.                                                                                      |
| maxlength   | `number`              |         | Number of max characters allowed in the field                                                                                                     |

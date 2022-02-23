# SelectField

To implement SelectField component into your project you'll need to import it as:

```jsx
import { SelectField } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<SelectField onChange={() => HandleOnChange()} options={selectionOptions} value={value} />
```

## Props

Table below contains all types of the props available in the SelectField component.

| Name         | Type                  | Default | Description                                                                                     |
| :----------- | :-------------------- | :------ | :---------------------------------------------------------------------------------------------- |
| className    | `string`              |         | Adds CSS class to the element                                                                   |
| defaultLabel | `string`              |         | Sets a first option in the option list as a default value. For instance: 'Select value'         |
| disabled     | `boolean`             | `false` | Disables the field and does not allow selecting                                                 |
| help         | `string`              |         | Adds custom text next as Help Text Below the field                                              |
| label        | `string | React.node` |         | Text above the field                                                                            |
| name         | `string`              |         | Sets `name`to the input field                                                                   |
| **onChange** | `(event) => void`     |         | Handles behaviour when input content changes.                                                   |
| **options**  | `array`               |         | Expects an array of objects used to list the options, the object with props: `value`and `label` |
| tabIndex     | `string`              |         | Specifies the tab order of the element (when the 'tab' key is pressed)                          |
| **value**    | `string`              | `" "`   | Initial value set for the input field                                                           |

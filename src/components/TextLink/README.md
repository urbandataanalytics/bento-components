# TextLink

To implement `TextLink` component into your project you'll need to import it as:

```jsx
import { TextLink } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<TextLink href="http://www.google.com"> Google </TextLink>
```

## Props

Table below contains all types of the props available in the TextLink component.

| Name        | Type          | Default     | Description                                                                                                                        |
| :---------- | :------------ | :---------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| children    | `React.node`  |             | Elements within the link                                                                                                           |
| className   | `string`      |             | Adds class to the element                                                                                                          |
| disabled    | `boolean`     | `false`     | Disables the link                                                                                                                  |
| external    | `boolean`     | `false`     | If 'true' it automatically sets the options `target= "__blank"` and the attributes `noopener`and `noreferrer to the`rel` attribute |
| **href**    | `string`      | `"#"`       | The url where it must link to                                                                                                      |
| **size**    | [enum](#enum) | `"medium"`  | Sets the font size of the link                                                                                                     |
| tabIndex    | `string`      |             | Specifies the tab order of an element.                                                                                             |  |
| **variant** | [enum](#enum) | `"primary"` | Sets different styles according to the selected variant                                                                            |

### Enum

| size       | variant       |
| :--------- | :------------ |
| `"medium"` | `"primary"`   |
| `"large"`  | `"secondary"` |

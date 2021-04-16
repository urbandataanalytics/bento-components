# ToggleGroup

To implement `ToggleGroup` component into your project you'll need to import it. It is often used with other components such as `ButtonLink`:

```jsx
import { ToggleGroup, ButtonLink } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<ToggleGroup onChange={() => HandleChange()}>
  <ButtonLink value="first">First</ButtonLink>
  <ButtonLink value="second">Second</ButtonLink>
  <ButtonLink value="third">Value</ButtonLink>
</ToggleGroup>
```

## Props

Table below contains all types of the props available in the ToggleGroup component.

| Name     | Type              | Default | Description                                           |
| :------- | :---------------- | :------ | :---------------------------------------------------- |
| children | `React.node`      |         | Elements to switch within                             |
| value    | `number | string` |         | Defined value for the children                        |
| onChange | `(event) => void` |         | Handle behaviour when onClick event is triggered      |
| variant  | [enum](#enum)     |         | Allows to choose between different variants of legend |

### Enum

| variant     |
| :---------- |
| `"tabs"`    |
| `"buttons"` |

# VerticalSeparator

To implement `VerticalSeparator` component into your project you'll need to import it as:

```jsx
import { VerticalSeparator } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<VerticalSeparator />
```

## Props

Table below contains all types of the props available in the VerticalSeparator component.

| Name              | Type     | Default | Description                                                    |
| :---------------- | :------- | :------ | :------------------------------------------------------------- |
| customColor       | `string` |         | Accepts a valid color definition                               |
| separatorLocation | `enum`   |         | Sets location of separator by adding padding. Right by default |
| height            | `string` |         | Allows to set a custom height. Any css valid measure.          |
| width             | `string` |         | Allows to set a custom width. Any css valid measure.           |

### Enum

| separatorLocation |
| :---------------- |
| `"left"`          |
| `"right"`         |

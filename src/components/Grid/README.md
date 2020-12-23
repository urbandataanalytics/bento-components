# Grid

To implement Grid component into your project you'll need to import it:

```jsx
import { Grid } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Grid columns="repeat(2, 1fr)" gap="5px">
  <p>Child</p>
  <p>Child</p>
  <p>Child</p>
</Grid>
```

## Props

Table below contains all types of the props available in the FormGroup component.

| Name        | Type         | Default            | Description                                                                |
| :---------- | :----------- | :----------------- | :------------------------------------------------------------------------- |
| children    | `React.Node` |                    | Children for the grid. It will generate as much rows as children received. |
| className   | `string`     |                    | Adds class for this element                                                |
| **columns** | `string`     | `"repeat(2, 1fr)"` | Define columns in CSS Grid syntax                                          |
| gap         | `string`     | `"0px"`            | Define gap size in CSS units                                               |

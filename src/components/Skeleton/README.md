# Skeleton

To implement Skeleton component into your project you'll need to import it as:

```jsx
import { Skeleton } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Skeleton width="100px" variant="square" />
```

## Props

Table below contains all types of the props available in the Skeleton component.

| Name      | Type          | Default  | Description                               |
| :-------- | :------------ | :------- | :---------------------------------------- |
| height    | `string`      | `10px`   | Set height for the component in CSS units |
| **width** | `string`      | `100%`   | Set width for the component in CSS units  |
| variant   | [enum](#enum) | `"text"` | Applies different shapes                  |

## enum

| variant      |
| :----------- |
| `"square"`   |
| `"rounded"`  |
| `"circular"` |
| `"text"`     |

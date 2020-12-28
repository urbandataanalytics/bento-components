# Loader

To implement Loader component into your project you'll need to import it as:

```jsx
import { Loader } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Loader />
```

## Props

Table below contains all types of the props available in the Loader component.

| Name  | Type            | Default   | Description                                                            |
| :---- | :-------------- | :-------- | :--------------------------------------------------------------------- |
| color | [`enum`](#enum) | `primary` | Allows to choose between primary and secondary styles of default theme |
| size  | [`enum`](#enum) | `medium`  | Allows to choose size of loader                                        |

### enum

| color         | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"medium"` |
|               | `"large"`  |

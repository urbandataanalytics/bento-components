# MapActions

To implement MapActions component into your project you'll need to import it as:

```jsx
import { MapActions } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<MapActions> Content Actions </MapActions>
```

## Props

Table below contains all types of the props available in the MapActions component.

| Name         | Type         | Default | Description                                               |
| :----------- | :----------- | :------ | :-------------------------------------------------------- |
| children     | `React.node` |         | Defined actions for the component                         |
| offsetRight  | `string`     |         | Sets a gap of defined size on the right of the component  |
| offsetBottom | `string`     |         | Sets a gap of defined size on the bottom of the component |
| isLoading    | `boolean`    |         | Shows a skeleton to show the loading status               |

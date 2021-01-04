# MapLegend

To implement MapLegend component into your project you'll need to import it as:

```jsx
import { MapLegend } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<MapLegend> Content </MapLegend>
```

The `<MapLegend>` can be used in two variants (range and points) and also allows adding actions to the legend. In order to use actions, they must be passed as an array within the prop 'actions' with the props `value`and `label`. As shown below:

```jsx
<MapLegend
  title="Legend"
  activeAction="sale"
  onChangeAction={() => {}}
  actions={[
    {
      label: 'Sale',
      value: 'sale'
    },
    {
      label: 'Rent',
      value: 'rent'
    }
  ]}
></MapLegend>
```

## Props

Table below contains all types of the props available in the MapLegend component.

| Name           | Type                   | Default | Description                                                                         |
| :------------- | :--------------------- | :------ | :---------------------------------------------------------------------------------- |
| actions        | `Array<Action>`        |         | Expects an Array of `Action`. It has its own [props](#action-props)                 |
| activeAction   | `string`               |         | Name of the action to be set as active by default                                   |
| description    | `string || React.node` |         | Brief description of the legend pourpuse, to be shown below the `title`             |
| offsetLeft     | `string`               |         | Sets a gap of defined size on the left of the component                             |
| offsetBottom   | `string`               |         | Sets a gap of defined size on the bottom of the component                           |
| isLoading      | `boolean`              |         | Shows a skeleton to show the loading status                                         |
| onChangeAction | `(event)=>void`        |         | Handles behaviour when the Action changes                                           |
| points         | `Array<Point>`         |         | Array of points to be listed in the legend. It has its own [props](#point-props)    |
| rangeColors    | `Array<string>`        |         | Array of colors to be used in the scale                                             |
| rangeTextMax   | `string`               |         | Label to be shown as the maximum range at the right of the scale                    |
| rangeTextMin   | `string`               |         | Label to be shown as the minimum range at the left of the scale                     |
| title          | `string || React.node` |         | Title of the legend, placed at the top of the component and on top of `description` |
| variant        | [enum](#enum)          |         | Allows to choose between different variants of legend                               |

### Enum

| variant |
| :------ |
| range   |
| points  |

### Action Props

| Name  | Type               | Default | Description                                    |
| :---- | :----------------- | :------ | :--------------------------------------------- |
| label | `string`           |         | Name to be shown on the screen for that action |
| value | `string || number` |         | Value assigned internally to the action        |

### Point Props

| Name  | Type     | Default | Description                                                     |
| :---- | :------- | :------ | :-------------------------------------------------------------- |
| label | `string` |         | Name to be shown on the screen for that point                   |
| color | `string` |         | Assigns a color to the bullet point generated next to the label |

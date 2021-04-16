# Drawer

To implement Drawer component into your project you'll need to add the import:

```jsx
import Drawer from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Drawer header={<h4>{text('Title', 'Title')}</h4>} position="left" open={false}>
  Content to show
</Drawer>
```

## Props

Table below contains all types of the props available in the Drawer component.

| Name         | Type            | Default | Description                                                                           |
| :----------- | :-------------- | :------ | :------------------------------------------------------------------------------------ |
| **children** | `React.Node`    |         | The content of the Drawer.                                                            |
| **header**   | `React.Node`    |         | Title of the Drawer that will be rendered in the Drawer's header.                     |
| **open**     | `boolean`       |         | If `true` the Drawer will be open.                                                    |
| **position** | [`enum`](#enum) |         | The position on which side the Drawer should appear.                                  |
| closeButton  | `React.node`    | `true`  | Shows/hides the X closing button, in order to control the closing from somewhere else |
| headerColor  | `string`        |         | Allows to set a specific backround-color only for the header section                  |
| offsetBottom | `string`        |         | The bottom offset of the Drawer.                                                      |
| offsetLeft   | `string`        |         | The left offset of the Drawer.                                                        |
| offsetRight  | `string`        |         | The right offset of the Drawer.                                                       |
| offsetTop    | `string`        |         | The top offset of the Drawer.                                                         |
| onClose      | `() => void`    |         | Function for handling onClose event.                                                  |
| showOverlay  | `string`        |         | If `true`, the Drawer will have cloudy background.                                    |
| subHeader    | `React.Node`    |         | Subtitle of the Drawer that will be rendered in the Drawer's header.                  |
| width        | `string`        |         | The width of the Drawer.                                                              |

### enum

| position  |
| :-------- |
| `"right"` |
| `"left"`  |

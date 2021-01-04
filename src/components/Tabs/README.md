# Tabs

`Tabs` component is a grouping component made of `Tab` components. `Tab` is built into `Tabs` component and each have their own props. To implement Tabs component into your project you'll need to import it as:

```jsx
import { Tabs } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Tabs value="b" align="left">
  <Tab value="a" label="Tab 1" />
  <Tab value="b" label="Tab 2" />
  <Tab value="c" label="Tab 3" />
</Tabs>
```

## Tabs Props

Table below contains all types of the props available in the Tabs component.

| Name         | Type               | Default  | Description                                                                                    |
| :----------- | :----------------- | :------- | :--------------------------------------------------------------------------------------------- |
| align        | [#enum](enum)      | `center` | Defines the aligment of the texts within the tabs                                              |
| children     | `React.node`       |          | These elements will create tabs for each                                                       |
| leftContent  | `React.node`       |          | Adds defined elements on the left area of the tabs                                             |
| rightContent | `React.node`       |          | Adds defined elements on the right area of the tabs                                            |
| onChange     | `(event)=>void`    |          | Handles behaviour when the tab changes                                                         |
| value        | `string || number` |          | Defines the active tab. The value must match with any of the `value` props of the `tab` within |

## Tab Props

Table below contains all types of the props available in the Tab component.

| Name      | Type                   | Default | Description                                                                           |
| :-------- | :--------------------- | :------ | :------------------------------------------------------------------------------------ |
| active    | `boolean`              |         | Inherits from parent 'Tabs'. Sets the active tab                                      |
| disabled  | `boolean`              |         | Disables the tab                                                                      |
| badge     | `string`               |         | Defines the value of the badge to be shown                                            |
| onChange  | `(event)=>void`        |         | Inherits from parent onChange event and handles the behaviour when the event is fired |
| **label** | `string || React.Node` |         | Name to be shown in the tab                                                           |
| value     | `string || number`     |         | Sets a value to identify the tab. If not defined, it takes the index number           |

# NavigationBar

To implement NavigationBar component into your project you'll need to import it as:

```jsx
import { NavigationBar } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<NavigationBar></NavigationBar>
```

## Props

Table below contains all types of the props available in the NavigationBar component.

| Name         | Type         | Default | Description                                                                                  |
| :----------- | :----------- | :------ | :------------------------------------------------------------------------------------------- |
| children     | `React.node` |         | Content of the NavigationBar. Elements aligned right corner before rightContent if informed  |  |
| header       | `React.node` |         | Content for the header of the NavigationBar. It will align left.                             |
| dropdownMenu | `React.node` |         | Elements to be included in the main menu on the left. Usually used with `<List>`             |
| iconMenu     | `React.node` |         | Icon to be used for the main menu of the left                                                |
| sticked      | `boolean`    |         | Applies 'sticky' property to the navbar and stays on top of screen when scrolling            |
| loading      | `boolean`    |         | Shows a loading skeleton                                                                     |
| rightContent | `React.node` |         | Places node on the right corner of the Navbar. For example, it can be used with `<Dropdown>` |

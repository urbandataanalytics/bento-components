# List

To implement List component into your project you'll need to import the List and any of the desired children [CheckListItem](#checklistitem), [LinkListItem](#linklistitem), [NavListItem](#navlistitem) or [ListItem](#listitem) as (for example):

```jsx
import { List, ChecklistItem } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<List>
  <CheckListItem>Text</CheckListItem>
</List>
```

## Props

Table below contains all types of the props available in the List component.

| Name             | Type            | Default    | Description                                                                                                                             |
| :--------------- | :-------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **`"children"`** | `React.node`    |            | Any of the children options (LinkListItem, CheckListItem, ListItem, NavListItem), also admits any other children such as `<p>` or `<a>` |
| `"className"`    | `string`        |            | Adds the class name to the element                                                                                                      |
| `"size"`         | [`enum`](#enum) | `"medium"` | Size for children, options                                                                                                              |

### enum

| size       |
| :--------- |
| `"medium"` |
| `"large"`  |

# ListItem

ListItem is a base component that allows to create a custom list of elements, even of different components. It is also used as a base for the CheckListItem, NavListItem and other available options, sharing the same props. To apply it to your project it should also be imported with 'List' like follows:

```jsx
import { List, ListItem } from '@uda/bento-components';

<List>
  <ListItem>Text</ListItem>
</List>;
```

## Props

Table below contains all types of the props available in the List component.

| Name              | Type                  | Default | Description                                                                                                                             |
| :---------------- | :-------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| active            | `boolean`             | `false` | Applies the 'active' color set to the item                                                                                              |
| as                | `React.ReactElement`  |         | Specifies the component name to be called within the ListItem. For instance: "TextLink" -it must be first imported or defined-.         |
| children          | `React.node`          |         | Any of the children options (LinkListItem, CheckListItem, ListItem, NavListItem), also admits any other children such as `<p>` or `<a>` |
| className         | `string`              |         | Assigns class to the element                                                                                                            |
| disabled          | `boolean`             |         | Display the 'disabled' variant and the element cannot be used, but can still be seen                                                    |
| focusContent      | `boolean`             |         | Hides all leftContent and rightContent and shows them only on mouse over with a soft animation                                          |
| focusLeftContent  | `boolean`             |         | Hides only content of leftContent and shows it only on mouse over with animation.                                                       |
| focusRightContent | `boolean`             |         | Hides only content of rightContent and shows it only on mouse over with animation.                                                      |
| focused           | `boolean`             |         | Applies the 'focused style to the item to depict like "current element"                                                                 |
| leftContent       | `string | React.node` |         | Content to be displayed at the left side of the main text. It accepts both string and other nodes, like icons.                          |
| rightContent      | `string | React.node` |         | Content to be displayed at the right side of the main text. It accepts both string and other nodes, like icons.                         |
| onClick           | `event => void`       |         | Function to call when the item is clicked on                                                                                            |
| separator         | `boolean`             | `false` | If `true`the item turns into an horizontal rule that divides the list. Does not display any text. To be used as `<ListItem separator/>` |
| size              | [`enum`](#enum)       |         | Size for children, inherits from 'size' prop of List -parent-                                                                           |

### enum

| size       |
| :--------- |
| `"medium"` |
| `"large"`  |

Note: `size` prop is set by the parent `<List>` `size` prop

# NavListItem

Applies the NavBar style to the items of the list. To implement in your project, it has to be imported with 'List' as:

```jsx
import { List, NavListItem } from '@uda/bento-components';

<List>
  <NavListItem>Text</NavListItem>
</List>;
```

## Props

It shares the same props as [ListItem](#listitem)

# LinkListItem

This implements also a TextLink component under the hood so needs to define prop "href". To use this styled link item in your project, you must import along with 'List' as:

```jsx
import { List, LinkListItem } from '@uda/bento-components';

<List>
  <LinkListItem href="https://www.google.com">Google Link</LinkListItem>
</List>;
```

## Props

| Name         | Type                          | Default               | Description                                                                                                                         |
| :----------- | :---------------------------- | :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| href         | `string`                      |                       | The URL it must address to                                                                                                          |
| rightContent | `string | React.ReactElement` | Bullet Icon('\u2022') | Content to be placed at the right of the main content. If 'active' is set to 'true', it shows a bullet by default                   |
| children     | `React.node`                  |                       | Any of the children options (LinkListItem, CheckListItem, ListItem, NavListItem), also admits any other children such as <p> or <a> |

This component also accepts the same props as [ListItem](#listitem), and as it is using the component [TextLink](https://urbandataanalytics.github.io/bento-components/?path=/story/textlink--primary) it also accepts its props.

# CheckListItem

Creates an item that has a 'check' icon when active, as in a checklist. To implement in your project, it has to be imported with 'List' as:

```jsx
import { List, CheckListItem } from '@uda/bento-components';

<List>
  <CheckListItem>Text</CheckListItem>
</List>;
```

## Props

This component accepts the same props as [ListItem](#listitem). These props are particularly relevant for this item:

| Name         | Type                          | Default     | Description                                                                                                                          |
| :----------- | :---------------------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| active       | `boolean`                     |             | Applies the "active" style to the item from the default theme                                                                        |
| rightContent | `string | React.ReactElement` | `IconCheck` | Content to be placed at the right of the main content. If 'active' is set to 'true', it shows the IconCheck on the right of the item |
| disabled     | `boolean`                     |             | Display the 'disabled' variant and the element cannot be used, but can still be seen                                                 |

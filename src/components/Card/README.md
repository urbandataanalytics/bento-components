# Card

To implement Card component into your project you'll need to the import at least the Card and the [CardHeader](#CardHeader):

```jsx
import Card, { CardHeader } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Card>
  <CardHeader>Hello World!</CardHeader>
</Card>
```

## Props

Table below contains all types of the props available in the Card component.

| Name      | Type         | Default | Description                                                                                    |
| :-------- | :----------- | :------ | :--------------------------------------------------------------------------------------------- |
| children  | `React.Node` |         | The content of the Card. You can use [CardHeader](#cardheader) and [CardContent](#cardcontent) |
| className | `string`     |         | Specific class name to pass down to the Card component                                         |
| loading   | `boolean`    | `false` | If `true`, a skeletton will be displayed                                                       |

### CardHeader

```jsx
import Card, { CardHeader } from '@uda/bento-components';
```

#### Usage:

```jsx
<Card>
  <CardHeader>Hello World!</CardHeader>
</Card>
```

#### Props

| Name         | Type         | Default | Description                                            |
| :----------- | :----------- | :------ | :----------------------------------------------------- |
| children     | `React.Node` |         | The content of the CardHeader.                         |
| className    | `string`     |         | Specific class name to pass down to the Card component |
| leftContent  | `React.Node` |         | Displayed item on the left                             |
| rightContent | `React.Node` |         | Displayed item on the right                            |
| subheader    | `React.Node` |         | The subheader of the CardHeader                        |
| title        | `React.Node` |         | The title of the CardHeader                            |

### CardContent

```jsx
import Card, { CardHeader, CardContent } from '@uda/bento-components';
```

#### Usage:

```jsx
<Card>
  <CardHeader>Hello World!</CardHeader>
  <CardContent>This is the card content</CardContent>
</Card>
```

#### Props

| Name      | Type         | Default | Description                                                    |
| :-------- | :----------- | :------ | :------------------------------------------------------------- |
| children  | `React.Node` |         | The content of the CardContent.                                |
| className | `string`     |         | Specific class name to pass down to the Card content component |

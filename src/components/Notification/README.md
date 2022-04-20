# Notification

To implement Notification component into your project you'll need to import it as:

```jsx
import { Notification } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Notification variant="error">Notification Text</Notification>
```

## Props

Table below contains all types of the props available in the Notification component.

| Name        | Type                   | Default    | Description                                                                        |
| :---------- | :--------------------- | :--------- | :--------------------------------------------------------------------------------- |
| children    | `String || React.node` |            | Content of the Notification.                                                       |
| closable    | `boolean`              | `false`    | Adds 'X' icon to allow the content to be closed manually                           |
| icon        | `React.node`           |            | Allows to specify an icon for the Warning. ShowIcon must be `true`in order to show |
| onClose     | `(event) => void`      |            | Handles the behaviour onClose event                                                |
| showIcon    | `boolean`              | `false`    | If `true` shows the specified icon on the left of the message                      |
| **variant** | [enum](#enum)          | `"normal"` | The format of the notification                                                     |

#enum

| variant     |
| :---------- |
| `"normal"`  |
| `"info"`  |
| `"success"` |
| `"warning"` |
| `"error"`   |

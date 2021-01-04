# Modal

To implement Modal component into your project you'll need to import it as:

```jsx
import { Modal } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Modal onClose={() => {}}>Content</Modal>
```

## Props

Table below contains all types of the props available in the Modal component.

| Name               | Type            | Default | Description                                                                |
| :----------------- | :-------------- | :------ | :------------------------------------------------------------------------- |
| **children**       | `string`        |         | Content of the modal                                                       |
| **full**           | `boolean`       | `false` | If `true`removes all padding and makes the content fill the modal          |
| **isOpen**         | `boolean`       |         | If `true`the modal is shown.                                               |
| **onClose**        | `event => void` |         | Handles behaviour on close event                                           |
| closable           | `boolean`       | `true`  | Shows 'x' icon in the top right corner to close it                         |
| enableClickOutside | `boolean`       | `true`  | Allows to close the modal or not when user clicks outside the modal window |
| footer             | `React.node`    |         | Content for the footer of the modal                                        |
| header             | `React.node`    |         | Content for the header of the modal                                        |

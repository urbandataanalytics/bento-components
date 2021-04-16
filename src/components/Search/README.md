# Search

To implement Search component into your project you'll need to import it as:

```jsx
import { Search } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Search onClose={() => HandleOnClose()} />
```

## Props

Table below contains all types of the props available in the Search component.

| Name               | Type              | Default | Description                                                             |
| :----------------- | :---------------- | :------ | :---------------------------------------------------------------------- |
| className          | `string`          |         | Adds CSS class to the element                                           |
| closable           | `boolean`         | `true`  | Has 'X' icon on the right to close the search bar                       |
| disabled           | `boolean`         | `false` | Disables the bar and does not allow editing                             |
| enableClickOutside | `boolean`         | `true`  | Closes the bar when user clicks outside of it                           |
| leftContent        | `string`          |         | Adds custom text next to the search icon and before the input field     |
| name               | `string`          |         | Sets `name`to the input field                                           |
| onChange           | `(event) => void` |         | Handles behaviour when input content changes. Usually to perform search |
| **onClose**        | `(event) => void` |         | Handles behaviour when the onClose event is triggered                   |
| placeholder        | `string`          |         | Temporary text in the input field to assist the user                    |
| tabIndex           | `string`          |         | Specifies the tab order of the element (when the 'tab' key is pressed)  |
| value              | `string`          | `" "`   | Initial value set for the input field                                   |

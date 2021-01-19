# InfinitePagination

This component sits in the left down corner of the screen. To implement InfinitePagination component into your project you'll need to import it as:

```jsx
import { InfinitePagination } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<InfinitePagination currentCount="25" label="Page" totalCount="100" />
```

## Props

Table below contains all types of the props available in the InfinitePagination component.

| Name             | Type     | Default | Description                                                                                           |
| :--------------- | :------- | :------ | :---------------------------------------------------------------------------------------------------- |
| **currentCount** | `number` |         | Value of the current number displayed in order to calculature the progress in relation with the total |
| **label**        | `string` |         | Text of the label above the progress bar                                                              |
| **totalCount**   | `number` |         | Value of total items of pagination                                                                    |

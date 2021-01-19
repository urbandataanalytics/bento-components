# Pagination

To implement Pagination component into your project you'll need to import it as:

```jsx
import { Pagination } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Pagination
  currentCount="100"
  totalCount="200"
  isLoading={false}
  label="You are viewing..."
  moreLabel="Load More"
  onLoadMore={() => handleOnLoadMore()}
/>
```

## Props

Table below contains all types of the props available in the Pagination component.

| Name             | Type            | Default | Description                                                          |
| :--------------- | :-------------- | :------ | :------------------------------------------------------------------- |
| **currentCount** | `number`        |         | Number of items currently viewed should be <= `totalCount`           |
| **isLoading**    | `boolean`       |         | Shows loading icon on the button                                     |
| **label**        | `string`        |         | Text over the progress bar                                           |
| **moreLabel**    | `string`        |         | Text on the button                                                   |
| **onLoadMore**   | `event => void` |         | Handles behaviour when button is clicked. Usually to load more items |
| **totalCount**   | `number`        |         | Total number to be shown and over which to calculate the progress    |

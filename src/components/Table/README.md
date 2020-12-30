# Table

To implement `Table` component into your project you'll need to import it as:

```jsx
import { Table } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Table columns={columnDef} rows={data} domLayout="autoHeight"></Table>
```

## Props

Table below contains all types of the props available in the Table component.

| Name        | Type                                       | Default | Description                                                                    |
| :---------- | :----------------------------------------- | :------ | :----------------------------------------------------------------------------- |
| **columns** | `array` see [columns Props](#columnsprops) |         | Expects an array of objects with the definition of the columns for the table   |
| height      | `number | string`                          |         | Height value for the table                                                     |
| loading     | `boolean`                                  |         | Shows skeleton version of the table                                            |
| **rows**    | `array`                                    |         | Expectes the array with the data for the table, each element will be a row     |
| striped     | `boolean`                                  |         | Shows line of division between rows                                            |
| variant     | [enum](#enum)                              |         | Changes the styling of the table                                               |
| domLayout   | `string`                                   |         | set as 'autoHeight' in order to make the table's height adjust to fit the rows |

### enum

| variant  |
| :------- |
| `small`  |
| `medium` |

### columnsProps

| Name           | Type                                   | Default | Description                                                                 |
| :------------- | :------------------------------------- | :------ | :-------------------------------------------------------------------------- |
| **headerName** | `string`                               |         | Header for the column defined to be displayed                               |
| **field**      | `string`                               |         | Internal name of the field                                                  |
| **align**      | [enum columnsProps](#enum-columnprops) |         | Sets the text alignment for the column                                      |  |  | Shows skeleton version of the table |
| highlight      | `boolean`                              |         | Applies a highlight color to the whole column                               |
| variant        | [enum columnsProps](#enum-columnprops) |         | Allows to choose between styling variants                                   |
| cellRenderer   | `string`                               |         | Expects the name of renderer component to be used when processing this data |
| sortable       | `boolean`                              | false   | Allows to sort the column by clicking on header                             |

### enum columnProps

| align    | variant     |
| :------- | :---------- |
| `left`   | `primary`   |
| `center` | `secondary` |
| `right`  |             |

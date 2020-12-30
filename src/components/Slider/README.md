# Slider

To implement Slider component into your project you'll need to import it as:

```jsx
import { Slider } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Slider max={100} min={10} onChange={() => HandleOnChange()} step={10} variant="slider" />
```

## Props

Table below contains all types of the props available in the Slider component.

| Name         | Type              | Default  | Description                                                                                                                                                                            |
| :----------- | :---------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disabled     | `boolean`         |          | Disables input and does not allow selection                                                                                                                                            |
| isLoading    | `boolean`         |          | Shows a skeleton version of the slider                                                                                                                                                 |
| **max**      | `number`          | `5000`   | Maximum value of the range                                                                                                                                                             |
| maxPrefix    | `string`          |          | Sets a prefix to the maximum value if `prefix` is not defined                                                                                                                          |
| maxSuffix    | `string`          |          | Sets a suffix to the maximum value if `suffix` is not defined                                                                                                                          |
| **min**      | `number`          | `0`      | Minimum value of the range                                                                                                                                                             |
| minPrefix    | `string`          |          | Sets a prefix to the minimum value if `prefix` is not defined                                                                                                                          |
| minSuffix    | `string`          |          | Sets a suffix to the minimum value if `suffix` is not defined                                                                                                                          |
| name         | `string`          |          | Defines a `name` for the input                                                                                                                                                         |
| **onChange** | `(event) => void` |          | Handles the behaviour when the onChange event is triggered                                                                                                                             |
| prefix       | `string`          |          | Sets a prefix both for minimum and maximum values. Overrides `maxPrefix` and `minPrefix`                                                                                               |
| **step**     | `number`          | `1`      | Sets the increment size (step) of the slider selector                                                                                                                                  |
| suffix       | `string`          |          | Sets a suffix both for minimum and maximum values. Overrides `maxSuffix` and `minSuffix`                                                                                               |
| value        | `number | array`  |          | If initially defined by the user, it expects a number in 'slider' variant and a two-element array with minimum value and maximum value like `value = {[0,100]}` in the 'range' variant |
| variant      | [enum](#enum)     | `slider` | Allows to choose between `slider` or `range`                                                                                                                                           |

## enum

| variant  |
| :------- |
| `slider` |
| `range`  |

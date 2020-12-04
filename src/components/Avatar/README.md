# Avatar

To implement Avatar component into your project you'll need to import it:

```jsx
import { Avatar } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Avatar />
```

## Props

Table below contains all types of the props available in the Avatar component.

| Name            | Type                                        | Default    | Description                                                              |
| :-------------- | :------------------------------------------ | :--------- | :----------------------------------------------------------------------- |
| alt             | `string`                                    |            | Optional property for passing own alt attribute to the DOM image element |
| children        | `React.Node`                                |            | The content of the Avatar                                                |
| color           | [`enum`](#enum)                             |            | The color of the Avatar                                                  |
| customColor     | `string`                                    |            | Custom color of the Avatar                                               |
| customTextColor | `string`                                    |            | Custom text color of the Avatar                                          |
| imgProps        | `React.ImgHTMLAttributes<HTMLImageElement>` |            | Props to apply to the image                                              |
| initialsNum     | `number`                                    | `2`        | Number of initials on the Avatar                                         |
| size            | [`enum`](#enum)                             | `'medium'` | Size of the Avatar                                                       |
| src             | `string`                                    |            | Link of the image to use in the Avatar                                   |

### enum

| size           | color         |
| :------------- | :------------ |
| `"small"`      | `"primary"`   |
| `"medium"`     | `"secondary"` |
| `"large"`      |
| `"extralarge"` |

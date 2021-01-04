# FormGroup

To implement FormGroup component into your project you'll need to import it:

```jsx
import { FormGroup } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<FormGroup>
  <InputField label="Email" type="email" placeholder="Type tour email address" />
</FormGroup>
```

## Props

Table below contains all types of the props available in the FormGroup component.

| Name      | Type         | Default | Description                       |
| :-------- | :----------- | :------ | :-------------------------------- |
| children  | `React.Node` |         | The children/inputs for this form |
| className | `string`     |         | Adds class for this element       |

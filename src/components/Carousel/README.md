# Carousel

To implement Carousel component into your project you'll need to add the import:

```jsx
import { Carousel } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<Carousel slides={slidesImages}></Carousel>
```

## Props

Table below contains all types of the props available in Carousel component.

| Name                | Type            | Default    | Description                                                                                 |
| :------------------ | :-------------- | :--------- | :------------------------------------------------------------------------------------------ |
| controlOffset       | `string`        | `10px`     | Defines the separation of the 'next' and 'previous' controls from the edge of the image     |
| draggable           | `boolean`       | `false`    | Allows to drag the image and slide to the sides without needing to use the controls         |
| loop                | `boolean`       | `false`    | Makes the carousel to start over again from the first slide when it arrives to the last one |
| nextButton          | `React.node`    |            | Allows to define a custom 'next' button                                                     |
| onChange            | `(event)=>void` | `() => {}` | Handles behaviour lauched with event                                                        |
| onClick             | `(event)=>void` | `() => {}` | Handles behaviour lauched with event                                                        |
| onThumbClick        | `(event)=>void` | `() => {}` | Handles behaviour lauched with event                                                        |
| prevButton          | `React.node`    |            | Allows to define a custom 'previous' button                                                 |
| rounded             | `boolean`       | `false`    | Applies rounded corners                                                                     |
| **slides**          | `Array`         | `[]`       | Array of images used by the Carousel                                                        |
| startIndex          | `number`        | `0`        | Sets the starting image to the position of the array `slides`defined                        |
| thumbCount          | `number`        | `3`        | Quantity of thumbnail images to be shown next to the main image                             |
| thumbnailStartIndex | `number`        | `1`        | Sets the starting image for the thumbnails according to he `slideds`array                   |  |
| thumbnailsEnabled   | `boolean`       | `false`    | Enables the thumbnail preview of the images of the `slideds`array next to the carousel      |

# Icon

In order to use any of the icons from the library, you just have to import the desired icon by it's name. See list of names below and check the preview of each in [the StoryBook](https://urbandataanalytics.github.io/bento-components/?path=/story/icon--all-icons).

```jsx
import { IconWarning, IconAction } from '@uda/bento-components';
```

After adding import into your project you can use it simply like:

```jsx
<IconWarning customColor="#2A00FF" size="large" />
<IconAction color="primary" />
```

## Props

Table below contains all types of the props available in the FormGroup component.

| Name        | Type            | Default    | Description                                                                                                                                                 |
| :---------- | :-------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ariaHidden  | `boolean`       |            | Includes 'aria-hidden' attribute to icon                                                                                                                    |
| ariaLabel   | `string`        |            | Includes 'aria-label' attribute to icon                                                                                                                     |
| children    | `React.Node`    |            | Children for the Icon. For adding <p> for example                                                                                                           |
| className   | `string`        |            | Adds class for this element                                                                                                                                 |
| color       | [`enum`](#enum) |            | Offers color variants from default theme. When 'custom color' is not informed, 'color' will be taken into account. Won't work if 'custom-color' is defined. |
| customColor | `string`        |            | Allows picking a custom color in CSS format (#hexadecimal or RGB). Takes priority in front of 'color'. When defined, 'color' won't work.                    |
| size        | [`enum`](#enum) | `"medium"` | Allows to choose between available sizes defined in default theme                                                                                           |
| viewBox     | `string`        |            | Sets custom defined "viewBox" attribute to apply to icon SVG if desired, in order to manage scaling and aspect ratio. Expected format: ("0 0 0 0")          |

### enum

| color         | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"medium"` |
|               | `"large"`  |

## Icons Name List

[Check the icons list and images 📝 in StoryBook](https://urbandataanalytics.github.io/bento-components/?path=/story/icon--all-icons)

| Icon Name              |
| :--------------------- |
| `IconAction`           |
| `IconActivity`         |
| `IconAdd`              |
| `IconAirConditioning`  |
| `IconArea`             |
| `IconArrowClose`       |
| `IconArrowDoubleLeft`  |
| `IconArrowDoubleRight` |
| `IconArrowLeft`        |
| `IconArrowOpen`        |
| `IconAsset`            |
| `IconAtSign`           |
| `IconAttach`           |
| `IconBarChart`         |
| `IconBathroom`         |
| `IconBedroom`          |
| `IconBuilding`         |
| `IconChartBar`         |
| `IconChartPie`         |
| `IconCheck`            |
| `IconChevronLeft`      |
| `IconChevronRight`     |
| `IconClose`            |
| `IconCompany`          |
| `IconCompare`          |
| `IconCopy`             |
| `IconDelete`           |
| `IconDotLarge`         |
| `IconDot`              |
| `IconDownloadCloud`    |
| `IconDownloadPdf`      |
| `IconDownload`         |
| `IconDropletFill`      |
| `IconDroplet`          |
| `IconEdit`             |
| `IconElevator`         |
| `IconExterior`         |
| `IconExternalLink`     |
| `IconEyeOff`           |
| `IconEye`              |
| `IconFile`             |
| `IconFilter`           |
| `IconFolder`           |
| `IconGlobal`           |
| `IconGrid`             |
| `IconInfo`             |
| `IconLineChart`        |
| `IconList`             |
| `IconLoader`           |
| `IconLogout`           |
| `IconMapPin`           |
| `IconMap`              |
| `IconMaximize`         |
| `IconMenu`             |
| `IconMinimize`         |
| `IconMinus`            |
| `IconMore`             |
| `IconMove`             |
| `IconNavigatio`        |
| `IconNewHome`          |
| `IconNotification`     |
| `IconOrderAsc`         |
| `IconOrderDesc`        |
| `IconParking`          |
| `IconPin`              |
| `IconPlus`             |
| `IconSearch`           |
| `IconSettings`         |
| `IconShare`            |
| `IconStar`             |
| `IconStorage`          |
| `IconSuccess`          |
| `IconSwimmingPool`     |
| `IconTeam`             |
| `IconTerrace`          |
| `IconUpdate`           |
| `IconUploadCloud`      |
| `IconUpload`           |
| `IconUser`             |
| `IconWarning`          |

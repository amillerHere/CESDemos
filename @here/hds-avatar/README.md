## `src/hds-avatar.ts`:

### class: `Avatar`, `hds-avatar`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name           | Privacy | Type                  | Default     | Description                                                                                                                                                                                          | Inherited From |
| -------------- | ------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `disabled`     |         | `boolean`             | `false`     |                                                                                                                                                                                                      |                |
| `borderless`   |         | `boolean`             | `false`     |                                                                                                                                                                                                      |                |
| `size`         |         | `AvatarSize`          | `'medium'`  | 'small' \| 'medium' \| 'large' \| 'x-large'                                                                                                                                                          |                |
| `name`         |         | `string \| undefined` |             |                                                                                                                                                                                                      |                |
| `imageUrl`     |         | `string \| undefined` |             |                                                                                                                                                                                                      |                |
| `icon`         |         | `string \| undefined` |             |                                                                                                                                                                                                      |                |
| `iconCategory` |         | `IconCategory`        | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |
| `iconStyle`    |         | `IconStyle`           | `'solid'`   | 'solid' \| 'outline'                                                                                                                                                                                 |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `disabled`      | disabled     |                |
| `borderless`    | borderless   |                |
| `size`          | size         |                |
| `name`          | name         |                |
| `image-url`     | imageUrl     |                |
| `icon`          | icon         |                |
| `icon-category` | iconCategory |                |
| `icon-style`    | iconStyle    |                |

#### CSS Properties

| Name                             | Default | Description                                    |
| -------------------------------- | ------- | ---------------------------------------------- |
| `--hds-avatar-background`        |         | Controls the background of the avatar          |
| `--hds-avatar-border-background` |         | Controls the background of the avatar's border |
| `--hds-avatar-focus-ring-color`  |         | Controls the color of the focus ring           |

<details><summary>Private API</summary>

#### Methods

| Name            | Privacy   | Description | Parameters                  | Return | Inherited From |
| --------------- | --------- | ----------- | --------------------------- | ------ | -------------- |
| `getInitials`   | protected |             | `name: string \| undefined` |        |                |
| `getIconSize`   | private   |             |                             |        |                |
| `renderContent` | private   |             |                             |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name         | Declaration | Module            | Package |
| --------------------------- | ------------ | ----------- | ----------------- | ------- |
| `js`                        | `Avatar`     | Avatar      | src/hds-avatar.ts |         |
| `custom-element-definition` | `hds-avatar` | Avatar      | src/hds-avatar.ts |         |

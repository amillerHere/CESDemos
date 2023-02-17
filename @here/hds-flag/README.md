## `src/hds-flag.ts`:

### class: `Flag`, `hds-flag`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name            | Privacy | Type     | Default | Description | Inherited From |
| --------------- | ------- | -------- | ------- | ----------- | -------------- |
| `flagIdCounter` |         | `number` | `0`     |             |                |

#### Fields

| Name           | Privacy | Type           | Default     | Description                                                                                                                                                                                          | Inherited From |
| -------------- | ------- | -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `variant`      |         | `FlagVariant`  | `'subtle'`  | 'subtle' \| 'warning' \| 'success' \| 'error' \| 'custom' \| 'subtle-quiet' \| 'warning-quiet' \| 'success-quiet' \| 'error-quiet' \| 'custom-quiet'                                                 |                |
| `size`         |         | `FlagSize`     | `'small'`   | 'small' \| 'medium' \| 'large'                                                                                                                                                                       |                |
| `icon`         |         |                |             |                                                                                                                                                                                                      |                |
| `iconCategory` |         | `IconCategory` | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `variant`       | variant      |                |
| `size`          | size         |                |
| `icon`          | icon         |                |
| `icon-category` | iconCategory |                |

#### CSS Properties

| Name                             | Default | Description        |
| -------------------------------- | ------- | ------------------ |
| `--hds-flag-custom-accent-color` |         | Accent color value |
| `--hds-flag-custom-font-color`   |         | Font color value   |
| `--hds-icon-color`               |         | Icon color value   |

#### Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | Content for the Flag label |

<details><summary>Private API</summary>

#### Fields

| Name            | Privacy   | Type              | Default | Description | Inherited From |
| --------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `slotElement`   | protected | `HTMLSlotElement` |         |             |                |
| `labelEl`       | protected | `HTMLElement`     |         |             |                |
| `slotItemsList` | protected | `HTMLSlotElement` |         |             |                |
| `iconOnly`      | private   | `boolean`         | `false` |             |                |

#### Methods

| Name         | Privacy   | Description | Parameters | Return | Inherited From |
| ------------ | --------- | ----------- | ---------- | ------ | -------------- |
| `renderIcon` | protected |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name       | Declaration | Module          | Package |
| --------------------------- | ---------- | ----------- | --------------- | ------- |
| `js`                        | `Flag`     | Flag        | src/hds-flag.ts |         |
| `custom-element-definition` | `hds-flag` | Flag        | src/hds-flag.ts |         |

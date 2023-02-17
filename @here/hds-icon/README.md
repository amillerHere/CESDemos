## `src/hds-icon.ts`:

### class: `Icon`, `hds-icon`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Methods

| Name                 | Privacy | Description | Parameters     | Return | Inherited From |
| -------------------- | ------- | ----------- | -------------- | ------ | -------------- |
| `getNameByMediaType` |         |             | `type: string` |        |                |

#### Fields

| Name                | Privacy | Type                               | Default     | Description                                                                                                                                                                                          | Inherited From |
| ------------------- | ------- | ---------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `name`              |         | `string`                           | `''`        |                                                                                                                                                                                                      |                |
| `category`          |         | `IconCategory`                     | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |
| `iconStyle`         |         | `IconStyle`                        | `'solid'`   | 'solid' \| 'outline'                                                                                                                                                                                 |                |
| `size`              |         | `string`                           | `'16px'`    |                                                                                                                                                                                                      |                |
| `ariaLabel`         |         | `string`                           | `''`        |                                                                                                                                                                                                      |                |
| `errorEventPayload` |         | `IconNotFoundPayload \| undefined` |             |                                                                                                                                                                                                      |                |

#### Events

| Name       | Type                                                                                                                             | Description                                                | Inherited From |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------- |
| `notfound` | `CustomEvent<{type: IconErrorType, message: string, category: IconCategory, name: string, style: IconStyle, size: IconSvgSize}>` | Fired when the icon doesn't exist. \`IconNotFoundPayload\` |                |

#### Attributes

| Name         | Field     | Inherited From |
| ------------ | --------- | -------------- |
| `name`       | name      |                |
| `category`   | category  |                |
| `icon-style` | iconStyle |                |
| `size`       | size      |                |
| `aria-label` | ariaLabel |                |

#### CSS Properties

| Name               | Default | Description                                               |
| ------------------ | ------- | --------------------------------------------------------- |
| `--hds-icon-color` |         | Color value for the icon                                  |
| `--hds-icon-size`  |         | Size value for the icon, overrides the attribute \`size\` |

<details><summary>Private API</summary>

#### Fields

| Name      | Privacy | Type          | Default  | Description               | Inherited From |
| --------- | ------- | ------------- | -------- | ------------------------- | -------------- |
| `svgSize` | private | `IconSvgSize` | `'16px'` | '8px' \| '16px' \| '24px' |                |

</details>

<hr/>

### Exports

| Kind                        | Name       | Declaration | Module          | Package |
| --------------------------- | ---------- | ----------- | --------------- | ------- |
| `js`                        | `Icon`     | Icon        | src/hds-icon.ts |         |
| `custom-element-definition` | `hds-icon` | Icon        | src/hds-icon.ts |         |

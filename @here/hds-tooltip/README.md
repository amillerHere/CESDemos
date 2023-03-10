## `src/hds-tooltip.ts`:

### class: `Tooltip`, `hds-tooltip`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name            | Privacy | Type      | Default              | Description | Inherited From |
| --------------- | ------- | --------- | -------------------- | ----------- | -------------- |
| `position`      |         | `string`  | `'bottom'`           |             |                |
| `interactive`   |         | `boolean` | `false`              |             |                |
| `trigger`       |         | `string`  | `'mouseenter focus'` |             |                |
| `disabled`      |         |           |                      |             |                |
| `tippyInstance` |         | `any`     |                      |             |                |

#### Methods

| Name   | Privacy | Description | Parameters | Return | Inherited From |
| ------ | ------- | ----------- | ---------- | ------ | -------------- |
| `hide` |         |             |            |        |                |

#### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `position`    | position    |                |
| `interactive` | interactive |                |
| `trigger`     | trigger     |                |
| `disabled`    | disabled    |                |

<details><summary>Private API</summary>

#### Fields

| Name              | Privacy | Type      | Default | Description | Inherited From |
| ----------------- | ------- | --------- | ------- | ----------- | -------------- |
| `isDisabled`      | private | `boolean` | `false` |             |                |
| `tooltipInstance` | private | `any`     |         |             |                |

#### Methods

| Name             | Privacy | Description | Parameters | Return | Inherited From |
| ---------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `createTooltip`  | private |             |            |        |                |
| `destroyTooltip` | private |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name          | Declaration | Module             | Package |
| --------------------------- | ------------- | ----------- | ------------------ | ------- |
| `js`                        | `Tooltip`     | Tooltip     | src/hds-tooltip.ts |         |
| `custom-element-definition` | `hds-tooltip` | Tooltip     | src/hds-tooltip.ts |         |

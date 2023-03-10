## `src/hds-progress-indicator.ts`:

### class: `ProgressIndicator`, `hds-progress-indicator`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name            | Privacy | Type                       | Default           | Description                                                          | Inherited From |
| --------------- | ------- | -------------------------- | ----------------- | -------------------------------------------------------------------- | -------------- |
| `color`         |         | `ProgressIndicatorColor`   | `'accent'`        | 'accent' \| 'action' \| 'on-light' \| 'on-light-subtle' \| 'on-dark' |                |
| `size`          |         | `ProgressIndicatorSize`    | `'small'`         | 'small' \| 'large'                                                   |                |
| `indicatorType` |         | `ProgressIndicatorType`    | `'linear'`        | 'linear' \| 'circular'                                               |                |
| `variant`       |         | `ProgressIndicatorVariant` | `'indeterminate'` | 'indeterminate' \| 'determinate'                                     |                |
| `progress`      |         | `number`                   | `0`               |                                                                      |                |
| `ariaLabel`     |         |                            |                   |                                                                      |                |

#### Attributes

| Name             | Field         | Inherited From |
| ---------------- | ------------- | -------------- |
| `color`          | color         |                |
| `size`           | size          |                |
| `indicator-type` | indicatorType |                |
| `variant`        | variant       |                |
| `progress`       | progress      |                |
| `aria-label`     | ariaLabel     |                |

<details><summary>Private API</summary>

#### Fields

| Name                         | Privacy   | Type          | Default | Description | Inherited From |
| ---------------------------- | --------- | ------------- | ------- | ----------- | -------------- |
| `circularDeterminateVariant` | protected | `HTMLElement` |         |             |                |
| `_circularProgressLength`    | private   |               |         |             |                |

#### Methods

| Name                     | Privacy | Description | Parameters | Return | Inherited From |
| ------------------------ | ------- | ----------- | ---------- | ------ | -------------- |
| `_renderLinearVariant`   | private |             |            |        |                |
| `_renderCircularVariant` | private |             |            |        |                |
| `getCircularDimensions`  | private |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                     | Declaration       | Module                        | Package |
| --------------------------- | ------------------------ | ----------------- | ----------------------------- | ------- |
| `js`                        | `ProgressIndicator`      | ProgressIndicator | src/hds-progress-indicator.ts |         |
| `custom-element-definition` | `hds-progress-indicator` | ProgressIndicator | src/hds-progress-indicator.ts |         |

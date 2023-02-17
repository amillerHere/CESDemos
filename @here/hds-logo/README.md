## `src/hds-logo.ts`:

### class: `Logo`, `hds-logo`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Methods

| Name       | Privacy | Description                            | Parameters           | Return              | Inherited From |
| ---------- | ------- | -------------------------------------- | -------------------- | ------------------- | -------------- |
| `drawLogo` |         | Returns the SVG code for the HERE logo | `color, symbolColor` | `SVGTemplateResult` |                |

#### Fields

| Name         | Privacy | Type       | Default         | Description                                                      | Inherited From |
| ------------ | ------- | ---------- | --------------- | ---------------------------------------------------------------- | -------------- |
| `onDark`     |         | `boolean`  | `false`         |                                                                  |                |
| `monochrome` |         | `boolean`  | `false`         |                                                                  |                |
| `size`       |         | `LogoSize` | `'extra-small'` | 'extra-small' \| 'small' \| 'medium' \| 'large' \| 'extra-large' |                |
| `padding`    |         | `boolean`  | `false`         |                                                                  |                |
| `background` |         | `boolean`  | `false`         |                                                                  |                |

#### Attributes

| Name         | Field      | Inherited From |
| ------------ | ---------- | -------------- |
| `on-dark`    | onDark     |                |
| `monochrome` | monochrome |                |
| `size`       | size       |                |
| `padding`    | padding    |                |
| `background` | background |                |

<hr/>

### Exports

| Kind                        | Name       | Declaration | Module          | Package |
| --------------------------- | ---------- | ----------- | --------------- | ------- |
| `js`                        | `Logo`     | Logo        | src/hds-logo.ts |         |
| `custom-element-definition` | `hds-logo` | Logo        | src/hds-logo.ts |         |

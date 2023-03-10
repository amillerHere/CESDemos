## `src/hds-label.ts`:

### class: `Label`, `hds-label`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name        | Privacy | Type     | Default | Description | Inherited From |
| ----------- | ------- | -------- | ------- | ----------- | -------------- |
| `idCounter` |         | `number` | `0`     |             |                |

#### Fields

| Name      | Privacy | Type           | Default     | Description                                                             | Inherited From |
| --------- | ------- | -------------- | ----------- | ----------------------------------------------------------------------- | -------------- |
| `for`     |         |                |             |                                                                         |                |
| `type`    |         | `LabelType`    | `'default'` | 'default' \| 'assistive'                                                |                |
| `variant` |         | `LabelVariant` | `'default'` | 'default' \| 'error' \| 'warning' \| 'success' \| 'focus' \| 'disabled' |                |

#### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `for`     | for     |                |
| `type`    | type    |                |
| `variant` | variant |                |

#### Slots

| Name           | Description                                   |
| -------------- | --------------------------------------------- |
| `default`      | Content for the primary label                 |
| `secondary`    | Content for the secondary label, on the right |
| `form-element` | Form element to reference for accessibility   |

<details><summary>Private API</summary>

#### Fields

| Name                 | Privacy   | Type                       | Default | Description | Inherited From |
| -------------------- | --------- | -------------------------- | ------- | ----------- | -------------- |
| `formElement`        | protected | `HTMLSlotElement`          |         |             |                |
| `secondaryLabel`     | protected | `HTMLDivElement`           |         |             |                |
| `secondaryLabelSlot` | protected | `HTMLSlotElement`          |         |             |                |
| `currentLabelTarget` | private   | `HTMLElement \| undefined` |         |             |                |

#### Methods

| Name                   | Privacy   | Description | Parameters | Return                     | Inherited From |
| ---------------------- | --------- | ----------- | ---------- | -------------------------- | -------------- |
| `renderPrimaryLabel`   | protected |             |            |                            |                |
| `renderSecondaryLabel` | protected |             |            |                            |                |
| `renderFormElement`    | protected |             |            |                            |                |
| `labelClick`           | private   |             | `e: Event` |                            |                |
| `findLabelTarget`      | private   |             |            | `HTMLElement \| undefined` |                |
| `assignAriaLabelledBy` | private   |             |            |                            |                |

</details>

<hr/>

### Exports

| Kind                        | Name        | Declaration | Module           | Package |
| --------------------------- | ----------- | ----------- | ---------------- | ------- |
| `js`                        | `Label`     | Label       | src/hds-label.ts |         |
| `custom-element-definition` | `hds-label` | Label       | src/hds-label.ts |         |

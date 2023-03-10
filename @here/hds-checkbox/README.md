## `src/hds-checkbox-group.ts`:

### class: `CheckboxGroup`, `hds-checkbox-group`

#### Superclass

| Name          | Module | Package        |
| ------------- | ------ | -------------- |
| `BaseElement` |        | @here/hds-base |

#### Fields

| Name             | Privacy | Type                  | Default | Description | Inherited From |
| ---------------- | ------- | --------------------- | ------- | ----------- | -------------- |
| `label`          |         | `string \| undefined` |         |             |                |
| `secondaryLabel` |         | `string \| undefined` |         |             |                |
| `ariaLabel`      |         | `string`              | `''`    |             |                |

#### Attributes

| Name              | Field          | Inherited From |
| ----------------- | -------------- | -------------- |
| `label`           | label          |                |
| `secondary-label` | secondaryLabel |                |
| `aria-label`      | ariaLabel      |                |

#### Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| `default` | List of \`hds-checkbox\` elements |

<details><summary>Private API</summary>

#### Fields

| Name               | Privacy   | Type                  | Default | Description | Inherited From |
| ------------------ | --------- | --------------------- | ------- | ----------- | -------------- |
| `isTabbable`       | protected | `boolean`             | `true`  |             |                |
| `labelId`          | private   | `string \| undefined` |         |             |                |
| `secondaryLabelId` | private   | `string \| undefined` |         |             |                |

#### Methods

| Name                   | Privacy   | Description | Parameters | Return | Inherited From |
| ---------------------- | --------- | ----------- | ---------- | ------ | -------------- |
| `renderPrimaryLabel`   | protected |             |            |        |                |
| `renderSecondaryLabel` | protected |             |            |        |                |
| `renderLabels`         | protected |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                 | Declaration   | Module                    | Package |
| --------------------------- | -------------------- | ------------- | ------------------------- | ------- |
| `js`                        | `CheckboxGroup`      | CheckboxGroup | src/hds-checkbox-group.ts |         |
| `custom-element-definition` | `hds-checkbox-group` | CheckboxGroup | src/hds-checkbox-group.ts |         |

## `src/hds-checkbox.ts`:

### class: `Checkbox`, `hds-checkbox`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name             | Privacy | Type      | Default | Description | Inherited From |
| ---------------- | ------- | --------- | ------- | ----------- | -------------- |
| `formAssociated` |         | `boolean` | `true`  |             |                |

#### Fields

| Name             | Privacy | Type                             | Default    | Description         | Inherited From |
| ---------------- | ------- | -------------------------------- | ---------- | ------------------- | -------------- |
| `size`           |         | `CheckboxSize`                   | `'medium'` | 'small' \| 'medium' |                |
| `checked`        |         | `boolean`                        | `false`    |                     |                |
| `disabled`       |         | `boolean`                        | `false`    |                     |                |
| `required`       |         | `boolean`                        | `false`    |                     |                |
| `indeterminate`  |         | `boolean`                        | `false`    |                     |                |
| `id`             |         | `string`                         | `''`       |                     |                |
| `name`           |         | `string`                         | `''`       |                     |                |
| `ariaLabel`      |         | `string`                         | `''`       |                     |                |
| `showRequired`   |         | `boolean`                        | `false`    |                     |                |
| `_value`         |         | `string \| boolean`              | `'on'`     |                     |                |
| `value`          |         | `string \| boolean \| undefined` |            |                     |                |
| `defaultChecked` |         | `boolean`                        |            |                     |                |

#### Events

| Name     | Type                                                                                               | Description                                                        | Inherited From |
| -------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------- |
| `change` | `CustomEvent<{name: string, id: string; value: string \| boolean \| undefined, checked: boolean}>` | Fired when the checked value has changed \`CheckboxChangePayload\` |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `size`          | size         |                |
| `checked`       | checked      |                |
| `disabled`      | disabled     |                |
| `required`      | required     |                |
| `id`            | id           |                |
| `name`          | name         |                |
| `aria-label`    | ariaLabel    |                |
| `show-required` | showRequired |                |
| `value`         | \_value      |                |

#### Slots

| Name          | Description                        |
| ------------- | ---------------------------------- |
| `default`     | Content placed in the label.       |
| `description` | Content placed in the description. |

<details><summary>Private API</summary>

#### Fields

| Name          | Privacy   | Type               | Default | Description | Inherited From |
| ------------- | --------- | ------------------ | ------- | ----------- | -------------- |
| `formElement` | protected | `HTMLInputElement` |         |             |                |

#### Methods

| Name                     | Privacy | Description | Parameters | Return | Inherited From |
| ------------------------ | ------- | ----------- | ---------- | ------ | -------------- |
| `displayIcon`            | private |             |            |        |                |
| `renderContent`          | private |             |            |        |                |
| `_changeHandler`         | private |             |            |        |                |
| `_propertyChangeHandler` | private |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name           | Declaration | Module              | Package |
| --------------------------- | -------------- | ----------- | ------------------- | ------- |
| `js`                        | `Checkbox`     | Checkbox    | src/hds-checkbox.ts |         |
| `custom-element-definition` | `hds-checkbox` | Checkbox    | src/hds-checkbox.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name                    | Declaration           | Module                  | Package |
| ---- | ----------------------- | --------------------- | ----------------------- | ------- |
| `js` | `Checkbox`              | Checkbox              | ./hds-checkbox.js       |         |
| `js` | `CheckboxSize`          | CheckboxSize          | ./hds-checkbox.js       |         |
| `js` | `CheckboxChangePayload` | CheckboxChangePayload | ./hds-checkbox.js       |         |
| `js` | `CheckboxGroup`         | CheckboxGroup         | ./hds-checkbox-group.js |         |

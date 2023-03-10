## `src/hds-radio-group.ts`:

### class: `RadioGroup`, `hds-radio-group`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name                | Privacy | Type      | Default                                                   | Description | Inherited From |
| ------------------- | ------- | --------- | --------------------------------------------------------- | ----------- | -------------- |
| `formAssociated`    |         | `boolean` | `true`                                                    |             |                |
| `shadowRootOptions` |         | `object`  | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name             | Privacy | Type                  | Default    | Description         | Inherited From |
| ---------------- | ------- | --------------------- | ---------- | ------------------- | -------------- |
| `vertical`       |         | `boolean`             | `false`    |                     |                |
| `disabled`       |         | `boolean`             | `false`    |                     |                |
| `name`           |         | `string`              | `''`       |                     |                |
| `value`          |         | `string`              | `''`       |                     |                |
| `label`          |         | `string \| undefined` |            |                     |                |
| `secondaryLabel` |         | `string \| undefined` |            |                     |                |
| `size`           |         | `RadioSize`           | `'medium'` | 'small' \| 'medium' |                |

#### Events

| Name     | Type                                                                    | Description                                 | Inherited From |
| -------- | ----------------------------------------------------------------------- | ------------------------------------------- | -------------- |
| `change` | `CustomEvent<{value: string; name: string; index: number, id: string}>` | Fired when a radio button has been selected |                |

#### Attributes

| Name              | Field          | Inherited From |
| ----------------- | -------------- | -------------- |
| `vertical`        | vertical       |                |
| `disabled`        | disabled       |                |
| `name`            | name           |                |
| `value`           | value          |                |
| `label`           | label          |                |
| `secondary-label` | secondaryLabel |                |
| `size`            | size           |                |

#### Slots

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| `default` | Content for the list of \`hds-radio\` items |

<details><summary>Private API</summary>

#### Fields

| Name                    | Privacy   | Type                  | Default | Description | Inherited From |
| ----------------------- | --------- | --------------------- | ------- | ----------- | -------------- |
| `radiosSlot`            | protected | `HTMLElement`         |         |             |                |
| `labelId`               | private   | `string \| undefined` |         |             |                |
| `secondaryLabelId`      | private   | `string \| undefined` |         |             |                |
| `_setFocusableRadio`    | private   |                       |         |             |                |
| `_handleSelectNext`     | private   |                       |         |             |                |
| `_handleSelectPrevious` | private   |                       |         |             |                |

#### Methods

| Name                           | Privacy   | Description                                                                                                                                         | Parameters                                                                                                           | Return | Inherited From |
| ------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------ | -------------- |
| `renderLabel`                  | protected |                                                                                                                                                     |                                                                                                                      |        |                |
| `getAriaLabelledBy`            | protected |                                                                                                                                                     |                                                                                                                      |        |                |
| `_handleSelectedRadio`         | private   | Captures the event emitted by a hds-radio component and emits a new event with the index of the selected radio instead&#xA;of the emitted radio id. | `evt: CustomEvent<RadioChangePayload>`                                                                               |        |                |
| `_getRadioIndex`               | private   |                                                                                                                                                     | `radioId: RadioSelectPayload`                                                                                        |        |                |
| `_getSelectedRadio`            | private   |                                                                                                                                                     |                                                                                                                      |        |                |
| `_setSelectedRadio`            | private   |                                                                                                                                                     | `radioId: string`                                                                                                    |        |                |
| `_setSelectedRadioByValue`     | private   |                                                                                                                                                     | `value: string`                                                                                                      |        |                |
| `_setRadioSize`                | private   |                                                                                                                                                     | `size: RadioSize`                                                                                                    |        |                |
| `_setRadiosDisabled`           | private   |                                                                                                                                                     |                                                                                                                      |        |                |
| `_getRadios`                   | private   |                                                                                                                                                     |                                                                                                                      |        |                |
| `_selectRadioByIndexPredicate` | private   |                                                                                                                                                     | `currentRadioId: RadioSelectPayload, nextIndexPredicate: (currentRadioIndex: number, radiosCount: number) => number` |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name              | Declaration | Module                 | Package |
| --------------------------- | ----------------- | ----------- | ---------------------- | ------- |
| `js`                        | `RadioGroup`      | RadioGroup  | src/hds-radio-group.ts |         |
| `custom-element-definition` | `hds-radio-group` | RadioGroup  | src/hds-radio-group.ts |         |

## `src/hds-radio.ts`:

### class: `Radio`, `hds-radio`

#### Superclass

| Name          | Module | Package        |
| ------------- | ------ | -------------- |
| `BaseElement` |        | @here/hds-base |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name                   | Privacy | Type        | Default    | Description         | Inherited From |
| ---------------------- | ------- | ----------- | ---------- | ------------------- | -------------- |
| `isTabbable`           |         | `boolean`   | `true`     |                     |                |
| `checked`              |         | `boolean`   | `false`    |                     |                |
| `disabled`             |         | `boolean`   | `false`    |                     |                |
| `isRadioGroupDisabled` |         | `boolean`   | `false`    |                     |                |
| `id`                   |         | `string`    | `''`       |                     |                |
| `name`                 |         | `string`    | `''`       |                     |                |
| `value`                |         | `string`    | `''`       |                     |                |
| `ariaLabel`            |         | `string`    | `''`       |                     |                |
| `tabIndex`             |         | `number`    | `-1`       |                     |                |
| `size`                 |         | `RadioSize` | `'medium'` | 'small' \| 'medium' |                |

#### Methods

| Name    | Privacy | Description | Parameters | Return | Inherited From |
| ------- | ------- | ----------- | ---------- | ------ | -------------- |
| `focus` |         |             |            |        |                |

#### Events

| Name             | Type                                                     | Description                                                                                      | Inherited From |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------- |
| `change`         | `CustomEvent<{id: string; name: string; value: string}>` | Fired when the state has changed: checked/unchecked \`RadioChangePayload\`                       |                |
| `selectNext`     | `CustomEvent<string>`                                    | (\*\*Internal use only\*\*) Fired when next radio element should be selected \`RadioSelect\`     |                |
| `selectPrevious` | `CustomEvent<string>`                                    | (\*\*Internal use only\*\*) Fired when previous radio element should be selected \`RadioSelect\` |                |

#### Attributes

| Name         | Field     | Inherited From |
| ------------ | --------- | -------------- |
| `checked`    | checked   |                |
| `disabled`   | disabled  |                |
| `id`         | id        |                |
| `name`       | name      |                |
| `value`      | value     |                |
| `aria-label` | ariaLabel |                |
| `tabindex`   | tabIndex  |                |

#### Slots

| Name          | Description                        |
| ------------- | ---------------------------------- |
| `default`     | Content placed in the label.       |
| `description` | Content placed in the description. |

<details><summary>Private API</summary>

#### Fields

| Name             | Privacy   | Type               | Default | Description | Inherited From |
| ---------------- | --------- | ------------------ | ------- | ----------- | -------------- |
| `formElement`    | protected | `HTMLInputElement` |         |             |                |
| `_handleKeydown` | private   |                    |         |             |                |

#### Methods

| Name             | Privacy   | Description | Parameters | Return    | Inherited From |
| ---------------- | --------- | ----------- | ---------- | --------- | -------------- |
| `defaultValue`   | protected |             |            | `string`  |                |
| `defaultChecked` | protected |             |            | `boolean` |                |
| `_handleClick`   | private   |             | `e: Event` |           |                |

</details>

<hr/>

### Exports

| Kind                        | Name        | Declaration | Module           | Package |
| --------------------------- | ----------- | ----------- | ---------------- | ------- |
| `js`                        | `Radio`     | Radio       | src/hds-radio.ts |         |
| `custom-element-definition` | `hds-radio` | Radio       | src/hds-radio.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name                      | Declaration             | Module               | Package |
| ---- | ------------------------- | ----------------------- | -------------------- | ------- |
| `js` | `RadioSize`               | RadioSize               | ./hds-radio-group.js |         |
| `js` | `RadioGroup`              | RadioGroup              | ./hds-radio-group.js |         |
| `js` | `RadioGroupChangePayload` | RadioGroupChangePayload | ./hds-radio-group.js |         |
| `js` | `Radio`                   | Radio                   | ./hds-radio.js       |         |
| `js` | `RadioChangePayload`      | RadioChangePayload      | ./hds-radio.js       |         |
| `js` | `RadioSelectPayload`      | RadioSelectPayload      | ./hds-radio.js       |         |

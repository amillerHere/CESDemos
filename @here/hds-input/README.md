## `src/hds-input.ts`:

### class: `Input`, `hds-input`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name                | Privacy | Type      | Default                                                   | Description | Inherited From |
| ------------------- | ------- | --------- | --------------------------------------------------------- | ----------- | -------------- |
| `idCounter`         |         | `number`  | `0`                                                       |             |                |
| `shadowRootOptions` |         | `object`  | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |
| `formAssociated`    |         | `boolean` | `true`                                                    |             |                |

#### Fields

| Name                 | Privacy | Type                 | Default     | Description                                                                                                                                                                                          | Inherited From |
| -------------------- | ------- | -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `value`              |         | `any`                | `''`        |                                                                                                                                                                                                      |                |
| `type`               |         | `InputType`          | `'text'`    | 'text' \| 'search' \| 'tel' \| 'url' \| 'email' \| 'password' \| 'number';                                                                                                                           |                |
| `id`                 |         | `string`             | `''`        |                                                                                                                                                                                                      |                |
| `name`               |         |                      |             |                                                                                                                                                                                                      |                |
| `placeholder`        |         |                      |             |                                                                                                                                                                                                      |                |
| `label`              |         |                      |             |                                                                                                                                                                                                      |                |
| `secondaryLabel`     |         |                      |             |                                                                                                                                                                                                      |                |
| `size`               |         | `InputSize`          | `'medium'`  | 'extra-small' \| 'small' \| 'medium'                                                                                                                                                                 |                |
| `icon`               |         |                      |             |                                                                                                                                                                                                      |                |
| `pattern`            |         |                      |             |                                                                                                                                                                                                      |                |
| `iconCategory`       |         | `IconCategory`       | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |
| `disabled`           |         | `boolean`            | `false`     |                                                                                                                                                                                                      |                |
| `readonly`           |         | `boolean`            | `false`     |                                                                                                                                                                                                      |                |
| `required`           |         | `boolean`            | `false`     |                                                                                                                                                                                                      |                |
| `minlength`          |         | `number`             | `-1`        |                                                                                                                                                                                                      |                |
| `maxlength`          |         | `number`             | `-1`        |                                                                                                                                                                                                      |                |
| `min`                |         |                      |             |                                                                                                                                                                                                      |                |
| `max`                |         |                      |             |                                                                                                                                                                                                      |                |
| `step`               |         | `number`             | `1`         |                                                                                                                                                                                                      |                |
| `charCounter`        |         | `boolean`            | `false`     |                                                                                                                                                                                                      |                |
| `error`              |         | `boolean`            | `false`     |                                                                                                                                                                                                      |                |
| `errorText`          |         |                      |             |                                                                                                                                                                                                      |                |
| `ariaLabelledby`     |         |                      |             |                                                                                                                                                                                                      |                |
| `ariaLabel`          |         | `string`             | `''`        |                                                                                                                                                                                                      |                |
| `passwordVisibility` |         | `PasswordVisibility` | `'masked'`  | 'disabled' \| 'text' \| 'masked'                                                                                                                                                                     |                |
| `inputElement`       |         | `HTMLInputElement`   |             |                                                                                                                                                                                                      |                |

#### Methods

| Name                | Privacy | Description | Parameters                                                                      | Return | Inherited From |
| ------------------- | ------- | ----------- | ------------------------------------------------------------------------------- | ------ | -------------- |
| `clear`             |         |             |                                                                                 |        |                |
| `focus`             |         |             |                                                                                 |        |                |
| `blur`              |         |             |                                                                                 |        |                |
| `togglePassword`    |         |             |                                                                                 | `void` |                |
| `stepUp`            |         |             | `n: number`                                                                     |        |                |
| `stepDown`          |         |             | `n: number`                                                                     |        |                |
| `setSelectionRange` |         |             | `start: number, end: number, direction: 'forward' \| 'backward' \| 'none'`      |        |                |
| `setRangeText`      |         |             | `replacement: string, start: number, end: number, selectionMode: SelectionMode` |        |                |
| `checkValidity`     |         |             |                                                                                 |        |                |
| `reportValidity`    |         |             |                                                                                 |        |                |
| `select`            |         |             |                                                                                 |        |                |
| `setCustomValidity` |         |             | `error: string`                                                                 |        |                |

#### Events

| Name      | Type                                     | Description                                                                                     | Inherited From |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| `change`  | `CustomEvent<{value: number \| string}>` | Fired when an alteration to the element's value is committed by the user \`InputChangePayload\` |                |
| `focus`   | `CustomEvent<Input>`                     | Fired when the element has focus                                                                |                |
| `blur`    | `CustomEvent<Input>`                     | Fired when the element loses focus                                                              |                |
|           | `KeyboardEvent`                          |                                                                                                 |                |
| `input`   | `CustomEvent<{value: number \| string}>` | Fired when the value of the element has changed \`InputInputPayload\`                           |                |
| `keydown` | `KeyboardEvent`                          | Fired when a key is pressed                                                                     |                |
| `keyup`   | `KeyboardEvent`                          | Fired when a key is released                                                                    |                |

#### Attributes

| Name                  | Field              | Inherited From |
| --------------------- | ------------------ | -------------- |
| `value`               | value              |                |
| `type`                | type               |                |
| `id`                  | id                 |                |
| `name`                | name               |                |
| `placeholder`         | placeholder        |                |
| `label`               | label              |                |
| `secondary-label`     | secondaryLabel     |                |
| `size`                | size               |                |
| `icon`                | icon               |                |
| `pattern`             | pattern            |                |
| `icon-category`       | iconCategory       |                |
| `disabled`            | disabled           |                |
| `readonly`            | readonly           |                |
| `required`            | required           |                |
| `minlength`           | minlength          |                |
| `maxlength`           | maxlength          |                |
| `min`                 | min                |                |
| `max`                 | max                |                |
| `step`                | step               |                |
| `char-counter`        | charCounter        |                |
| `error`               | error              |                |
| `error-text`          | errorText          |                |
| `aria-labelledby`     | ariaLabelledby     |                |
| `aria-label`          | ariaLabel          |                |
| `password-visibility` | passwordVisibility |                |

<details><summary>Private API</summary>

#### Fields

| Name                 | Privacy   | Type                     | Default | Description                                                                | Inherited From |
| -------------------- | --------- | ------------------------ | ------- | -------------------------------------------------------------------------- | -------------- |
| `isTabbable`         | protected | `boolean \| undefined`   |         |                                                                            |                |
| `labelId`            | private   | `string \| undefined`    |         |                                                                            |                |
| `initialType`        | private   | `InputType \| undefined` |         | 'text' \| 'search' \| 'tel' \| 'url' \| 'email' \| 'password' \| 'number'; |                |
| `charCounterVisible` | protected | `boolean`                |         |                                                                            |                |
| `errorTextVisible`   | protected | `boolean`                |         |                                                                            |                |

#### Methods

| Name                          | Privacy   | Description | Parameters           | Return    | Inherited From |
| ----------------------------- | --------- | ----------- | -------------------- | --------- | -------------- |
| `_nativeFocus`                | private   |             | `e: Event`           |           |                |
| `_nativeBlur`                 | private   |             | `e: Event`           |           |                |
| `getAriaLabelledBy`           | protected |             |                      |           |                |
| `renderInput`                 | protected |             |                      |           |                |
| `renderCharCounter`           | protected |             |                      |           |                |
| `renderLabel`                 | protected |             |                      |           |                |
| `renderIcon`                  | protected |             |                      |           |                |
| `renderHelperText`            | protected |             |                      |           |                |
| `handleUp`                    | private   |             | `e: Event`           |           |                |
| `handleDown`                  | private   |             | `e: Event`           |           |                |
| `keyPress`                    | private   |             | `evt: KeyboardEvent` |           |                |
| `setDefaultValues`            | private   |             |                      |           |                |
| `input`                       | private   |             | `e: Event`           |           |                |
| `changeByStep`                | private   |             | `step`               |           |                |
| `change`                      | private   |             | `e: Event`           |           |                |
| `isPasswordVisibilityEnabled` | private   |             |                      | `boolean` |                |
| `renderIconControls`          | private   |             |                      |           |                |

</details>

<hr/>

### Exports

| Kind                        | Name        | Declaration | Module           | Package |
| --------------------------- | ----------- | ----------- | ---------------- | ------- |
| `js`                        | `Input`     | Input       | src/hds-input.ts |         |
| `custom-element-definition` | `hds-input` | Input       | src/hds-input.ts |         |

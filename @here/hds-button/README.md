## `src/hds-button.ts`:

### class: `Button`, `hds-button`

#### Superclass

| Name          | Module | Package        |
| ------------- | ------ | -------------- |
| `BaseElement` |        | @here/hds-base |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name                | Privacy | Type                | Default     | Description                                                                                                                                                                                                                | Inherited From |
| ------------------- | ------- | ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `variant`           |         | `ButtonVariant`     | `'primary'` | 'primary' \| 'secondary' \| 'subtle' \| 'success' \| 'warning' \| 'danger' \| 'link' \| 'danger-quiet' \| 'success-quiet' \| 'warning-quiet' \| 'subtle-quiet' \| 'floating' \| 'on-color-primary' \| 'on-color-secondary' |                |
| `size`              |         | `ButtonSize`        | `'medium'`  | 'extra-small' \| 'small' \| 'medium' \| 'large'                                                                                                                                                                            |                |
| `disabled`          |         | `boolean`           | `false`     |                                                                                                                                                                                                                            |                |
| `width`             |         |                     |             |                                                                                                                                                                                                                            |                |
| `icon`              |         |                     |             |                                                                                                                                                                                                                            |                |
| `iconStyle`         |         | `IconStyle`         | `'solid'`   | 'solid' \| 'outline'                                                                                                                                                                                                       |                |
| `iconCategory`      |         | `IconCategory`      | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather'                       |                |
| `iconRight`         |         | `string`            | `''`        |                                                                                                                                                                                                                            |                |
| `iconRightCategory` |         | `IconCategory`      | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather'                       |                |
| `iconRightStyle`    |         | `IconStyle`         | `'solid'`   | 'solid' \| 'outline'                                                                                                                                                                                                       |                |
| `ariaLabel`         |         |                     |             |                                                                                                                                                                                                                            |                |
| `loading`           |         | `boolean`           | `false`     |                                                                                                                                                                                                                            |                |
| `type`              |         | `ButtonType`        | `'button'`  | 'button' \| 'submit' \| 'reset'                                                                                                                                                                                            |                |
| `buttonElement`     |         | `HTMLButtonElement` |             |                                                                                                                                                                                                                            |                |
| `labelSlot`         |         | `HTMLSlotElement`   |             |                                                                                                                                                                                                                            |                |
| `listLabelItems`    |         | `Array<Node>`       |             |                                                                                                                                                                                                                            |                |

#### Methods

| Name    | Privacy | Description | Parameters | Return | Inherited From |
| ------- | ------- | ----------- | ---------- | ------ | -------------- |
| `focus` |         |             |            |        |                |
| `blur`  |         |             |            |        |                |
| `click` |         |             |            |        |                |

#### Events

| Name    | Type         | Description | Inherited From |
| ------- | ------------ | ----------- | -------------- |
| `click` | `MouseEvent` |             |                |

#### Attributes

| Name                  | Field             | Inherited From |
| --------------------- | ----------------- | -------------- |
| `variant`             | variant           |                |
| `size`                | size              |                |
| `disabled`            | disabled          |                |
| `width`               | width             |                |
| `icon`                | icon              |                |
| `icon-style`          | iconStyle         |                |
| `icon-category`       | iconCategory      |                |
| `icon-right`          | iconRight         |                |
| `icon-right-category` | iconRightCategory |                |
| `icon-right-style`    | iconRightStyle    |                |
| `aria-label`          | ariaLabel         |                |
| `loading`             | loading           |                |
| `type`                | type              |                |

#### Slots

| Name      | Description          |
| --------- | -------------------- |
| `default` | Label for the button |

<details><summary>Private API</summary>

#### Fields

| Name         | Privacy   | Type      | Default | Description | Inherited From |
| ------------ | --------- | --------- | ------- | ----------- | -------------- |
| `iconOnly`   | protected | `boolean` | `false` |             |                |
| `isTabbable` | protected | `boolean` | `true`  |             |                |

#### Methods

| Name               | Privacy | Description | Parameters              | Return | Inherited From |
| ------------------ | ------- | ----------- | ----------------------- | ------ | -------------- |
| `renderIcon`       | private |             | `icon, category, style` |        |                |
| `renderSpinner`    | private |             |                         |        |                |
| `isButtonDisabled` | private |             |                         |        |                |
| `getAriaLabel`     | private |             |                         |        |                |
| `handleAction`     | private |             | `e`                     | `void` |                |

</details>

<hr/>

### Exports

| Kind                        | Name         | Declaration | Module            | Package |
| --------------------------- | ------------ | ----------- | ----------------- | ------- |
| `js`                        | `Button`     | Button      | src/hds-button.ts |         |
| `custom-element-definition` | `hds-button` | Button      | src/hds-button.ts |         |

## `src/hds-notification.ts`:

### class: `Notification`, `hds-notification`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name                | Privacy | Type                  | Default         | Description                                                                                                                                                                                          | Inherited From |
| ------------------- | ------- | --------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `open`              |         | `boolean`             | `false`         |                                                                                                                                                                                                      |                |
| `notificationTitle` |         | `string`              | `''`            |                                                                                                                                                                                                      |                |
| `variant`           |         | `NotificationVariant` | `'information'` | 'information' \| 'confirmation' \| 'warning' \| 'error'                                                                                                                                              |                |
| `duration`          |         | `number`              | `3`             |                                                                                                                                                                                                      |                |
| `icon`              |         | `string \| undefined` | `undefined`     |                                                                                                                                                                                                      |                |
| `iconCategory`      |         | `IconCategory`        | `'core-ui'`     | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |
| `iconStyle`         |         | `IconStyle`           | `'outline'`     | 'solid' \| 'outline'                                                                                                                                                                                 |                |
| `keepNode`          |         | `boolean`             | `false`         |                                                                                                                                                                                                      |                |
| `inline`            |         | `boolean`             | `false`         |                                                                                                                                                                                                      |                |
| `hideClose`         |         | `boolean`             | `false`         |                                                                                                                                                                                                      |                |
| `actionText`        |         |                       |                 |                                                                                                                                                                                                      |                |
| `closeAriaLabel`    |         | `string`              | `'Close'`       |                                                                                                                                                                                                      |                |

#### Methods

| Name    | Privacy | Description | Parameters | Return | Inherited From |
| ------- | ------- | ----------- | ---------- | ------ | -------------- |
| `close` |         |             |            |        |                |

#### Events

| Name     | Type                           | Description                                                                               | Inherited From |
| -------- | ------------------------------ | ----------------------------------------------------------------------------------------- | -------------- |
| `change` | `CustomEvent<{open: boolean}>` | Fired when the notification changes the state: open / close \`NotificationChangePayload\` |                |
| `action` | `CustomEvent`                  | Fired when the action button has been clicked                                             |                |

#### Attributes

| Name                 | Field             | Inherited From |
| -------------------- | ----------------- | -------------- |
| `open`               | open              |                |
| `notification-title` | notificationTitle |                |
| `variant`            | variant           |                |
| `duration`           | duration          |                |
| `icon`               | icon              |                |
| `icon-category`      | iconCategory      |                |
| `icon-style`         | iconStyle         |                |
| `keep-node`          | keepNode          |                |
| `inline`             | inline            |                |
| `hide-close`         | hideClose         |                |
| `action-text`        | actionText        |                |
| `close-aria-label`   | closeAriaLabel    |                |

#### Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| `default` | Main content for the notification |

<details><summary>Private API</summary>

#### Fields

| Name         | Privacy | Type                     | Default | Description | Inherited From |
| ------------ | ------- | ------------------------ | ------- | ----------- | -------------- |
| `_timeoutId` | private | `NodeJS.Timeout \| null` | `null`  |             |                |

#### Methods

| Name                 | Privacy | Description | Parameters | Return | Inherited From |
| -------------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `clearTimeout`       | private |             |            |        |                |
| `getIconName`        | private |             |            |        |                |
| `_handleClickAction` | private |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name               | Declaration  | Module                  | Package |
| --------------------------- | ------------------ | ------------ | ----------------------- | ------- |
| `js`                        | `Notification`     | Notification | src/hds-notification.ts |         |
| `custom-element-definition` | `hds-notification` | Notification | src/hds-notification.ts |         |

## `src/hds-toast-container.ts`:

### class: `ToastContainer`, `hds-toast-container`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name       | Privacy | Type                   | Default          | Description                                                  | Inherited From |
| ---------- | ------- | ---------------------- | ---------------- | ------------------------------------------------------------ | -------------- |
| `position` |         | `NotificationPosition` | `'bottom-right'` | 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' |                |

#### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `position` | position |                |

<hr/>

### Functions

| Name    | Description | Parameters                                                                                                                                                                                                                            | Return |
| ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `toast` |             | `{
  title = '',
  body = '',
  bodyTemplateElementId = '',
  variant = 'information',
  duration = 3,
  position = 'bottom-right',
  icon,
  iconStyle = 'solid',
  iconCategory = 'core-ui',
  onChange,
  onAction,
}: ToastProps` |        |

<hr/>

### Exports

| Kind                        | Name                  | Declaration    | Module                     | Package |
| --------------------------- | --------------------- | -------------- | -------------------------- | ------- |
| `js`                        | `ToastContainer`      | ToastContainer | src/hds-toast-container.ts |         |
| `custom-element-definition` | `hds-toast-container` | ToastContainer | src/hds-toast-container.ts |         |
| `js`                        | `toast`               | toast          | src/hds-toast-container.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name | Declaration | Module | Package                  |
| ---- | ---- | ----------- | ------ | ------------------------ |
| `js` | `*`  | \*          |        | ./hds-toast-container.js |
| `js` | `*`  | \*          |        | ./hds-notification.js    |

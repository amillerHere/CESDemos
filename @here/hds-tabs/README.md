## `src/hds-tab-bar.ts`:

### class: `TabBar`, `hds-tab-bar`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name               | Privacy | Type      | Default     | Description | Inherited From |
| ------------------ | ------- | --------- | ----------- | ----------- | -------------- |
| `selectFirstTab`   |         | `boolean` | `false`     |             |                |
| `ariaLabel`        |         |           |             |             |                |
| `ariaRole`         |         | `string`  | `'tablist'` |             |                |
| `previousTabIndex` |         | `string`  | `''`        |             |                |

#### Events

| Name     | Type                  | Description                                                     | Inherited From |
| -------- | --------------------- | --------------------------------------------------------------- | -------------- |
| `select` | `CustomEvent<number>` | Fired when a tab item has been selected \`TabBarSelectPayload\` |                |

#### Attributes

| Name               | Field          | Inherited From |
| ------------------ | -------------- | -------------- |
| `select-first-tab` | selectFirstTab |                |
| `aria-label`       | ariaLabel      |                |
| `aria-role`        | ariaRole       |                |

#### Slots

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| `default` | Content for the list of \`hds-tab\` elements |

<details><summary>Private API</summary>

#### Fields

| Name          | Privacy   | Type          | Default | Description | Inherited From |
| ------------- | --------- | ------------- | ------- | ----------- | -------------- |
| `tabsSlot`    | protected | `HTMLElement` |         |             |                |
| `tabElements` | private   | `Tab[]`       | `[]`    |             |                |

#### Methods

| Name                        | Privacy | Description | Parameters                 | Return | Inherited From |
| --------------------------- | ------- | ----------- | -------------------------- | ------ | -------------- |
| `_onSlotChange`             | private |             |                            |        |                |
| `_setDefaultSelectedTab`    | private |             |                            |        |                |
| `_activateFirstSelectedTab` | private |             |                            |        |                |
| `_handleSelectedTab`        | private |             | `evt: CustomEvent<string>` |        |                |
| `_handleClickShowMenu`      | private |             | `newSelectedTab: Tab`      | `void` |                |
| `_getTabIndex`              | private |             | `tabId: string`            |        |                |
| `_getSelectedTab`           | private |             |                            |        |                |
| `_clearActiveTab`           | private |             |                            |        |                |
| `_setSelectedTab`           | private |             | `tabId: string`            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name          | Declaration | Module             | Package |
| --------------------------- | ------------- | ----------- | ------------------ | ------- |
| `js`                        | `TabBar`      | TabBar      | src/hds-tab-bar.ts |         |
| `custom-element-definition` | `hds-tab-bar` | TabBar      | src/hds-tab-bar.ts |         |

## `src/hds-tab-panel-container.ts`:

### class: `TabPanelContainer`, `hds-tab-panel-container`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name            | Privacy | Type     | Default | Description | Inherited From |
| --------------- | ------- | -------- | ------- | ----------- | -------------- |
| `tabBarId`      |         | `string` | `''`    |             |                |
| `selectedPanel` |         | `string` | `''`    |             |                |

#### Attributes

| Name             | Field         | Inherited From |
| ---------------- | ------------- | -------------- |
| `tab-bar-id`     | tabBarId      |                |
| `selected-panel` | selectedPanel |                |

#### Slots

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| `default` | Container for the \`hds-tab-panel\` elements |

<details><summary>Private API</summary>

#### Fields

| Name            | Privacy   | Type              | Default | Description | Inherited From |
| --------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `panelSlots`    | protected | `HTMLSlotElement` |         |             |                |
| `panelElements` | private   | `TabPanel[]`      | `[]`    |             |                |

#### Methods

| Name                | Privacy | Description | Parameters        | Return | Inherited From |
| ------------------- | ------- | ----------- | ----------------- | ------ | -------------- |
| `_onSlotChange`     | private |             |                   |        |                |
| `_setSelectedPanel` | private |             | `panelId: string` |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                      | Declaration       | Module                         | Package |
| --------------------------- | ------------------------- | ----------------- | ------------------------------ | ------- |
| `js`                        | `TabPanelContainer`       | TabPanelContainer | src/hds-tab-panel-container.ts |         |
| `custom-element-definition` | `hds-tab-panel-container` | TabPanelContainer | src/hds-tab-panel-container.ts |         |

## `src/hds-tab-panel.ts`:

### class: `TabPanel`, `hds-tab-panel`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name             | Privacy | Type      | Default | Description | Inherited From |
| ---------------- | ------- | --------- | ------- | ----------- | -------------- |
| `show`           |         | `boolean` | `false` |             |                |
| `ariaLabelledby` |         | `string`  | `''`    |             |                |

#### Attributes

| Name              | Field          | Inherited From |
| ----------------- | -------------- | -------------- |
| `aria-labelledby` | ariaLabelledby |                |

#### Slots

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | Main content related to the corresponding tab |

<hr/>

### Exports

| Kind                        | Name            | Declaration | Module               | Package |
| --------------------------- | --------------- | ----------- | -------------------- | ------- |
| `js`                        | `TabPanel`      | TabPanel    | src/hds-tab-panel.ts |         |
| `custom-element-definition` | `hds-tab-panel` | TabPanel    | src/hds-tab-panel.ts |         |

## `src/hds-tab.ts`:

### class: `Tab`, `hds-tab`

#### Superclass

| Name          | Module | Package        |
| ------------- | ------ | -------------- |
| `BaseElement` |        | @here/hds-base |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name               | Privacy | Type           | Default     | Description                                                                                                                                                                                          | Inherited From |
| ------------------ | ------- | -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `isTabbable`       |         | `boolean`      | `true`      |                                                                                                                                                                                                      |                |
| `icon`             |         | `string`       | `''`        |                                                                                                                                                                                                      |                |
| `iconCategory`     |         | `IconCategory` | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |
| `link`             |         | `boolean`      | `false`     |                                                                                                                                                                                                      |                |
| `clickAction`      |         | `boolean`      | `false`     |                                                                                                                                                                                                      |                |
| `externalLink`     |         | `boolean`      | `false`     |                                                                                                                                                                                                      |                |
| `disabled`         |         | `boolean`      | `false`     |                                                                                                                                                                                                      |                |
| `ariaControls`     |         |                |             |                                                                                                                                                                                                      |                |
| `ariaRole`         |         | `string`       | `'tab'`     |                                                                                                                                                                                                      |                |
| `tabPanelId`       |         | `string`       | `''`        |                                                                                                                                                                                                      |                |
| `selected`         |         | `boolean`      | `false`     |                                                                                                                                                                                                      |                |
| `rightSideIcon`    |         | `string`       | `''`        |                                                                                                                                                                                                      |                |
| `showMenu`         |         | `boolean`      | `false`     |                                                                                                                                                                                                      |                |
| `clickActionValue` |         | `boolean`      |             |                                                                                                                                                                                                      |                |

#### Methods

| Name                  | Privacy | Description | Parameters          | Return | Inherited From |
| --------------------- | ------- | ----------- | ------------------- | ------ | -------------- |
| `showSelectedTabMenu` |         |             | `showMenu: boolean` | `void` |                |

#### Events

| Name        | Type                  | Description                                                                                  | Inherited From |
| ----------- | --------------------- | -------------------------------------------------------------------------------------------- | -------------- |
| `tabselect` | `CustomEvent<string>` | (\*\*Internal event\*\*) Fired when item is selected, internal use only \`TabSelectPayload\` |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `icon`          | icon         |                |
| `icon-category` | iconCategory |                |
| `link`          | link         |                |
| `click-action`  | clickAction  |                |
| `external-link` | externalLink |                |
| `disabled`      | disabled     |                |
| `aria-controls` | ariaControls |                |
| `aria-role`     | ariaRole     |                |
| `tab-panel-id`  | tabPanelId   |                |
| `selected`      | selected     |                |

#### Slots

| Name      | Description           |
| --------- | --------------------- |
| `default` | Content for the label |

<details><summary>Private API</summary>

#### Fields

| Name             | Privacy   | Type              | Default | Description | Inherited From |
| ---------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `menuItemsSlot`  | protected | `HTMLSlotElement` |         |             |                |
| `defaultSlot`    | protected | `HTMLSlotElement` |         |             |                |
| `_handleKeydown` | private   |                   |         |             |                |

#### Methods

| Name               | Privacy   | Description | Parameters                               | Return    | Inherited From |
| ------------------ | --------- | ----------- | ---------------------------------------- | --------- | -------------- |
| `renderIcon`       | protected |             | `_icon: string, _category: IconCategory` |           |                |
| `hasMenuContent`   | private   |             |                                          | `boolean` |                |
| `_renderAsLink`    | private   |             | `classes: ClassInfo`                     |           |                |
| `_renderAsButton`  | private   |             | `classes: ClassInfo`                     |           |                |
| `_handleClick`     | private   |             | `e: any`                                 |           |                |
| `_handleMouseMove` | private   |             | `e: MouseEvent`                          | `void`    |                |

</details>

<hr/>

### Exports

| Kind                        | Name      | Declaration | Module         | Package |
| --------------------------- | --------- | ----------- | -------------- | ------- |
| `js`                        | `Tab`     | Tab         | src/hds-tab.ts |         |
| `custom-element-definition` | `hds-tab` | Tab         | src/hds-tab.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name                  | Declaration         | Module                       | Package |
| ---- | --------------------- | ------------------- | ---------------------------- | ------- |
| `js` | `TabBar`              | TabBar              | ./hds-tab-bar.js             |         |
| `js` | `TabBarSelectPayload` | TabBarSelectPayload | ./hds-tab-bar.js             |         |
| `js` | `Tab`                 | Tab                 | ./hds-tab.js                 |         |
| `js` | `TabSelectPayload`    | TabSelectPayload    | ./hds-tab.js                 |         |
| `js` | `TabPanelContainer`   | TabPanelContainer   | ./hds-tab-panel-container.js |         |
| `js` | `TabPanel`            | TabPanel            | ./hds-tab-panel.js           |         |

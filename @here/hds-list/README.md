## `src/hds-list-item.ts`:

### class: `ListItem`, `hds-list-item`

#### Superclass

| Name          | Module | Package        |
| ------------- | ------ | -------------- |
| `BaseElement` |        | @here/hds-base |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `itemIdCounter`     |         | `number` | `0`                                                       |             |                |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name                | Privacy | Type                  | Default     | Description                                                                                                                                                                                          | Inherited From |
| ------------------- | ------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `isTabbable`        |         | `boolean`             | `true`      |                                                                                                                                                                                                      |                |
| `disabled`          |         | `boolean`             | `false`     |                                                                                                                                                                                                      |                |
| `selected`          |         | `boolean`             | `false`     |                                                                                                                                                                                                      |                |
| `dragging`          |         | `boolean`             | `false`     |                                                                                                                                                                                                      |                |
| `icon`              |         | `string \| undefined` |             |                                                                                                                                                                                                      |                |
| `iconCategory`      |         | `IconCategory`        | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |
| `hasTooltip`        |         | `boolean`             | `false`     |                                                                                                                                                                                                      |                |
| `hasAnchor`         |         | `boolean`             | `false`     |                                                                                                                                                                                                      |                |
| `variant`           |         | `ListItemVariant`     | `'default'` | 'default' \| 'success' \| 'error'                                                                                                                                                                    |                |
| `groupVariant`      |         | `ListVariant`         | `'subtle'`  | 'subtle' \| 'subtle-divider' \| 'solid'                                                                                                                                                              |                |
| `size`              |         | `ListItemSize`        | `'small'`   | 'small' \| 'medium' \| 'large' \| 'extra-large'                                                                                                                                                      |                |
| `horizontalPadding` |         | `ListPadding`         | `'default'` | 'default' \| 'dense'                                                                                                                                                                                 |                |

#### Events

| Name     | Type                  | Description                                                                                     | Inherited From |
| -------- | --------------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| `select` | `CustomEvent<string>` | Fired when the element has been selected with the id of the list item \`ListItemSelectPayload\` |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `disabled`      | disabled     |                |
| `selected`      | selected     |                |
| `dragging`      | dragging     |                |
| `icon`          | icon         |                |
| `icon-category` | iconCategory |                |
| `variant`       | variant      |                |
| `groupVariant`  | groupVariant |                |
| `size`          | size         |                |

#### Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | Content for the item label |

<details><summary>Private API</summary>

#### Fields

| Name                  | Privacy   | Type              | Default | Description | Inherited From |
| --------------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `listItemContentSlot` | protected | `HTMLSlotElement` |         |             |                |
| `textContainer`       | protected | `HTMLElement`     |         |             |                |

#### Methods

| Name            | Privacy   | Description | Parameters | Return | Inherited From |
| --------------- | --------- | ----------- | ---------- | ------ | -------------- |
| `renderIcon`    | protected |             |            |        |                |
| `onItemClick`   | protected |             |            |        |                |
| `renderTooltip` | private   |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name            | Declaration | Module               | Package |
| --------------------------- | --------------- | ----------- | -------------------- | ------- |
| `js`                        | `ListItem`      | ListItem    | src/hds-list-item.ts |         |
| `custom-element-definition` | `hds-list-item` | ListItem    | src/hds-list-item.ts |         |

## `src/hds-list.ts`:

### class: `List`, `hds-list`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |
| `listCounter`       |         | `number` | `0`                                                       |             |                |

#### Fields

| Name                | Privacy | Type             | Default     | Description                                     | Inherited From |
| ------------------- | ------- | ---------------- | ----------- | ----------------------------------------------- | -------------- |
| `innerRole`         |         | `string \| null` | `null`      |                                                 |                |
| `innerAriaLabel`    |         | `string \| null` | `null`      |                                                 |                |
| `truncate`          |         | `boolean`        | `true`      |                                                 |                |
| `groupTitle`        |         | `string`         | `''`        |                                                 |                |
| `width`             |         |                  |             |                                                 |                |
| `variant`           |         | `ListVariant`    | `'subtle'`  | 'subtle' \| 'subtle-divider' \| 'solid'         |                |
| `size`              |         | `ListItemSize`   | `'small'`   | 'small' \| 'medium' \| 'large' \| 'extra-large' |                |
| `horizontalPadding` |         | `ListPadding`    | `'default'` | 'default' \| 'dense'                            |                |
| `selectedIndex`     |         | `number`         | `-1`        |                                                 |                |

#### Events

| Name     | Type                                       | Description                                                | Inherited From |
| -------- | ------------------------------------------ | ---------------------------------------------------------- | -------------- |
| `select` | `CustomEvent<{id: string; index: number}>` | Fired when an item has been selected \`ListSelectPayload\` |                |

#### Attributes

| Name                 | Field             | Inherited From |
| -------------------- | ----------------- | -------------- |
| `inner-role`         | innerRole         |                |
| `inner-aria-label`   | innerAriaLabel    |                |
| `truncate`           | truncate          |                |
| `group-title`        | groupTitle        |                |
| `width`              | width             |                |
| `variant`            | variant           |                |
| `size`               | size              |                |
| `horizontal-padding` | horizontalPadding |                |
| `selected-index`     | selectedIndex     |                |

#### Slots

| Name      | Description                                |
| --------- | ------------------------------------------ |
| `default` | Content for the \`hds-list-item\` elements |

<details><summary>Private API</summary>

#### Fields

| Name        | Privacy   | Type          | Default | Description | Inherited From |
| ----------- | --------- | ------------- | ------- | ----------- | -------------- |
| `itemsSlot` | protected | `HTMLElement` |         |             |                |

#### Methods

| Name               | Privacy   | Description | Parameters                              | Return | Inherited From |
| ------------------ | --------- | ----------- | --------------------------------------- | ------ | -------------- |
| `renderGroupTitle` | protected |             |                                         |        |                |
| `onKeypress`       | protected |             | `evt: KeyboardEvent`                    |        |                |
| `onSelect`         | protected |             | `e: CustomEvent<ListItemSelectPayload>` |        |                |
| `_onSlotChange`    | private   |             |                                         |        |                |
| `_getFocusedItem`  | private   |             |                                         |        |                |
| `_getItemIndex`    | private   |             | `itemId: string`                        |        |                |
| `_getItems`        | private   |             | `itemsSlot: HTMLSlotElement`            |        |                |
| `_getGroupedItems` | private   |             | `itemsSlot: HTMLSlotElement`            |        |                |
| `_getAllItems`     | private   |             |                                         |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name       | Declaration | Module          | Package |
| --------------------------- | ---------- | ----------- | --------------- | ------- |
| `js`                        | `List`     | List        | src/hds-list.ts |         |
| `custom-element-definition` | `hds-list` | List        | src/hds-list.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name                    | Declaration           | Module             | Package |
| ---- | ----------------------- | --------------------- | ------------------ | ------- |
| `js` | `List`                  | List                  | ./hds-list.js      |         |
| `js` | `ListVariant`           | ListVariant           | ./hds-list.js      |         |
| `js` | `ListPadding`           | ListPadding           | ./hds-list.js      |         |
| `js` | `ListSelectPayload`     | ListSelectPayload     | ./hds-list.js      |         |
| `js` | `ListItem`              | ListItem              | ./hds-list-item.js |         |
| `js` | `ListItemSize`          | ListItemSize          | ./hds-list-item.js |         |
| `js` | `ListItemVariant`       | ListItemVariant       | ./hds-list-item.js |         |
| `js` | `ListItemSelectPayload` | ListItemSelectPayload | ./hds-list-item.js |         |

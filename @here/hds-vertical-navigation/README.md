## `src/hds-vertical-navigation-item.ts`:

### class: `VerticalNavigationItem`, `hds-vertical-navigation-item`

#### Superclass

| Name            | Module | Package             |
| --------------- | ------ | ------------------- |
| `AccordionItem` |        | @here/hds-accordion |

#### Static Fields

| Name            | Privacy | Type     | Default | Description | Inherited From |
| --------------- | ------- | -------- | ------- | ----------- | -------------- |
| `itemIdCounter` |         | `number` | `0`     |             |                |

#### Fields

| Name         | Privacy | Type                     | Default      | Description               | Inherited From |
| ------------ | ------- | ------------------------ | ------------ | ------------------------- | -------------- |
| `hasSubList` |         | `boolean`                | `false`      |                           |                |
| `chevron`    |         | `boolean`                | `false`      |                           |                |
| `navMode`    |         | `VerticalNavigationMode` | `'expanded'` | 'collapsed' \| 'expanded' |                |
| `avatarUrl`  |         | `string`                 | `''`         |                           |                |
| `avatarName` |         | `string`                 | `''`         |                           |                |
| `iconStyle`  |         | `IconStyle`              | `'solid'`    | 'solid' \| 'outline'      |                |
| `selected`   |         | `boolean`                | `false`      |                           |                |

#### Events

| Name     | Type                                       | Description                                                               | Inherited From |
| -------- | ------------------------------------------ | ------------------------------------------------------------------------- | -------------- |
| `select` | `CustomEvent<{verticalNavItemId: string}>` | Fired when the item has been selected \`VerticalNavigationSelectPayload\` |                |

#### Attributes

| Name          | Field      | Inherited From |
| ------------- | ---------- | -------------- |
| `avatar-url`  | avatarUrl  |                |
| `avatar-name` | avatarName |                |
| `icon-style`  | iconStyle  |                |
| `selected`    | selected   |                |

#### Slots

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `default` | Content for a \`hds-vertical-navigation-sub-list\` structure |

<details><summary>Private API</summary>

#### Fields

| Name                  | Privacy   | Type                       | Default | Description | Inherited From |
| --------------------- | --------- | -------------------------- | ------- | ----------- | -------------- |
| `slotElement`         | protected | `HTMLSlotElement`          |         |             |                |
| `avatarElement`       | private   | `HTMLElement \| undefined` |         |             |                |
| `titleElement`        | private   | `HTMLElement \| undefined` |         |             |                |
| `titleContentElement` | private   | `HTMLElement \| undefined` |         |             |                |

#### Methods

| Name                      | Privacy   | Description | Parameters    | Return | Inherited From |
| ------------------------- | --------- | ----------- | ------------- | ------ | -------------- |
| `renderIcon`              | protected |             |               |        |                |
| `_setTitleNode`           | private   |             | `slotContent` |        |                |
| `_checkSubList`           | private   |             | `slotContent` |        |                |
| `_appendTitleNode`        | private   |             | `titleNode`   |        |                |
| `_setRenderingPreference` | private   |             |               |        |                |
| `_handleClick`            | private   |             | `e: Event`    |        |                |
| `_avatarTemplate`         | private   |             |               |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                           | Declaration            | Module                              | Package |
| --------------------------- | ------------------------------ | ---------------------- | ----------------------------------- | ------- |
| `js`                        | `VerticalNavigationItem`       | VerticalNavigationItem | src/hds-vertical-navigation-item.ts |         |
| `custom-element-definition` | `hds-vertical-navigation-item` | VerticalNavigationItem | src/hds-vertical-navigation-item.ts |         |

## `src/hds-vertical-navigation-sub-list-item.ts`:

### class: `VerticalNavigationSubListItem`, `hds-vertical-navigation-sub-list-item`

#### Superclass

| Name       | Module | Package        |
| ---------- | ------ | -------------- |
| `ListItem` |        | @here/hds-list |

#### Fields

| Name             | Privacy | Type          | Default | Description | Inherited From |
| ---------------- | ------- | ------------- | ------- | ----------- | -------------- |
| `hasSubList`     |         | `boolean`     | `false` |             |                |
| `subListElement` |         | `HTMLElement` |         |             |                |

#### Events

| Name                | Type                                           | Description                                                                                                       | Inherited From |
| ------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------- |
| `subListItemSelect` | `CustomEvent<{verticalSubListItemId: string}>` | (\*\*Internal event\*\*) Fired when item has been selected, internal use only \`VerticalNavigationSelectPayload\` |                |

#### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| `default` | Content for the item's label |

<details><summary>Private API</summary>

#### Fields

| Name          | Privacy   | Type              | Default | Description | Inherited From |
| ------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `slotElement` | protected | `HTMLSlotElement` |         |             |                |

#### Methods

| Name             | Privacy | Description | Parameters    | Return | Inherited From |
| ---------------- | ------- | ----------- | ------------- | ------ | -------------- |
| `_appendSubList` | private |             | `slotContent` |        |                |
| `_handleClick`   | private |             | `e: Event`    |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                                    | Declaration                   | Module                                       | Package |
| --------------------------- | --------------------------------------- | ----------------------------- | -------------------------------------------- | ------- |
| `js`                        | `VerticalNavigationSubListItem`         | VerticalNavigationSubListItem | src/hds-vertical-navigation-sub-list-item.ts |         |
| `custom-element-definition` | `hds-vertical-navigation-sub-list-item` | VerticalNavigationSubListItem | src/hds-vertical-navigation-sub-list-item.ts |         |

## `src/hds-vertical-navigation-sub-list.ts`:

### class: `VerticalNavigationSubList`, `hds-vertical-navigation-sub-list`

#### Superclass

| Name   | Module | Package        |
| ------ | ------ | -------------- |
| `List` |        | @here/hds-list |

#### Fields

| Name            | Privacy | Type      | Default | Description | Inherited From |
| --------------- | ------- | --------- | ------- | ----------- | -------------- |
| `isMainSubList` |         | `boolean` | `false` |             |                |

#### Slots

| Name      | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| `default` | Content for the list of \`hds-vertical-navigation-sub-list-item\` elements |

<details><summary>Private API</summary>

#### Fields

| Name          | Privacy   | Type              | Default | Description | Inherited From |
| ------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `slotElement` | protected | `HTMLSlotElement` |         |             |                |

</details>

<hr/>

### Exports

| Kind                        | Name                               | Declaration               | Module                                  | Package |
| --------------------------- | ---------------------------------- | ------------------------- | --------------------------------------- | ------- |
| `js`                        | `VerticalNavigationSubList`        | VerticalNavigationSubList | src/hds-vertical-navigation-sub-list.ts |         |
| `custom-element-definition` | `hds-vertical-navigation-sub-list` | VerticalNavigationSubList | src/hds-vertical-navigation-sub-list.ts |         |

## `src/hds-vertical-navigation.ts`:

### class: `VerticalNavigation`, `hds-vertical-navigation`

#### Superclass

| Name        | Module | Package             |
| ----------- | ------ | ------------------- |
| `Accordion` |        | @here/hds-accordion |

#### Fields

| Name      | Privacy | Type                     | Default      | Description               | Inherited From |
| --------- | ------- | ------------------------ | ------------ | ------------------------- | -------------- |
| `chevron` |         | `boolean`                | `false`      |                           |                |
| `navMode` |         | `VerticalNavigationMode` | `'expanded'` | 'collapsed' \| 'expanded' |                |

#### Events

| Name     | Type                                                                                                                                           | Description                                                                                  | Inherited From |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------- |
| `select` | `CustomEvent<{verticalNavItemId?: string; verticalSubListItemId?: string; verticalNavItemIndex?: number; verticalSubListItemIndex?: number;}>` | Fired when one of the navigation items has been selected \`VerticalNavigationSelectPayload\` |                |

#### Attributes

| Name       | Field   | Inherited From |
| ---------- | ------- | -------------- |
| `chevron`  | chevron |                |
| `nav-mode` | navMode |                |

#### Slots

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `default` | Content for \`hds-vertical-navigation-item\` elements structure |

<details><summary>Private API</summary>

#### Methods

| Name              | Privacy | Description | Parameters                                          | Return | Inherited From |
| ----------------- | ------- | ----------- | --------------------------------------------------- | ------ | -------------- |
| `_updateNavItems` | private |             |                                                     |        |                |
| `_getNavItems`    | private |             |                                                     |        |                |
| `_handleSelected` | private |             | `evt: CustomEvent<VerticalNavigationSelectPayload>` |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                      | Declaration        | Module                         | Package |
| --------------------------- | ------------------------- | ------------------ | ------------------------------ | ------- |
| `js`                        | `VerticalNavigation`      | VerticalNavigation | src/hds-vertical-navigation.ts |         |
| `custom-element-definition` | `hds-vertical-navigation` | VerticalNavigation | src/hds-vertical-navigation.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name                              | Declaration                     | Module                                     | Package |
| ---- | --------------------------------- | ------------------------------- | ------------------------------------------ | ------- |
| `js` | `VerticalNavigation`              | VerticalNavigation              | ./hds-vertical-navigation.js               |         |
| `js` | `VerticalNavigationMode`          | VerticalNavigationMode          | ./hds-vertical-navigation.js               |         |
| `js` | `VerticalNavigationSelectPayload` | VerticalNavigationSelectPayload | ./hds-vertical-navigation.js               |         |
| `js` | `VerticalNavigationItem`          | VerticalNavigationItem          | ./hds-vertical-navigation-item.js          |         |
| `js` | `VerticalNavigationSubList`       | VerticalNavigationSubList       | ./hds-vertical-navigation-sub-list.js      |         |
| `js` | `VerticalNavigationSubListItem`   | VerticalNavigationSubListItem   | ./hds-vertical-navigation-sub-list-item.js |         |

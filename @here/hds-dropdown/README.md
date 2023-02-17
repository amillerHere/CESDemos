## `src/hds-dropdown.ts`:

### class: `Dropdown`, `hds-dropdown`

#### Superclass

| Name          | Module | Package        |
| ------------- | ------ | -------------- |
| `BaseElement` |        | @here/hds-base |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name          | Privacy | Type              | Default    | Description                    | Inherited From |
| ------------- | ------- | ----------------- | ---------- | ------------------------------ | -------------- |
| `isTabbable`  |         | `boolean`         | `true`     |                                |                |
| `open`        |         | `boolean`         | `false`    |                                |                |
| `variant`     |         | `DropdownVariant` | `'solid'`  | 'solid' \| 'subtle'            |                |
| `size`        |         | `DropdownSize`    | `'medium'` | 'small' \| 'medium' \| 'large' |                |
| `readOnly`    |         | `boolean`         | `false`    |                                |                |
| `disabled`    |         | `boolean`         | `false`    |                                |                |
| `rightAlign`  |         | `boolean`         | `false`    |                                |                |
| `arrow`       |         | `boolean`         | `true`     |                                |                |
| `toggleWidth` |         | `string`          | `''`       |                                |                |

#### Events

| Name     | Type                                       | Description                                                                            | Inherited From |
| -------- | ------------------------------------------ | -------------------------------------------------------------------------------------- | -------------- |
| `change` | `CustomEvent<{open: boolean}>`             | Fired when the dropdown has been changed: expanded/collapsed \`DropdownChangePayload\` |                |
| `select` | `CustomEvent<{id: string; index: number}>` | Fired when an item from the menu has been selected \`ListSelectPayload\`               |                |

#### Attributes

| Name           | Field       | Inherited From |
| -------------- | ----------- | -------------- |
| `open`         | open        |                |
| `variant`      | variant     |                |
| `size`         | size        |                |
| `read-only`    | readOnly    |                |
| `disabled`     | disabled    |                |
| `right-align`  | rightAlign  |                |
| `arrow`        | arrow       |                |
| `toggle-width` | toggleWidth |                |

#### Slots

| Name      | Description                                             |
| --------- | ------------------------------------------------------- |
| `trigger` | Element to be the trigger for the dropdown menu         |
| `toggle`  | Label for the toggle element                            |
| `menu`    | Element \`hds-list\` for the items of the dropdown menu |

<details><summary>Private API</summary>

#### Fields

| Name       | Privacy   | Type          | Default | Description | Inherited From |
| ---------- | --------- | ------------- | ------- | ----------- | -------------- |
| `menuSlot` | protected | `HTMLElement` |         |             |                |

#### Methods

| Name                    | Privacy | Description | Parameters                          | Return | Inherited From |
| ----------------------- | ------- | ----------- | ----------------------------------- | ------ | -------------- |
| `_handleKeydown`        | private |             | `e: KeyboardEvent`                  |        |                |
| `_handleClose`          | private |             |                                     |        |                |
| `_handleClick`          | private |             | `event: Event`                      |        |                |
| `_removeEventListeners` | private |             |                                     |        |                |
| `_addEventListeners`    | private |             |                                     |        |                |
| `_getOffsetTop`         | private |             | `elem`                              |        |                |
| `_handleOnSelect`       | private |             | `e: CustomEvent<ListSelectPayload>` |        |                |
| `_handleToggleClick`    | private |             |                                     |        |                |
| `_handleClickInSide`    | private |             | `evt`                               |        |                |
| `_getMenu`              | private |             |                                     |        |                |
| `_handleScroll`         | private |             |                                     |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name           | Declaration | Module              | Package |
| --------------------------- | -------------- | ----------- | ------------------- | ------- |
| `js`                        | `Dropdown`     | Dropdown    | src/hds-dropdown.ts |         |
| `custom-element-definition` | `hds-dropdown` | Dropdown    | src/hds-dropdown.ts |         |

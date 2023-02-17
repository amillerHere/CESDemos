## `src/hds-accordion-item.ts`:

### class: `AccordionItem`, `hds-accordion-item`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `itemIdCounter`     |         | `number` | `0`                                                       |             |                |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name                  | Privacy | Type                     | Default     | Description                                                                                                                                                                                          | Inherited From |
| --------------------- | ------- | ------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `variant`             |         | `AccordionVariant`       | `'default'` | 'default' \| 'solid'                                                                                                                                                                                 |                |
| `arrowPosition`       |         | `AccordionArrowPosition` | `'end'`     | 'start' \| 'end'                                                                                                                                                                                     |                |
| `disabled`            |         | `boolean`                | `false`     |                                                                                                                                                                                                      |                |
| `isAccordionDisabled` |         | `boolean`                | `false`     |                                                                                                                                                                                                      |                |
| `headline`            |         | `string`                 | `''`        |                                                                                                                                                                                                      |                |
| `expanded`            |         | `boolean`                | `false`     |                                                                                                                                                                                                      |                |
| `icon`                |         | `string \| undefined`    |             |                                                                                                                                                                                                      |                |
| `iconCategory`        |         | `IconCategory`           | `'core-ui'` | 'core-ui' \| 'data' \| 'devices-sensors' \| 'discovery-sharing' \| 'map-view' \| 'misc' \| 'navigation-image' \| 'poi' \| 'social' \| 'stats' \| 'tools' \| 'travel-transport-tracking' \| 'weather' |                |
| `isLastChild`         |         | `boolean`                | `false`     |                                                                                                                                                                                                      |                |
| `isFirstChild`        |         | `boolean`                | `false`     |                                                                                                                                                                                                      |                |
| `index`               |         | `number`                 | `-1`        |                                                                                                                                                                                                      |                |
| `buttonElement`       |         | `HTMLDivElement`         |             |                                                                                                                                                                                                      |                |

#### Methods

| Name    | Privacy | Description | Parameters | Return | Inherited From |
| ------- | ------- | ----------- | ---------- | ------ | -------------- |
| `focus` |         |             |            |        |                |
| `blur`  |         |             |            |        |                |

#### Events

| Name     | Type                                                          | Description                                                           | Inherited From |
| -------- | ------------------------------------------------------------- | --------------------------------------------------------------------- | -------------- |
| `change` | `CustomEvent<{index: number; id: string; expanded: boolean}>` | Fired when the item has expanded/collapsed \`AccordionChangePayload\` |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `disabled`      | disabled     |                |
| `headline`      | headline     |                |
| `expanded`      | expanded     |                |
| `icon`          | icon         |                |
| `icon-category` | iconCategory |                |

#### Slots

| Name      | Description                   |
| --------- | ----------------------------- |
| `default` | Content of the Accordion item |

<details><summary>Private API</summary>

#### Methods

| Name         | Privacy   | Description | Parameters | Return | Inherited From |
| ------------ | --------- | ----------- | ---------- | ------ | -------------- |
| `renderIcon` | protected |             |            |        |                |
| `_toggle`    | private   |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                 | Declaration   | Module                    | Package |
| --------------------------- | -------------------- | ------------- | ------------------------- | ------- |
| `js`                        | `AccordionItem`      | AccordionItem | src/hds-accordion-item.ts |         |
| `custom-element-definition` | `hds-accordion-item` | AccordionItem | src/hds-accordion-item.ts |         |

## `src/hds-accordion.ts`:

### class: `Accordion`, `hds-accordion`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name                | Privacy | Type     | Default                                                   | Description | Inherited From |
| ------------------- | ------- | -------- | --------------------------------------------------------- | ----------- | -------------- |
| `shadowRootOptions` |         | `object` | `{...LitElement.shadowRootOptions, delegatesFocus: true}` |             |                |

#### Fields

| Name              | Privacy | Type                     | Default     | Description          | Inherited From |
| ----------------- | ------- | ------------------------ | ----------- | -------------------- | -------------- |
| `variant`         |         | `AccordionVariant`       | `'default'` | 'default' \| 'solid' |                |
| `arrowPosition`   |         | `AccordionArrowPosition` | `'end'`     | 'start' \| 'end'     |                |
| `expandMode`      |         | `AccordionExpandMode`    | `'many'`    | 'one' \| 'many'      |                |
| `defaultExpanded` |         | `boolean`                | `false`     |                      |                |
| `disabled`        |         | `boolean`                | `false`     |                      |                |

#### Events

| Name     | Type                                                          | Description                                                                    | Inherited From |
| -------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------- |
| `change` | `CustomEvent<{index: number; id: string; expanded: boolean}>` | Fired when an accordion item has expanded/collapsed \`AccordionChangePayload\` |                |

#### Attributes

| Name               | Field           | Inherited From |
| ------------------ | --------------- | -------------- |
| `variant`          | variant         |                |
| `arrow-position`   | arrowPosition   |                |
| `expand-mode`      | expandMode      |                |
| `default-expanded` | defaultExpanded |                |
| `disabled`         | disabled        |                |

#### Slots

| Name      | Description                              |
| --------- | ---------------------------------------- |
| `default` | Slot for \`hds-accordion-item\` elements |

<details><summary>Private API</summary>

#### Fields

| Name          | Privacy   | Type              | Default | Description | Inherited From |
| ------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `slotElement` | protected | `HTMLSlotElement` |         |             |                |

#### Methods

| Name                | Privacy | Description | Parameters                               | Return | Inherited From |
| ------------------- | ------- | ----------- | ---------------------------------------- | ------ | -------------- |
| `_onSlotChange`     | private |             |                                          |        |                |
| `_getFocusedItem`   | private |             |                                          |        |                |
| `_focusItemByIndex` | private |             | `index`                                  |        |                |
| `_onKeyDown`        | private |             | `e: KeyboardEvent`                       |        |                |
| `_onChange`         | private |             | `e: CustomEvent<AccordionChangePayload>` |        |                |
| `_updateItems`      | private |             |                                          |        |                |
| `_getItems`         | private |             |                                          |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name            | Declaration | Module               | Package |
| --------------------------- | --------------- | ----------- | -------------------- | ------- |
| `js`                        | `Accordion`     | Accordion   | src/hds-accordion.ts |         |
| `custom-element-definition` | `hds-accordion` | Accordion   | src/hds-accordion.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name                     | Declaration            | Module                  | Package |
| ---- | ------------------------ | ---------------------- | ----------------------- | ------- |
| `js` | `Accordion`              | Accordion              | ./hds-accordion.js      |         |
| `js` | `AccordionItem`          | AccordionItem          | ./hds-accordion-item.js |         |
| `js` | `AccordionVariant`       | AccordionVariant       | ./hds-accordion.js      |         |
| `js` | `AccordionChangePayload` | AccordionChangePayload | ./hds-accordion.js      |         |
| `js` | `AccordionArrowPosition` | AccordionArrowPosition | ./hds-accordion.js      |         |
| `js` | `AccordionExpandMode`    | AccordionExpandMode    | ./hds-accordion.js      |         |

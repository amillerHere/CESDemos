## `src/hds-panel.ts`:

### class: `Panel`, `hds-panel`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Static Fields

| Name           | Privacy | Type     | Default | Description | Inherited From |
| -------------- | ------- | -------- | ------- | ----------- | -------------- |
| `panelCounter` |         | `number` | `0`     |             |                |

#### Fields

| Name               | Privacy | Type               | Default      | Description                            | Inherited From |
| ------------------ | ------- | ------------------ | ------------ | -------------------------------------- | -------------- |
| `variant`          |         | `PanelVariant`     | `'vertical'` | 'vertical' \| 'horizontal'             |                |
| `panelPosition`    |         | `PanelPosition`    | `'left'`     | 'top' \| 'right' \| 'bottom' \| 'left' |                |
| `panelInteraction` |         | `PanelInteraction` | `'none'`     | 'none' \| 'toggle' \| 'drag'           |                |
| `partialSize`      |         | `number`           | `0`          |                                        |                |
| `expanded`         |         | `PanelExpansion`   | `'open'`     | 'open' \| 'closed' \| 'partial'        |                |
| `overlay`          |         | `boolean`          | `false`      |                                        |                |

#### Methods

| Name     | Privacy | Description | Parameters | Return | Inherited From |
| -------- | ------- | ----------- | ---------- | ------ | -------------- |
| `toggle` |         |             |            |        |                |
| `open`   |         |             |            |        |                |
| `close`  |         |             |            |        |                |

#### Events

| Name     | Type                                                        | Description                                                                                          | Inherited From |
| -------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| `change` | `CustomEvent<{expanded: PanelExpansion; resized: boolean}>` | Fired when there is change in element's state: expanded / collapsed / resized \`PanelChangePayload\` |                |

#### Attributes

| Name                | Field            | Inherited From |
| ------------------- | ---------------- | -------------- |
| `variant`           | variant          |                |
| `panel-position`    | panelPosition    |                |
| `panel-interaction` | panelInteraction |                |
| `partial-size`      | partialSize      |                |
| `expanded`          | expanded         |                |
| `overlay`           | overlay          |                |

#### Slots

| Name      | Description                      |
| --------- | -------------------------------- |
| `default` | Main content for panel container |

<details><summary>Private API</summary>

#### Fields

| Name                     | Privacy   | Type              | Default | Description | Inherited From |
| ------------------------ | --------- | ----------------- | ------- | ----------- | -------------- |
| `containerComputedStyle` | protected |                   |         |             |                |
| `resizing`               | protected | `boolean`         | `false` |             |                |
| `slotElement`            | protected | `HTMLSlotElement` |         |             |                |
| `contentElement`         | protected | `HTMLElement`     |         |             |                |
| `handleElement`          | protected | `HTMLElement`     |         |             |                |
| `wrapperElement`         | protected | `HTMLElement`     |         |             |                |
| `_left`                  | private   |                   |         |             |                |
| `_top`                   | private   |                   |         |             |                |
| `_right`                 | private   |                   |         |             |                |
| `_bottom`                | private   |                   |         |             |                |
| `_showPeek`              | private   | `boolean`         | `false` |             |                |
| `_handleWidth`           | private   | `number`          | `0`     |             |                |
| `_handleHeight`          | private   | `number`          | `0`     |             |                |

#### Methods

| Name                  | Privacy   | Description | Parameters        | Return                 | Inherited From |
| --------------------- | --------- | ----------- | ----------------- | ---------------------- | -------------- |
| `renderPanel`         | protected |             | `template: any`   |                        |                |
| `_handleResize`       | private   |             | `e: PointerEvent` |                        |                |
| `_dragStart`          | private   |             | `e: PointerEvent` |                        |                |
| `_dragEnd`            | private   |             | `e: PointerEvent` |                        |                |
| `_handleToggle`       | private   |             |                   |                        |                |
| `_resetWrapperStyles` | private   |             |                   |                        |                |
| `_renderHandle`       | private   |             |                   | `TemplateResult \| {}` |                |

</details>

<hr/>

### Exports

| Kind                        | Name        | Declaration | Module           | Package |
| --------------------------- | ----------- | ----------- | ---------------- | ------- |
| `js`                        | `Panel`     | Panel       | src/hds-panel.ts |         |
| `custom-element-definition` | `hds-panel` | Panel       | src/hds-panel.ts |         |

## `src/hds-navbar-side.ts`:

### class: `NavBarSide`, `hds-navbar-side`

#### Superclass

| Name    | Module | Package         |
| ------- | ------ | --------------- |
| `Panel` |        | @here/hds-panel |

#### Fields

| Name                 | Privacy | Type      | Default       | Description | Inherited From |
| -------------------- | ------- | --------- | ------------- | ----------- | -------------- |
| `hideHeader`         |         | `boolean` | `false`       |             |                |
| `navbarSideExpanded` |         | `boolean` | `true`        |             |                |
| `hideToggle`         |         | `boolean` | `false`       |             |                |
| `toggleText`         |         | `string`  | `'Hide Menu'` |             |                |

#### Events

| Name     | Type                               | Description                                                                        | Inherited From |
| -------- | ---------------------------------- | ---------------------------------------------------------------------------------- | -------------- |
| `change` | `CustomEvent<{expanded: boolean}>` | Fired when sidebar state changes: expanded / collapsed \`NavbarSideChangePayload\` |                |

#### Attributes

| Name          | Field              | Inherited From |
| ------------- | ------------------ | -------------- |
| `expanded`    | navbarSideExpanded |                |
| `hide-toggle` | hideToggle         |                |
| `toggle-text` | toggleText         |                |

#### Slots

| Name     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| `logo`   | Content for the logo image                                                  |
| `title`  | Content for the title in the header section                                 |
| `main`   | Main content for the \`hds-vertical-navigation\` structure                  |
| `footer` | Content for the \`hds-vertical-navigation\` structure in the footer section |

<details><summary>Private API</summary>

#### Fields

| Name           | Privacy   | Type              | Default | Description | Inherited From |
| -------------- | --------- | ----------------- | ------- | ----------- | -------------- |
| `slotLogoEl`   | protected | `HTMLSlotElement` |         |             |                |
| `slotTitleEl`  | protected | `HTMLSlotElement` |         |             |                |
| `slotMainEl`   | protected | `HTMLSlotElement` |         |             |                |
| `slotFooterEl` | protected | `HTMLSlotElement` |         |             |                |

#### Methods

| Name                  | Privacy   | Description | Parameters                                    | Return | Inherited From |
| --------------------- | --------- | ----------- | --------------------------------------------- | ------ | -------------- |
| `renderToggleButton`  | protected |             |                                               |        |                |
| `_handleNavItemClick` | protected |             | `e: Event`                                    |        |                |
| `_toggleNavbar`       | protected |             | `e: Event`                                    |        |                |
| `renderNavbarSide`    | protected |             |                                               |        |                |
| `_setNavMode`         | private   |             | `slotMainContent, slotFooterContent, navMode` |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name              | Declaration | Module                 | Package |
| --------------------------- | ----------------- | ----------- | ---------------------- | ------- |
| `js`                        | `NavBarSide`      | NavBarSide  | src/hds-navbar-side.ts |         |
| `custom-element-definition` | `hds-navbar-side` | NavBarSide  | src/hds-navbar-side.ts |         |

## `src/hds-navbar-top.ts`:

### class: `NavBarTop`, `hds-navbar-top`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Slots

| Name           | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `logo`         | Content for the logo image                                                                                                            |
| `page-title`   | Content for the title                                                                                                                 |
| `tabs-menu`    | Content to create the menu structure in the navbar top using \`hds-tab-bar\` component                                                |
| `right-tray`   | Content to implement actionable items on the right hand side of the navbar top                                                        |
| `profile-menu` | Content to implement the profile details menu in the navbar top for login and profile menu controls with \`hds-profile-menu\` element |

<hr/>

### Exports

| Kind                        | Name             | Declaration | Module                | Package |
| --------------------------- | ---------------- | ----------- | --------------------- | ------- |
| `js`                        | `NavBarTop`      | NavBarTop   | src/hds-navbar-top.ts |         |
| `custom-element-definition` | `hds-navbar-top` | NavBarTop   | src/hds-navbar-top.ts |         |

## `src/hds-profile-menu.ts`:

### class: `ProfileMenu`, `hds-profile-menu`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name             | Privacy | Type      | Default | Description | Inherited From |
| ---------------- | ------- | --------- | ------- | ----------- | -------------- |
| `profileName`    |         | `string`  | `''`    |             |                |
| `profileEmail`   |         | `string`  | `''`    |             |                |
| `avatarImageUrl` |         | `string`  | `''`    |             |                |
| `open`           |         | `boolean` | `false` |             |                |

#### Events

| Name     | Type                           | Description                                                                      | Inherited From |
| -------- | ------------------------------ | -------------------------------------------------------------------------------- | -------------- |
| `change` | `CustomEvent<{open: boolean}>` | Fired when the menu state has changed: open / close \`ProfileMenuChangePayload\` |                |

#### Attributes

| Name               | Field          | Inherited From |
| ------------------ | -------------- | -------------- |
| `profile-name`     | profileName    |                |
| `profile-email`    | profileEmail   |                |
| `avatar-image-url` | avatarImageUrl |                |
| `open`             | open           |                |

#### Slots

| Name      | Description                                             |
| --------- | ------------------------------------------------------- |
| `default` | Content for the \`hds-list-item\` elements for the menu |

<details><summary>Private API</summary>

#### Fields

| Name                      | Privacy | Type | Default | Description | Inherited From |
| ------------------------- | ------- | ---- | ------- | ----------- | -------------- |
| `_handleDocumentClickRef` | private |      |         |             |                |

#### Methods

| Name                   | Privacy   | Description | Parameters | Return | Inherited From |
| ---------------------- | --------- | ----------- | ---------- | ------ | -------------- |
| `renderAvatar`         | protected |             | `size`     |        |                |
| `_handleDocumentClick` | private   |             |            |        |                |
| `_handleClick`         | private   |             | `e: Event` |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name               | Declaration | Module                  | Package |
| --------------------------- | ------------------ | ----------- | ----------------------- | ------- |
| `js`                        | `ProfileMenu`      | ProfileMenu | src/hds-profile-menu.ts |         |
| `custom-element-definition` | `hds-profile-menu` | ProfileMenu | src/hds-profile-menu.ts |         |

## `src/index.ts`:

### Exports

| Kind | Name                       | Declaration              | Module                | Package |
| ---- | -------------------------- | ------------------------ | --------------------- | ------- |
| `js` | `NavBarTop`                | NavBarTop                | ./hds-navbar-top.js   |         |
| `js` | `NavBarSide`               | NavBarSide               | ./hds-navbar-side.js  |         |
| `js` | `NavbarSideChangePayload`  | NavbarSideChangePayload  | ./hds-navbar-side.js  |         |
| `js` | `ProfileMenu`              | ProfileMenu              | ./hds-profile-menu.js |         |
| `js` | `ProfileMenuChangePayload` | ProfileMenuChangePayload | ./hds-profile-menu.js |         |

import { BaseElement } from '@here/hds-base';
import { PropertyValues } from 'lit';
import { RadioSize } from './hds-radio-group.js';
export declare type RadioChangePayload = {
    id: string;
    name: string;
    value: string;
};
export declare type RadioSelectPayload = string;
/**
 * @slot default Content placed in the label.
 * @slot description  Content placed in the description.
 *
 * @event {CustomEvent<{id: string; name: string; value: string}>} change Fired when the state has changed: checked/unchecked `RadioChangePayload`
 * @event {CustomEvent<string>} selectNext (**Internal use only**) Fired when next radio element should be selected `RadioSelect`
 * @event {CustomEvent<string>} selectPrevious (**Internal use only**) Fired when previous radio element should be selected `RadioSelect`
 *
 * */
export declare class Radio extends BaseElement {
    static styles: import("lit").CSSResultGroup;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    isTabbable: boolean;
    checked: boolean;
    disabled: boolean;
    isRadioGroupDisabled: boolean;
    id: string;
    name: string;
    value: string;
    ariaLabel: string;
    tabIndex: number;
    size: RadioSize;
    protected formElement: HTMLInputElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    focus(): void;
    protected defaultValue(): string;
    protected defaultChecked(): boolean;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleClick;
    private _handleKeydown;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-radio': Radio;
    }
}

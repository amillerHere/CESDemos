import { LitElement } from 'lit';
export declare type LogoSize = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
export declare class Logo extends LitElement {
    static styles: import("lit").CSSResultGroup;
    onDark: boolean;
    monochrome: boolean;
    size: LogoSize;
    padding: boolean;
    background: boolean;
    /**
     * Returns the SVG code for the HERE logo
     * @param color Color value for the letters
     * @param symbolColor Color value for he symbol
     * @return {SVGTemplateResult} SVG code for the HERE logo
     */
    static drawLogo(): import("lit-html").TemplateResult<2>;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'hds-logo': Logo;
    }
}

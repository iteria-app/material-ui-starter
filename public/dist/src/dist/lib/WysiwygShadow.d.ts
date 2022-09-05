import type { SvelteComponent } from 'svelte';
export default class WysiwygHTMLElement extends HTMLElement {
    contentWindow: Window;
    component: SvelteComponent;
    error: any;
    constructor();
    set win(win: Window);
    get win(): Window;
    set bundlerError(bundlerError: any);
    get bundlerError(): any;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

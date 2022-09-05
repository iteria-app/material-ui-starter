import type { SvelteComponent } from 'svelte';



export default class TranslationSheetHTMLElement extends HTMLElement {
    translations: Translations;
    component: SvelteComponent;
    constructor();
    set translation(tl: Translations);
    get translation(): Translations;
    connectedCallback(): void;
    disconnetedCallback(): void;
}

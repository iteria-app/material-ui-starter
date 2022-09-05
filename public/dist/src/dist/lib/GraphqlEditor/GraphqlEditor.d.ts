import type { SvelteComponent } from 'svelte';
export default class GraphqlEditorHTMLElement extends HTMLElement {
    _intro: Intro;
    _readonly: boolean;
    component: SvelteComponent;
    constructor();
    set intro(intro: Intro);
    get intro(): Intro;
    set readonly(readonly: boolean);
    get readonly(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

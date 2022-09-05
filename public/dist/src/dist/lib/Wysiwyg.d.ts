import type { SvelteComponent } from 'svelte';

export interface Features {
    tippy?: boolean;
    generator?: boolean;
    addFields?: boolean;
    translations?: boolean;
    themeEditor?: boolean;
    floatingButton?: boolean;
    graphQLEndpoint?: boolean;
    erd?: boolean;
    commit?: boolean;
    save?: boolean;
    vsCode?: boolean;
}
export interface Template {
    fileName: string;
    filePath: string;
}
export default class WysiwygHTMLElement extends HTMLElement {
    contentWindow: Window;
    component: SvelteComponent;
    error: any;
    intro: any;
    filteredIntro: any;
    featureFlags: Features;
    insideTable: boolean;
    typename: string;
    devserver: boolean;
    template: any;
    initialized: boolean;
    netlify: boolean;
    constructor();
    set win(win: Window);
    get win(): Window;
    set bundlerError(bundlerError: any);
    get bundlerError(): any;
    set introspection(introspection: any);
    get introspection(): any;
    set filteredIntrospection(filteredIntrospection: any);
    get filteredIntrospection(): any;
    set features(featureFlags: Features);
    get features(): Features;
    set isInsideTable(isInsideTable: any);
    get isInsideTable(): any;
    set __typename(__typename: any);
    get __typename(): any;
    set isDevserver(isDevserver: any);
    get isDevserver(): any;
    set isNetlify(isNetlify: any);
    get isNetlify(): any;
    get isInitialized(): any;
    set isInitialized(isInitialized: any);
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export declare const initializeWysiwyg: () => void;

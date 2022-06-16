import { ElementHighlightMessageType } from '../messaging/messageTypes';
import { TransferableError, Translations } from '../types';
import { CodeDir, CodeRW } from '@iteria-app/generator';
export interface FeatureFlags {
    tippy?: boolean;
    generator?: boolean;
    addFields?: boolean;
    translations?: boolean;
    themeEditor?: boolean;
    graphQLEndpoint?: boolean;
    erd?: boolean;
    commit?: boolean;
    save?: boolean;
}
export declare const updateWysiwygErrors: (error: TransferableError) => void;
export declare const addElementHighlight: (window: Window, injectMode: 'jamstack' | 'devServer', features?: FeatureFlags) => Promise<void>;
export declare const getAllTranslations: (path: string, io: CodeRW & CodeDir) => Promise<Translations>;
export declare const handleShowAllTranslations: (event: any) => Promise<void>;
export declare const handleCloneTableColumn: (type: ElementHighlightMessageType, event: CustomEvent) => Promise<void>;
export declare const handleCloneFormInput: (window: Window, el: HTMLElement, type: ElementHighlightMessageType, event: CustomEvent) => Promise<void>;
export declare const handleRemoveTableColumn: (window: Window, el: HTMLElement, type: ElementHighlightMessageType) => Promise<void>;
export declare const handleRemoveFormColumn: (contentWindow: Window, el: HTMLElement, type: ElementHighlightMessageType) => Promise<void>;
export declare const handleIconClick: (window: Window, el: HTMLElement, type: ElementHighlightMessageType) => void;
export declare const handleGeneratePageClick: (window: Window, type: ElementHighlightMessageType, event: CustomEvent) => Promise<void>;
export declare const handleChangeGraphqlEndpoint: (type: ElementHighlightMessageType, event: CustomEvent) => Promise<void>;
export declare const handleChangeTheme: (type: ElementHighlightMessageType, event: CustomEvent) => Promise<void>;
export declare const handleCreateTable: (el: HTMLElement, event: CustomEvent) => Promise<void>;
export declare const handleAddColumn: (el: HTMLElement, event: CustomEvent) => Promise<void>;
export declare const handleCommitAllChanges: (loginType: ElementHighlightMessageType, commitType: ElementHighlightMessageType, event: CustomEvent) => Promise<void>;
export declare const handleViewERD: (event: CustomEvent) => Promise<void>;
export declare function loadNewIntrospection(el?: HTMLElement): Promise<void>;
export declare const handleReorderElements: (window: Window, payload: {
    elements: [
        {
            prevIndex: number;
            newIndex: number;
            element: HTMLElement;
            fieldName: string;
        }
    ];
    hasFields: boolean;
    hasRoutes: boolean;
    hasColumns: boolean;
    hasRelations: boolean;
    relationName: string;
}, type: ElementHighlightMessageType) => Promise<void>;

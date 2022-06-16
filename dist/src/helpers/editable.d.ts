import { ElementHighlightMessageType } from '../messaging/messageTypes';
export declare const setEndOfContenteditable: (editingElement: Element, el: any, pos?: number | undefined) => void;
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
}, type: ElementHighlightMessageType, frontendActions: any) => Promise<void>;

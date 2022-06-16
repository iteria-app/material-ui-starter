import { CodeRW } from '@iteria-app/generator';
import { BUNDLER_ERROR, TRANSPILER_ERROR } from './messaging/messageTypes';
export interface DevtoolsTreeNode {
    children: number[];
    depth: number;
    displayName: string | null;
    hocDisplayNames: string[] | null;
    id: number;
    isCollapsed: boolean;
    key: number | null;
    ownerID: number;
    parentID: number;
    type: number;
    weight: number;
}
export interface BrowserCaches {
    readonly transpiledCache: CodeRW;
    readonly sourcesCache: CodeRW;
}
export interface IFiles {
    [path: string]: string;
}
export interface EditorPosition {
    lineNumber: number;
    columnNumber: number;
}
export interface ElementHighlightOffset {
    top: number;
    right: number;
    left: number;
    bottom: number;
    height: number;
    width: number;
}
export interface ErrorData {
    err: Error;
}
export interface TransferableError {
    type: typeof BUNDLER_ERROR | typeof TRANSPILER_ERROR;
    error: Error;
}
export interface Translations {
    langs: {};
}
export interface EnvObject {
    [key: string]: string;
}

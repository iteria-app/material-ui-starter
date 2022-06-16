import { SourceLineCol } from '@iteria-app/generator';
export declare const cloneElement: (code: string, source: SourceLineCol) => Promise<string | void>;
export declare const cloneAndRenameElement: (code: string, source: SourceLineCol, oldField: string, newField: string) => Promise<string | void>;

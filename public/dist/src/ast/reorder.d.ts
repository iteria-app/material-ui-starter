import { SourceLineCol } from '@iteria-app/generator';
export declare const reorderElement: (code: string, data: {
    fileName: string;
    elementsPosEnd: SourceLineCol;
    chained_changes: [{
        prevIndex: number;
        newIndex: number;
    }];
}) => Promise<string | void>;

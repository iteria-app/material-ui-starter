export declare const encodeEmptyLines: (code: string) => string;
export declare const decodeEmptyLines: (code: string) => string;
export declare const printFormattedSourceFile: (sourceFile: ts.SourceFile) => Promise<string>;
export declare const printFormattedNode: (node: ts.SourceFile) => Promise<string>;
export declare const printNode: (node: ts.Node, sourceFile: ts.SourceFile) => any;

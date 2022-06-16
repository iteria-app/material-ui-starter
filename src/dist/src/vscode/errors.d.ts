import { URI } from 'vscode-uri';
export declare enum VsCodeFSErrors {
    FileNotFound = "FileNotFound",
    FileIsADirectory = "FileIsADirectory",
    FileExists = "FileExists",
    FileNotADirectory = "FileNotADirectory"
}
export declare class VSCodeFSTransferableError {
    constructor(errorType: VsCodeFSErrors, uri: URI);
    errorType: VsCodeFSErrors;
    uri: URI;
}

import { VSCodeFSTransferableError } from './../vscode/errors';
import { CodeRW, CodeDir } from '@iteria-app/generator';
import { URI } from 'vscode-uri';
export default class WatcherProxyFS implements CodeRW, CodeDir {
    private history;
    private delegate;
    constructor(delegate: CodeRW & CodeDir);
    readFile(path: string, encoding?: string, injectMode?: string): Promise<string | undefined>;
    writeFile(path: string, data: string, options?: any): Promise<void | Uint8Array | VSCodeFSTransferableError>;
    renameFile(oldPath: string, newPath: string): Promise<void>;
    deleteFile(path: string): Promise<void>;
    deleteFiles(files: {
        path: string;
    }[]): Promise<void>;
    readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number, injectMode?: string): Promise<{
        fileName: string;
        filePath: string;
        fileType: 'file' | 'dir';
    }[] | undefined>;
    createDirectory(uri: URI): Promise<void>;
    isHistoryEmpty(): boolean;
    readHistoryFile(path: string, encoding?: string): Promise<{
        data: string;
        newFile: boolean;
    } | null | undefined>;
    readHistoryFiles(): {
        [path: string]: {
            data: string;
            newFile: boolean;
        } | null;
    };
    private writeHistoryFile;
    private writeHistoryFiles;
    mergeHistoryFiles(files: {
        [path: string]: {
            data: string;
            newFile: boolean;
        };
    }): void;
    deleteHistoryFile(path: string): void;
    deleteHistoryFiles(): void;
    private _watcherRenameFile;
    private _watcherWriteFile;
    private _watcherDeleteFile;
}

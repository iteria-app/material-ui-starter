import { CodeRW, CodeDir } from '@iteria-app/generator';
import { URI } from 'vscode-uri';
import { VSCodeFSTransferableError } from '../vscode/errors';
import { Directory } from '../vscode/vfs';
export default class WriterMemoryFS implements CodeRW, CodeDir {
    private root;
    constructor(root: Directory | undefined);
    setRoot(root: Directory | undefined): void;
    getRoot(): Directory | undefined;
    readFile(path: string, encoding?: string): Promise<string | VSCodeFSTransferableError>;
    writeFile(path: string, data: string, options?: {
        create: boolean;
        overwrite: boolean;
    }): Promise<void | Uint8Array | VSCodeFSTransferableError>;
    renameFile(oldPath: string, newPath: string): Promise<void>;
    deleteFile(path: string): Promise<void>;
    readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): Promise<string[] | undefined>;
    createDirectory(uri: URI): Promise<void>;
    private _createDirectoryTree;
}

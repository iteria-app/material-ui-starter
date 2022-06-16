import { VSCodeFSTransferableError } from './../vscode/errors';
import { CodeRW, CodeDir } from '@iteria-app/generator';
import { URI } from 'vscode-uri';
export default class CompositeFS implements CodeRW, CodeDir {
    delegate: (CodeRW & CodeDir)[];
    private memfs;
    private fetchfs;
    constructor(delegate: (CodeRW & CodeDir)[]);
    readFile(path: string, encoding?: string, injectMode?: string): Promise<string | VSCodeFSTransferableError>;
    writeFile(path: string, data: string, options?: any): Promise<void | Uint8Array | VSCodeFSTransferableError>;
    renameFile(oldPath: string, newPath: string): Promise<void>;
    deleteFile(path: string): Promise<void>;
    readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number, injectMode?: string): Promise<string[] | undefined>;
    createDirectory(uri: URI): Promise<void>;
}

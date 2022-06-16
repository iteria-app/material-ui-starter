import { CodeRW, CodeDir } from '@iteria-app/generator';
import { URI } from 'vscode-uri';
export interface DirectoryFiles {
    fileName?: string;
    filePath?: string;
}
export default class WriterFetchFS implements CodeRW, CodeDir {
    private fsPort;
    constructor(fsPort: number);
    setPort(fsPort: number): void;
    readFile(path: string, encoding?: string): Promise<string | undefined>;
    writeFile(path: string, data: string): Promise<void>;
    renameFile(oldPath: string, newPath: string): Promise<void>;
    deleteFile(path: string): Promise<void>;
    readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): Promise<string[] | undefined>;
    createDirectory(uri: URI): Promise<void>;
    createDirectoryObject(response: string): DirectoryFiles[];
}

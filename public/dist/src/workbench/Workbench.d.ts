import { CodeRW, CodeDir } from '@iteria-app/generator';
import { IntrospectionQuery } from '@iteria-app/graphql-lowcode';
import { URI } from 'vscode-uri';
import { WindowMessaging } from '../messaging';
import { EnvObject, IFiles } from '../types';
import { VSCodeFSTransferableError } from '../vscode/errors';
import { Directory, FileStat, FileType } from '../vscode/vfs';
import WatcherProxyFS from '../watcher/WatcherProxyFS';
export interface FileWriteData {
    path: string;
    data: string;
}
export interface FileDeleteData {
    path: string;
}
export interface ProjectLoadedData {
    files: IFiles;
}
export declare type GetProjectZipData = {
    url: string;
};
export declare class DevWorkbench implements CodeRW, CodeDir {
    constructor(messagingService: WindowMessaging, fsPort?: number, files?: IFiles);
    private messagingService;
    graphQLEndpoint: string;
    graphQLSecret: string;
    introspection: IntrospectionQuery;
    env: {
        [key: string]: string;
    };
    cwd: string;
    fs: WatcherProxyFS;
    private memfs;
    private fetchfs;
    injectMode: 'jamstack' | 'devServer';
    mode: 'production' | 'development';
    command: 'build' | 'serve';
    private transpiledFiles;
    generateGraphql(files: FileWriteData[]): Promise<{
        generatedFilePaths: {
            graphql: string;
            introspection: string;
        };
        generated: any;
    } | {
        generated: {
            errors: string;
        };
    }>;
    readFile(path: string, encoding?: string): Promise<string>;
    readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): Promise<{
        fileName: string;
        filePath: string;
    }[]>;
    writeFile(path: string, data: string): Promise<void>;
    renameFile(oldPath: string, newPath: string): Promise<void>;
    deleteFile(path: string): Promise<void>;
    writeFiles(files: FileWriteData[]): Promise<void>;
    parseEnvs(): Promise<EnvObject>;
    readEnvFileContent(): Promise<string>;
    writeEnvFileContent(data: string): Promise<void>;
    rename(oldUri: URI, newUri: URI, options: {
        overwrite: boolean;
    }): VSCodeFSTransferableError | void;
    delete(uri: URI): VSCodeFSTransferableError | void;
    stat(uri: URI): FileStat | VSCodeFSTransferableError;
    createDirectory(uri: URI): VSCodeFSTransferableError | void;
    deleteFiles(files: FileDeleteData[]): Promise<void>;
    setPort(fsPort: number): void;
    private _transformObjectToFsTree;
    setCwd(cwd: string): void;
    transformFsTreeToObject(root: Directory): IFiles;
    readFileTree(uri: URI): Uint8Array | VSCodeFSTransferableError;
    readDirectoryTree(uri: URI): [string, FileType][] | VSCodeFSTransferableError;
    writeFileTree(uri: URI, content: Uint8Array, options: {
        create: boolean;
        overwrite: boolean;
    }): Promise<Uint8Array | VSCodeFSTransferableError>;
    private _renameInTranspiledFiles;
    private _deleteInTranspiledFiles;
    getRoot(): Directory;
    setInjectionMode(injectMode: 'jamstack' | 'devServer'): void;
    setGraphQLEndpoint(graphQLEndpoint: string, graphQLSecret: string): void;
    setIntrospection(introspection: IntrospectionQuery): void;
    setMode(mode: 'production' | 'development'): void;
    setCommand(command: 'build' | 'serve'): void;
    setEnv(env: {
        [key: string]: string;
    }): void;
}

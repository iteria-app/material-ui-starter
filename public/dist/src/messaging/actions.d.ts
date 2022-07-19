import { EnvObject, IFiles } from '../types';
import { FileWriteData, FileDeleteData } from '../workbench/Workbench';
import { ElementHighlightMessageType } from './messageTypes';
import IMessaging from './messaging';
export declare class FrontendActions {
    constructor(messagingService: IMessaging);
    private messagingService;
    commitAllChanges(): void;
    saveZip(): void;
    fileWrite(path: string, data: string): void;
    multipleFileWrite(files: FileWriteData[]): void;
    multipleFileDelete(files: FileDeleteData[]): void;
    frontendFileWrite(path: string, data: string): void;
    elementHighlightClick<SourceLineCol>(type: ElementHighlightMessageType, source: SourceLineCol): void;
    getProjectFromArchive(url: string): void;
    transpileError(err: Error): void;
    transpileSingleFile(path: string, data: string, files: IFiles, env: EnvObject): void;
    transpileMultipleFiles(newFiles: IFiles, env: EnvObject, files: IFiles): void;
    updateTranspiledFiles(transpiledFiles: IFiles): void;
    bundleFiles(files: IFiles, bundleEntry?: string): void;
    perfromReactRefresh(bundle: string): void;
    refreshIframe(bundle: string): void;
    projectLoaded(files: IFiles): void;
    connectElementHighlight(): void;
    transpileFiles(files: IFiles, env: EnvObject): void;
}

import { EnvObject, IFiles } from '../types';
import IMessaging from '../messaging/messaging';
export declare type BundleFilesData = {
    files: IFiles;
    bundleEntry?: string;
};
export declare type UpdateTranspiledFilesData = IFiles;
export declare type TranspileFilesData = {
    files: IFiles;
    env: EnvObject;
};
export declare type TranspileMultipleFilesData = {
    newFiles: IFiles;
    env: EnvObject;
    files: IFiles;
};
export interface TranspileSingleFileData {
    path: string;
    data: string;
    files: IFiles;
    env: EnvObject;
}
export interface BundlerError {
    error: Error;
}
export interface IBundler {
    bundleFiles: (files: IFiles, bundleEntry?: string) => Promise<string | BundlerError>;
    transpileFiles: (files: IFiles) => Promise<IFiles | BundlerError>;
    transpileSingleFile: (path: string, data: string) => Promise<string | BundlerError>;
}
export declare class BundleWorker {
    constructor(messagingService: IMessaging);
    private messagingService;
    bundleFiles(files: IFiles, bundleEntry?: string): Promise<string>;
    transpileFiles(files: IFiles, env: EnvObject): Promise<import("../../../bundler-main/src/types").IFiles>;
    transpileSingleFile(path: string, data: string, env: EnvObject, files: IFiles): Promise<string>;
}

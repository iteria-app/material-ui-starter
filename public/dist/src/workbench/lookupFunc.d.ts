import { URI } from 'vscode-uri';
import { VSCodeFSTransferableError } from '../vscode/errors';
import { Directory, Entry, File } from '../vscode/vfs';
export declare const lookupAsFile: (uri: URI, silent: boolean, root: Directory) => File | VSCodeFSTransferableError;
export declare const lookup: (uri: URI, silent: boolean, root: Directory) => Entry | undefined | VSCodeFSTransferableError;
export declare const lookupParentDirectory: (uri: URI, root: Directory) => Directory | VSCodeFSTransferableError;
export declare const lookupAsDirectory: (uri: URI, silent: boolean, root: Directory) => Directory | VSCodeFSTransferableError;

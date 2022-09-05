import { ICommandArgs } from '../types';
import { DevWorkbench } from '../../workbench/Workbench';
export declare const vscodeFileSystemListener: (args: ICommandArgs, fileTree: DevWorkbench, contentWindow: Window) => Promise<void>;

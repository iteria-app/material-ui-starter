import { IFiles } from '../types';
export declare const fetchProjectTar: (repoUrl: string, command: 'build' | 'serve') => Promise<IFiles>;

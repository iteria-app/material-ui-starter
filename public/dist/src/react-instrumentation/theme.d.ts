import { CodeDir, CodeRW } from '@iteria-app/generator';
import { FrontendActions } from '../messaging/actions';
export declare const getTheme: (path: string, fileName: string, io: CodeRW & CodeDir, frontendActions: FrontendActions) => Promise<{
    [x: string]: any;
    file: any;
}>;

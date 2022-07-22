import { SourceLineCol } from '@iteria-app/generator';
import { DevWorkbench } from '../workbench/Workbench';
export declare class HoverInspector {
    constructor(workbench: DevWorkbench);
    private workbench;
    private cachedSource;
    private cachedFileContent;
    getComponentName(el: HTMLElement): Promise<string | void>;
    getCachedFileContent(source: SourceLineCol): Promise<string>;
    getParsedTagRegxp(fileContent: string, source: SourceLineCol): string;
}

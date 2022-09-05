import { SourceLineCol } from '@iteria-app/generator';
import { CodeRW } from '@iteria-app/generator/src/io';
import { DevWorkbench } from '../workbench/Workbench';
export declare class HoverInspector {
    constructor(workbench: DevWorkbench);
    private workbench;
    private cachedSource;
    private cachedFileContent;
    getComponentName(el: HTMLElement): Promise<string>;
    getComponentTransformTemplates(el: HTMLElement): Promise<import("./wysiwyg-callbacks/handleTransform").TemplateOption[]>;
    getCachedFileContent(source: SourceLineCol): Promise<string>;
}
export declare const parseJsxComponentTagName: (workbench: CodeRW, source: SourceLineCol) => Promise<string>;

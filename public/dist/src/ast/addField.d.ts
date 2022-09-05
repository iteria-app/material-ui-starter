import { SourceLineCol } from '@iteria-app/generator';
import { InsertType, PageType } from '@iteria-app/graphql-lowcode';
import ts from 'typescript';
interface Props {
    workbench: any;
    source: SourceLineCol;
    page: PageType;
    entityName: string;
    columnToAdd: string;
    selectedColumn: ts.Node;
    template: {
        templateName: string;
        runtimeComponent: string;
        filePath: string;
    };
    insertType?: InsertType;
}
export declare const addField: (props: Props) => Promise<{
    path: any;
    data: any;
}[]>;
export {};

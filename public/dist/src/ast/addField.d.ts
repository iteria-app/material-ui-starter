import { SourceLineCol } from "@iteria-app/generator";
import { InsertType, PageType } from "@iteria-app/graphql-lowcode";
import ts from "typescript";
export declare const LIST_VIEW = "ListView";
interface Props {
    workbench: any;
    source: SourceLineCol;
    page: PageType;
    entityName: string;
    columnToAdd: string;
    selectedColumn: ts.Node;
    insertType?: InsertType;
}
export declare const addField: (props: Props) => Promise<{
    path: any;
    generatedCode: any;
}>;
export {};

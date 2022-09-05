import { DocumentNode } from 'graphql';
import { CodeRW } from '@iteria-app/react-lowcode/esm/io';
import { IFiles } from '../types';
import { FileWriteData } from '../workbench/Workbench';
export interface ConfigProps {
    schema: string;
    generates: string;
}
export interface DocumentNodeLocation {
    location: string;
    document: DocumentNode;
}
export declare function generateGraphqlTypesFile(config: string, documents: DocumentNodeLocation[] | undefined): Promise<any>;
export declare function loadGraphqlCodegenConfig(io: CodeRW): Promise<ConfigProps>;
export declare function getURLFromConfig(io: CodeRW): Promise<string>;
export declare function getGeneratesFileSourceFromConfig(io: CodeRW): Promise<any>;
export declare function getGeneratesFileNameFromConfig(io: CodeRW): Promise<{
    graphql: string;
    introspection: string;
}>;
export declare function findGraphQlFiles(files: IFiles, editedDocumentData: string, currentDocumentPath: string): DocumentNodeLocation[];
interface GraphqlCodegenProps {
    workbench: CodeRW;
    transpiledFiles: IFiles;
    files: FileWriteData[];
}
export declare function graphqlCodegen({ workbench, transpiledFiles, files, }: GraphqlCodegenProps): Promise<{
    generatedFilePaths: {
        graphql: string;
        introspection: string;
    };
    generated: any;
}>;
export {};

import { DocumentNode } from 'graphql';
import { CodeRW } from '@iteria-app/react-lowcode/esm/io';
import { IFiles } from '../types';
export interface ConfigProps {
    schema: string;
    generates: string;
}
export interface DocumentNodeLocation {
    location: string;
    document: DocumentNode;
}
export declare function generateGraphqlTypesFile(graphqlEndpoint: string, config: string, documents: DocumentNodeLocation[] | undefined): Promise<string>;
export declare function loadGraphqlCodegenConfig(io: CodeRW): Promise<ConfigProps>;
export declare function getURLFromConfig(io: CodeRW): Promise<string>;
export declare function fetchGraphqlIntrospectionSchema(schema: string): Promise<any>;
export declare function getGeneratesFileSourceFromConfig(io: CodeRW): Promise<any>;
export declare function getGeneratesFileNameFromConfig(io: CodeRW): Promise<string>;
export declare function findGraphQlFiles(files: IFiles, editedDocumentData: string, currentDocumentPath: string): DocumentNodeLocation[];
interface GraphqlCodeGenerator {
    workbench: CodeRW;
    files: IFiles;
    data?: string;
    path?: string;
}
export declare function graphqlCodegen({ workbench, files, data, path, }: GraphqlCodeGenerator): Promise<{
    generatedFilePath: string;
    generated: string;
}>;
export {};

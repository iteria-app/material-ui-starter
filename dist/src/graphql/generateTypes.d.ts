import { DocumentNodeLocation } from './generateGraphqlTypesFile';
interface GenerateProps {
    config: string;
    generatedSchema: string;
    documents: DocumentNodeLocation[] | undefined;
}
export declare function generateTypes({ config, generatedSchema, documents, }: GenerateProps): Promise<string>;
export {};

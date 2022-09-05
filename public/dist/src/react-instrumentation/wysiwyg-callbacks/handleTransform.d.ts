export declare type TemplateOption = {
    templateName: string;
    templatePath: string;
};
export declare const findAllFieldTemplates: (componentName: string) => Promise<TemplateOption[]>;
export declare const handleTransform: (event: any) => Promise<any>;

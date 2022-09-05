export declare function mapTranslationsToSpreadsheet(translations: Translations): {
    columns: {
        name: string;
        title: string;
        type: string;
        width: number;
    }[];
    data: any[];
};
export declare function mapSpreadsheetToTranslations(instance: JSpreadSheet): Translations;

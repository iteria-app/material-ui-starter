export declare const schema: {
    $schema: string;
    $id: string;
    id: string;
    title: string;
    description: string;
    type: string;
    version: number;
    mapsToTagName: string;
    properties: {
        'expand-mode': {
            enum: string[];
            default: string;
            title: string;
            description: string;
            mapsToAttribute: string;
            type: string;
        };
        SlotItem: {
            title: string;
            description: string;
            mapsToSlot: string;
            '@microsoft/fast-tooling/dictionary-link': boolean;
            pluginId: string;
            type: string;
            items: {
                type: string;
                properties: {
                    id: {
                        title: string;
                        type: string;
                    };
                    dataLocation: {
                        title: string;
                        type: string;
                    };
                };
            };
        };
    };
};
export declare const fields: Field[];

import { PageType } from '@iteria-app/graphql-lowcode';
export declare const detailPageRegex: RegExp;
export declare const detailPageFullRegex: RegExp;
export declare const getEntityFromUrl: () => {
    entityName: string;
    pageType: PageType;
};

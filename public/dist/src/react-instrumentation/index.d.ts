import IMessaging from '../messaging/messaging';
export interface RefreshIframeData {
    bundle: string;
}
export declare type PerformReactRefreshData = RefreshIframeData;
export interface DevtoolsTreeNode {
    children: number[];
    depth: number;
    displayName: string | null;
    hocDisplayNames: string[] | null;
    id: number;
    isCollapsed: boolean;
    key: number | null;
    ownerID: number;
    parentID: number;
    type: number;
    weight: number;
}
export declare class ReactInstrumentation {
    constructor(messagingService: IMessaging);
    private resourceHtmlElements;
    private appendCustomRequires;
    setResourceHtmlElements(vercelUrl: string): Promise<void>;
    private getCdnBundle;
}

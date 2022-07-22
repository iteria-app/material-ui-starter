import IMessaging from './messaging/messaging';
import { FeatureFlags } from './react-instrumentation/elementHighlight';
export declare const addFrontendListeners: (messagingService: IMessaging, injectMode: 'jamstack' | 'devServer', features?: FeatureFlags) => void;

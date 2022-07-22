import { WindowMessaging } from './messaging';
import { DevWorkbench } from './workbench/Workbench';
import { FrontendActions } from './messaging/actions';
import { ReactInstrumentation } from './react-instrumentation';
export declare const messagingService: WindowMessaging;
export declare const workbench: DevWorkbench;
export declare const reactInstrumentation: ReactInstrumentation;
export declare const frontendActions: FrontendActions;
interface IteriaProps {
    fsPort?: number;
    cwd?: string;
    graphQLEndpoint?: string;
    graphQLSecret?: string;
    features?: {
        tippy?: boolean;
        generator?: boolean;
        addFields?: boolean;
        translations?: boolean;
        themeEditor?: boolean;
        graphQLEndpoint?: boolean;
        floatingButton?: boolean;
    };
    env: {
        [key: string]: string;
    };
    deploymentUrl?: string;
    injectMode?: 'jamstack' | 'devServer';
    mode: 'production' | 'development';
    command: 'build' | 'serve';
}
export declare const devServer: (props?: IteriaProps) => Promise<void>;
export {};

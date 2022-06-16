interface IteriaProps {
    fsPort?: number;
    cwd?: string;
    graphQLEndpoint?: string;
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
export declare function iteriaApp(props?: IteriaProps): Promise<void>;
export {};

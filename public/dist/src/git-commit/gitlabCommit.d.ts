export declare const gitlabCommit: (commitData: {
    projectPath: string;
    token: string;
    branch: string;
    commitMessage: string;
    changedFiles: {
        [path: string]: {
            data: string;
            newFile: boolean;
        };
    };
}) => Promise<{
    success: boolean;
    errors: any;
}>;

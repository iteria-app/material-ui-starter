export declare const executeCommit: (fetchUrl: string, accessToken: string, branchName: string, repositoryUrl: string, commitMessage: string, allChangedFiles: {
    [path: string]: {
        data: string;
        newFile: boolean;
    };
}) => Promise<{
    success: boolean;
    errors: any;
}>;

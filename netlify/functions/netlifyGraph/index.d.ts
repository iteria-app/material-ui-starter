// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
}

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  "path": Array<string | number>,
  "message": string,
  "extensions": Record<string, unknown>
};


// Add commit
export type CommitAdditionInput = {
 "contents"?: unknown;  
 /**
 * The unqualified name of the branch to append the commit to.
 */
 "branchName"?: string;  
 /**
 * The nameWithOwner of the repository to commit to.
 */
 "repositoryNameWithOwner"?: string;  
"clientMutationId"?: string;  
 /**
 * The headline of the message.
 */
 "headline"?: string;  
 /**
 * The base64 encoded contents of the file
 */
 "contents1"?: unknown;  
 /**
 * The path in the repository where the file will be located
 */
 "path"?: string;  
 /**
 * The git commit oid expected at the head of the branch prior to the commit
 */
 "expectedHeadOid"?: unknown
};

export type CommitAddition = {
  data: {
    gitHub: {
      createCommitOnBranch: {
      clientMutationId: string;
      };
    };
  };
  errors: Array<GraphQLError>;
};

export function executeCommitAddition (
  variables: CommitAdditionInput,
  options?: NetlifyGraphFunctionOptions
): Promise<CommitAddition>;

// Fetch last commit ID
export type FetchHeadOid = {
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub: {
  /**
  * Lookup a given repository by the owner and repository name.
  */
repository: {
  id: string;
  /**
  * The Ref associated with the repository's default branch.
  */
defaultBranchRef: {
  /**
  * The object the ref points to. Returns null when object does not exist.
  */
target: ;
};
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

export function fetchFetchHeadOid(
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<FetchHeadOid>;

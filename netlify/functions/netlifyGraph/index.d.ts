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
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub: {
  /**
  * Appends a commit to the given branch as the authenticated user.

This mutation creates a commit whose parent is the HEAD of the provided
branch and also updates that branch to point to the new commit.
It can be thought of as similar to `git commit`.

### Locating a Branch

Commits are appended to a `branch` of type `Ref`.
This must refer to a git branch (i.e.  the fully qualified path must
begin with `refs/heads/`, although including this prefix is optional.

Callers may specify the `branch` to commit to either by its global node
ID or by passing both of `repositoryNameWithOwner` and `refName`.  For
more details see the documentation for `CommittableBranch`.

### Describing Changes

`fileChanges` are specified as a `FilesChanges` object describing
`FileAdditions` and `FileDeletions`.

Please see the documentation for `FileChanges` for more information on
how to use this argument to describe any set of file changes.

### Authorship

Similar to the web commit interface, this mutation does not support
specifying the author or committer of the commit and will not add
support for this in the future.

A commit created by a successful execution of this mutation will be
authored by the owner of the credential which authenticates the API
request.  The committer will be identical to that of commits authored
using the web interface.

If you need full control over author and committer information, please
use the Git Database REST API instead.

### Commit Signing

Commits made using this mutation are automatically signed by GitHub if
supported and will be marked as verified in the user interface.

  */
createCommitOnBranch: {
  /**
  * A unique identifier for the client performing the mutation.
  */
clientMutationId: string;
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

/**
 * An empty mutation to start from
 */
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

/**
 * An empty query to start from
 */
export function fetchFetchHeadOid(
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<FetchHeadOid>;

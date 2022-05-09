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




export type ExampleMutation = {
  /**
  * Any data from the function will be returned here
  */
data: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

/**
 * An empty mutation to start from
 */
export function executeExampleMutation (
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ExampleMutation>;


export type ExecuteCommitAddition = {
  /**
  * Any data from the function will be returned here
  */
data: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function executeExecuteCommitAddition (
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ExecuteCommitAddition>;


export type HeadOid = {
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub: {
  /**
  * Lookup a given repository by the owner and repository name.
  */
repository: {
  /**
  * Fetch a given ref from the repository
  */
ref: {
  /**
  * The object the ref points to. Returns null when object does not exist.
  */
target: {
  /**
  * The Git object ID
  */
oid: string;
};
  /**
  * The ref name.
  */
name: string;
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
export function fetchHeadOid(
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<HeadOid>;


export type HeadOids = {
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub: {
  /**
  * Lookup a given repository by the owner and repository name.
  */
repository: {
  /**
  * Fetch a list of refs from the repository
  */
refs: {
  /**
  * A list of edges.
  */
edges: Array<{
  /**
  * The item at the end of the edge.
  */
node: {
  /**
  * The ref name.
  */
name: string;
  /**
  * The object the ref points to. Returns null when object does not exist.
  */
target: {
  /**
  * The Git object ID
  */
oid: string;
};
};
}>;
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
export function fetchHeadOids(
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<HeadOids>;

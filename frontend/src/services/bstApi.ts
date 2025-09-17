import { BACKEND_URL } from "./backendApi";

export type BstList = number[];

export interface BstTraversals {
  bfs: number[];
  dfs_pre: number[];
  dfs_post: number[];
  dfs_inorder: number[];
  message?: string;
}

export interface BstContainsResponse {
  contains: boolean;
  message?: string;
  // Some backends may also return traversals on contains; keep optional
  bfs?: number[];
  dfs_pre?: number[];
  dfs_post?: number[];
  dfs_inorder?: number[];
}

const BASE_URL: string = `${BACKEND_URL}/BST/v1`;

async function postJson<TResponse>(
  path: string,
  body: unknown
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  return (await res.json()) as TResponse;
}

export const bstApi = {
  // Initialize tree from list of numbers
  create(list: BstList) {
    return postJson<BstTraversals>("/create", { list });
  },
  // Insert a single value into the tree defined by current list
  insert(list: BstList, value: number) {
    return postJson<BstTraversals>("/insert", { list, value });
  },
  // Remove a single value from the tree defined by current list
  remove(list: BstList, value: number) {
    return postJson<BstTraversals>("/remove", { list, value });
  },
  // Check if value exists in tree
  contains(list: BstList, value: number) {
    return postJson<BstContainsResponse>("/contains", { list, value });
  },
  // Get traversals for given list/tree
  traversals(list: BstList) {
    return postJson<BstTraversals>("/traversals", { list });
  },
};


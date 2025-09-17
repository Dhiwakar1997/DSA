import { BACKEND_URL } from "./backendApi";

export type BstList = number[];

export interface BstCreateResponse {
  bfs: number[]; // server returns bfs as canonical list
  message?: string;
}

export interface BstMutateResponse {
  bfs: number[];
  message?: string;
}

export interface BstContainsResponse {
  contains: boolean;
  message?: string;
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

async function putJson<TResponse>(
  path: string,
  body: unknown
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  return (await res.json()) as TResponse;
}

async function deleteJson<TResponse>(
  path: string,
  body: unknown
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "DELETE",
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
  create(list: BstList) {
    return postJson<BstCreateResponse>("/create", { list });
  },
  insert(list: BstList, value: number) {
    return putJson<BstMutateResponse>("/insert", { list, value });
  },
  remove(list: BstList, value: number) {
    return deleteJson<BstMutateResponse>("/remove", { list, value });
  },
  contains(list: BstList, value: number) {
    return postJson<BstContainsResponse>("/contains", { list, value });
  },
};



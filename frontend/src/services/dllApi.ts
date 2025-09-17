import { BACKEND_URL } from "./backendApi";

export type DllList = number[];

export interface DllResponseBase {
  message?: string;
  list: DllList;
}

export interface DllPopResponse extends DllResponseBase {
  poppedItem?: number;
}

export interface DllGetResponse extends DllResponseBase {
  get_item?: number;
}


// Use centralized backend URL configuration
const BASE_URL: string = `${BACKEND_URL}/DLL/v1`;

async function requestJson<TResponse>(
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: unknown
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  return (await res.json()) as TResponse;
}

export const dllApi = {
  create(list: DllList) {
    return requestJson<DllResponseBase>("/create", "POST", { list });
  },
  append(list: DllList, value: number) {
    return requestJson<DllResponseBase>("/append", "PUT", { list, value });
  },
  prepend(list: DllList, value: number) {
    return requestJson<DllResponseBase>("/prepend", "PUT", { list, value });
  },
  insert(list: DllList, index: number, value: number) {
    return requestJson<DllResponseBase>("/insert", "PUT", { list, index, value });
  },
  remove(list: DllList, index: number) {
    return requestJson<DllResponseBase>("/remove", "DELETE", { list, index });
  },
  reverse(list: DllList) {
    return requestJson<DllResponseBase>("/reverse", "PUT", { list });
  },
  pop(list: DllList) {
    return requestJson<DllPopResponse>("/pop", "DELETE", { list });
  },
  popFirst(list: DllList) {
    return requestJson<DllPopResponse>("/pop_first", "DELETE", { list });
  },
  setValue(list: DllList, index: number, value: number) {
    return requestJson<DllResponseBase>("/set", "PUT", { list, index, value });
  },
  getValue(list: DllList, index: number) {
    // Backend expects GET with JSON body according to DLL_Route.py
    return requestJson<DllGetResponse>("/get", "GET", { list, index });
  },
};

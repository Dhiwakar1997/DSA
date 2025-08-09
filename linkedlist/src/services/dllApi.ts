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

// Use relative path so CRA dev server proxies to Flask and avoids CORS preflight
const BASE_URL: string = process.env.REACT_APP_API_BASE_URL || "/DLL/v1";

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

export const dllApi = {
  create(list: DllList) {
    return postJson<DllResponseBase>("/create", { list });
  },
  append(list: DllList, value: number) {
    return postJson<DllResponseBase>("/append", { list, value });
  },
  prepend(list: DllList, value: number) {
    return postJson<DllResponseBase>("/prepend", { list, value });
  },
  insert(list: DllList, index: number, value: number) {
    return postJson<DllResponseBase>("/insert", { list, index, value });
  },
  remove(list: DllList, index: number) {
    return postJson<DllResponseBase>("/remove", { list, index });
  },
  reverse(list: DllList) {
    return postJson<DllResponseBase>("/reverse", { list });
  },
  pop(list: DllList) {
    return postJson<DllPopResponse>("/pop", { list });
  },
  popFirst(list: DllList) {
    return postJson<DllPopResponse>("/pop_first", { list });
  },
  setValue(list: DllList, index: number, value: number) {
    return postJson<DllResponseBase>("/set", { list, index, value });
  },
  getValue(list: DllList, index: number) {
    return postJson<DllGetResponse>("/get", { list, index });
  },
};

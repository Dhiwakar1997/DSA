import React, { useMemo, useState } from "react";
import "./LinkedListVisualizer.css";
import { dllApi, DllList } from "../../services/dllApi";

function useRemoteDll(initial: DllList = [1, 2, 3]) {
  const [list, setList] = useState<DllList>(initial);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastInfo, setLastInfo] = useState<string | null>(null);
  const [lastLatencyMs, setLastLatencyMs] = useState<number | null>(null);

  const run = async <T,>(fn: () => Promise<T>, onOk?: (res: any) => void) => {
    setLoading(true);
    setError(null);
    setLastInfo(null);
    setLastLatencyMs(null);
    try {
      const start = performance.now();
      const res: any = await fn();
      const end = performance.now();
      setLastLatencyMs(Math.round(end - start));
      if (res && Object.prototype.hasOwnProperty.call(res, "list")) {
        setList((res as { list: DllList }).list);
      }
      if (res?.poppedItem !== undefined)
        setLastInfo(`Popped: ${res.poppedItem}`);
      if (res?.get_item !== undefined)
        setLastInfo(`Got value: ${res.get_item}`);
      onOk?.(res);
    } catch (e: any) {
      setError(e?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    list,
    loading,
    error,
    lastInfo,
    lastLatencyMs,
    create: (initialList: DllList) => run(() => dllApi.create(initialList)),
    append: (value: number) => run(() => dllApi.append(list, value)),
    prepend: (value: number) => run(() => dllApi.prepend(list, value)),
    insert: (index: number, value: number) =>
      run(() => dllApi.insert(list, index, value)),
    remove: (index: number) => run(() => dllApi.remove(list, index)),
    reverse: () => run(() => dllApi.reverse(list)),
    pop: () => run(() => dllApi.pop(list)),
    popFirst: () => run(() => dllApi.popFirst(list)),
    setValue: (index: number, value: number) =>
      run(() => dllApi.setValue(list, index, value)),
    getValue: (index: number) => run(() => dllApi.getValue(list, index)),
    clearLocal: () => setList([]),
  };
}

export default function LinkedListVisualizer() {
  const api = useRemoteDll([1, 2, 3]);
  const [value, setValue] = useState<string>("");
  const [index, setIndex] = useState<string>("");
  const [seed, setSeed] = useState<string>("1,2,3");

  const nodes = useMemo(() => api.list, [api.list]);

  const parseNum = (s: string): number | null => {
    if (s.trim() === "") return null;
    const n = Number(s);
    return Number.isNaN(n) ? null : n;
  };

  const parseSeed = (s: string): number[] => {
    if (!s.trim()) return [];
    return s
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x.length > 0)
      .map((x) => Number(x))
      .filter((n) => !Number.isNaN(n));
  };

  const getNodeHue = (n: number): number => {
    const seed = Math.abs(Math.floor(n));
    // Deterministic pseudo-random in [0,1)
    const hash = (seed * 9301 + 49297) % 233280;
    const t = hash / 233280; // 0..1
    // Restrict hue to violet/purple band ~265°..295°
    return 265 + t * 30;
  };

  const getNodeColor = (n: number): string => {
    const hue = getNodeHue(n);
    // Keep saturation high and lightness dark for rich violet/purple shades
    return `hsl(${hue.toFixed(2)}, 75%, 30%)`;
  };

  return (
    <div className="llv-container">
      <div className="llv-create">
        <input
          id="seed-input"
          aria-label="seed"
          placeholder="e.g. 1,2,3"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
        />
        <button
          onClick={() => api.create(parseSeed(seed))}
          disabled={api.loading}
        >
          Create
        </button>
      </div>

      <div className="llv-viewport">
        {nodes.length === 0 ? (
          <div className="empty">Empty</div>
        ) : (
          <div className="list">
            {nodes.map((n, idx) => (
              <div className="node" key={`${n}-${idx}`}>
                <div
                  className="circle"
                  style={{ backgroundColor: getNodeColor(n) }}
                >
                  <div className="value">{String(n)}</div>
                </div>
                {idx < nodes.length - 1 ? <div className="arrow">→</div> : null}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="llv-meta">
        <span>Length: {nodes.length}</span>
        {api.loading ? (
          <span style={{ marginLeft: 12 }}>Loading...</span>
        ) : null}
        {api.error ? (
          <span style={{ marginLeft: 12, color: "crimson" }}>{api.error}</span>
        ) : null}
        {api.lastInfo ? (
          <span style={{ marginLeft: 12, color: "teal" }}>{api.lastInfo}</span>
        ) : null}
        {api.lastLatencyMs != null ? (
          <span style={{ marginLeft: 12, color: "#555" }}>
            Response: {api.lastLatencyMs} ms
          </span>
        ) : null}
      </div>

      <div className="llv-controls">
        <div className="row fields">
          <div className="field">
            <label htmlFor="value-input">Value</label>
            <input
              id="value-input"
              aria-label="value"
              placeholder="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="index-input">Index</label>
            <input
              id="index-input"
              aria-label="index"
              placeholder="index"
              value={index}
              onChange={(e) => setIndex(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <button
            onClick={() => {
              const v = parseNum(value);
              if (v !== null) api.prepend(v);
            }}
            disabled={api.loading}
          >
            Prepend
          </button>
          <button
            onClick={() => {
              const v = parseNum(value);
              if (v !== null) api.append(v);
            }}
            disabled={api.loading}
          >
            Append
          </button>
          <button
            onClick={() => {
              const i = parseNum(index);
              const v = parseNum(value);
              if (i !== null && v !== null) api.insert(i, v);
            }}
            disabled={api.loading}
          >
            Insert At
          </button>
          <button
            onClick={() => {
              const i = parseNum(index);
              if (i !== null) api.remove(i);
            }}
            disabled={api.loading}
          >
            Remove At
          </button>
          <button onClick={() => api.reverse()} disabled={api.loading}>
            Reverse
          </button>
          <button onClick={() => api.pop()} disabled={api.loading}>
            Pop
          </button>
          <button onClick={() => api.popFirst()} disabled={api.loading}>
            Pop First
          </button>
          <button
            onClick={() => {
              const i = parseNum(index);
              const v = parseNum(value);
              if (i !== null && v !== null) api.setValue(i, v);
            }}
            disabled={api.loading}
          >
            Set
          </button>
          <button
            onClick={() => {
              const i = parseNum(index);
              if (i !== null) api.getValue(i);
            }}
            disabled={api.loading}
          >
            Get
          </button>
          <button onClick={() => api.create([])} disabled={api.loading}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useMemo, useState } from "react";
import "./BSTVisualizer.css";
import { bstApi, BstList, BstTraversals } from "../../services/bstApi";

type TreeNode = {
  value: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
};

function buildBst(values: number[]): TreeNode | null {
  const insertNode = (root: TreeNode | null, value: number): TreeNode => {
    if (root === null) return { value };
    if (value < root.value) {
      root.left = insertNode(root.left ?? null, value);
    } else {
      root.right = insertNode(root.right ?? null, value);
    }
    return root;
  };

  let root: TreeNode | null = null;
  for (const v of values) {
    root = insertNode(root, v);
  }
  return root;
}

function useRemoteBst(initial: BstList = [8, 3, 10, 1, 6, 14, 4, 7, 13]) {
  const [list, setList] = useState<BstList>(initial);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [containsInfo, setContainsInfo] = useState<string | null>(null);
  const [trav, setTrav] = useState<BstTraversals | null>(null);

  const run = async <T,>(fn: () => Promise<T>, onOk?: (res: any) => void) => {
    setLoading(true);
    setError(null);
    setContainsInfo(null);
    try {
      const res: any = await fn();
      if (res) {
        if (Array.isArray(res.bfs)) setList(res.bfs);
        if (
          Array.isArray(res.bfs) ||
          Array.isArray(res.dfs_pre) ||
          Array.isArray(res.dfs_post) ||
          Array.isArray(res.dfs_inorder)
        ) {
          setTrav({
            bfs: res.bfs ?? [],
            dfs_pre: res.dfs_pre ?? [],
            dfs_post: res.dfs_post ?? [],
            dfs_inorder: res.dfs_inorder ?? [],
          });
        }
        if (typeof res.contains === "boolean") {
          setContainsInfo(res.contains ? "Found" : "Not Found");
        }
      }
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
    containsInfo,
    traversals: trav,
    create: (initialList: BstList) => run(() => bstApi.create(initialList)),
    insert: (value: number) => run(() => bstApi.insert(list, value)),
    remove: (value: number) => run(() => bstApi.remove(list, value)),
    contains: (value: number) => run(() => bstApi.contains(list, value)),
    refreshTrav: () => run(() => bstApi.traversals(list)),
    setLocalList: setList,
  };
}

function computeTreeLayout(root: TreeNode | null): Array<
  Array<{ key: string; value: number | null }>
> {
  // Simple BFS by levels layout with spacers (nulls) to keep structure
  if (!root) return [];
  const result: Array<Array<{ key: string; value: number | null }>> = [];
  let queue: Array<{ node: TreeNode | null; key: string }> = [
    { node: root, key: "r" },
  ];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const level: Array<{ key: string; value: number | null }> = [];
    let allNull = true;
    for (let i = 0; i < levelSize; i++) {
      const { node, key } = queue.shift()!;
      if (node) {
        allNull = false;
        level.push({ key, value: node.value });
        queue.push({ node: node.left ?? null, key: `${key}L` });
        queue.push({ node: node.right ?? null, key: `${key}R` });
      } else {
        level.push({ key, value: null });
        queue.push({ node: null, key: `${key}L` });
        queue.push({ node: null, key: `${key}R` });
      }
    }
    result.push(level);
    if (allNull) break; // stop when all nodes in a level are null
  }
  return result;
}

export default function BSTVisualizer() {
  const api = useRemoteBst();
  const [value, setValue] = useState<string>("");
  const [seed, setSeed] = useState<string>(api.list.join(","));

  const tree = useMemo(() => buildBst(api.list), [api.list]);
  const levels = useMemo(() => computeTreeLayout(tree), [tree]);

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

  return (
    <div className="bstv-container">
      <div className="bstv-header">
        <div className="bstv-create">
          <input
            id="seed-input"
            aria-label="seed"
            placeholder="e.g. 8,3,10,1,6,14,4,7,13"
            value={seed}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeed(e.target.value)}
          />
          <button
            onClick={() => api.create(parseSeed(seed))}
            disabled={api.loading}
          >
            Create
          </button>
          <button onClick={() => api.refreshTrav()} disabled={api.loading}>
            Refresh Traversals
          </button>
        </div>
        <div className="bstv-controls">
          <input
            id="value-input"
            aria-label="value"
            placeholder="value"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              const v = parseNum(value);
              if (v !== null) api.insert(v);
            }}
            disabled={api.loading}
          >
            Insert
          </button>
          <button
            onClick={() => {
              const v = parseNum(value);
              if (v !== null) api.remove(v);
            }}
            disabled={api.loading}
          >
            Remove
          </button>
          <button
            onClick={() => {
              const v = parseNum(value);
              if (v !== null) api.contains(v);
            }}
            disabled={api.loading}
          >
            Contains?
          </button>
          {api.containsInfo ? (
            <span className="bstv-info">{api.containsInfo}</span>
          ) : null}
          {api.error ? (
            <span className="bstv-error">{api.error}</span>
          ) : null}
        </div>
      </div>

      <div className="bstv-content">
        <div className="bstv-tree">
          {levels.length === 0 ? (
            <div className="empty">Empty</div>
          ) : (
            <div className="tree-levels">
              {levels.map((level: Array<{ key: string; value: number | null }>, li: number) => (
                <div className="tree-level" key={`level-${li}`}>
                  {level.map((cell: { key: string; value: number | null }) => (
                    <div className="tree-node" key={cell.key}>
                      {cell.value !== null ? (
                        <div className="circle">{String(cell.value)}</div>
                      ) : (
                        <div className="spacer" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bstv-lists">
          <div className="list-block">
            <h4>BFS</h4>
            <div className="list-scroll">
              {(api.traversals?.bfs ?? api.list).join(", ") || "-"}
            </div>
          </div>
          <div className="list-block">
            <h4>DFS Preorder</h4>
            <div className="list-scroll">
              {(api.traversals?.dfs_pre ?? []).join(", ") || "-"}
            </div>
          </div>
          <div className="list-block">
            <h4>DFS Postorder</h4>
            <div className="list-scroll">
              {(api.traversals?.dfs_post ?? []).join(", ") || "-"}
            </div>
          </div>
          <div className="list-block">
            <h4>DFS Inorder</h4>
            <div className="list-scroll">
              {(api.traversals?.dfs_inorder ?? []).join(", ") || "-"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


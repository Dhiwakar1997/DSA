import React, { useEffect, useMemo, useRef, useState } from "react";
import "./BSTVisualizer.css";
import { bstApi, BstList } from "../../services/bstApi";
import { Network, Options } from "vis-network";
import type { Node as VisNode, Edge as VisEdge } from "vis-network";
import { useTheme } from "../../context/ThemeContext";

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

type Traversals = {
  BFS: number[];
  dfs_Pre_Order: number[];
  dfs_Post_Order: number[];
  dfs_In_Order: number[];
};

function useRemoteBst(initial: BstList = [8, 3, 10, 1, 6, 14, 4, 7, 13]) {
  const [list, setList] = useState<BstList>(initial);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [containsInfo, setContainsInfo] = useState<string | null>(null);
  const [trav, setTrav] = useState<Traversals | null>(null);
  

  const run = async <T,>(fn: () => Promise<T>, onOk?: (res: any) => void) => {
    setLoading(true);
    setError(null);
    setContainsInfo(null);
    try {
      const res: any = await fn();
      if (res) {
        // Support both shapes: our normalized { bfs } or backend { BFS }
        if (Array.isArray(res.bfs)) setList(res.bfs);
        if (Array.isArray(res.BFS)) setList(res.BFS);
        if (
          Array.isArray(res.BFS) ||
          Array.isArray(res.dfs_Pre_Order) ||
          Array.isArray(res.dfs_Post_Order) ||
          Array.isArray(res.dfs_In_Order)
        ) {
          setTrav({
            BFS: res.BFS ?? [],
            dfs_Pre_Order: res.dfs_Pre_Order ?? [],
            dfs_Post_Order: res.dfs_Post_Order ?? [],
            dfs_In_Order: res.dfs_In_Order ?? [],
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
    setLocalList: setList,
  };
}

function getTreeDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const leftDepth = getTreeDepth(root.left ?? null);
  const rightDepth = getTreeDepth(root.right ?? null);
  return 1 + Math.max(leftDepth, rightDepth);
}

function getNodeHueFromValue(n: number): number {
  const seed = Math.abs(Math.floor(n));
  const hash = (seed * 9301 + 49297) % 233280;
  const t = hash / 233280; // 0..1 deterministic
  // Keep hues in violet/purple band to match site theme
  return 265 + t * 30; // 265°..295°
}

function readCssVar(varName: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const val = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return val || fallback;
}

function getAccentColor(theme: "light" | "dark"): string {
  // Use fixed, theme-driven accents to avoid timing issues with CSS variable propagation
  return theme === "dark" ? "#c4b5fd" : "#7c3aed";
}

function getStrongTextColor(theme: "light" | "dark"): string {
  // Fixed colors per theme for predictable contrast
  return theme === "dark" ? "#faf7ff" : "#1a0f2e";
}

function getLabelStrokeColor(theme: "light" | "dark"): string {
  return theme === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)";
}

function getNodeBgColor(
  value: number,
  isParent: boolean,
  theme: "light" | "dark"
): { color: string; lightness: number } {
  const hue = getNodeHueFromValue(value).toFixed(2);
  if (theme === "dark") {
    const lightness = isParent ? 35 : 30; // slightly brighter in dark for legibility
    return { color: `hsl(${hue}, 72%, ${lightness}%)`, lightness };
  }
  // light theme: reduce lightness a bit to increase contrast with white stroke and strong text
  const lightness = isParent ? 72 : 66;
  return { color: `hsl(${hue}, 68%, ${lightness}%)`, lightness };
}

function getContrastingTextColor(bgLightness: number, theme: "light" | "dark"): string {
  // Simplify: always white text on dark theme, dark text on light theme
  return theme === "dark" ? "#fafafa" : "#111827";
}

function buildVisGraph(
  root: TreeNode | null,
  nodeSize: number,
  theme: "light" | "dark"
): { nodes: VisNode[]; edges: VisEdge[] } {
  const nodes: VisNode[] = [];
  const edges: VisEdge[] = [];
  if (!root) return { nodes, edges };
  const accent = getAccentColor(theme);
  const edgeBaseColor = accent;
  const labelColor = getStrongTextColor(theme);
  const labelStroke = getLabelStrokeColor(theme);

  const visit = (node: TreeNode | null, key: string) => {
    if (!node) return;
    const hasLeft = !!node.left;
    const hasRight = !!node.right;
    const isParent = hasLeft || hasRight;
    const bg = getNodeBgColor(node.value, isParent, theme);
    nodes.push({
      id: key,
      label: String(node.value),
      shape: "dot",
      borderWidth: 0,
      size: nodeSize,
      color: {
        background: bg.color,
        border: "transparent",
      },
      font: {
        color: labelColor,
        size: Math.max(12, Math.round(nodeSize * 0.45)),
        strokeWidth: 2,
        strokeColor: labelStroke,
      } as any,
    });
    if (node.left) {
      const leftKey = `${key}L`;
      edges.push({ from: key, to: leftKey, color: edgeBaseColor });
      visit(node.left, leftKey);
    }
    if (node.right) {
      const rightKey = `${key}R`;
      edges.push({ from: key, to: rightKey, color: edgeBaseColor });
      visit(node.right, rightKey);
    }
  };

  visit(root, "r");
  return { nodes, edges };
}

export default function BSTVisualizer() {
  const api = useRemoteBst();
  const { theme } = useTheme();
  const [value, setValue] = useState<string>("");
  const [seed, setSeed] = useState<string>(api.list.join(","));
  const didInitRef = useRef<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const networkElRef = useRef<HTMLDivElement | null>(null);
  const networkRef = useRef<Network | null>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const tree = useMemo(() => buildBst(api.list), [api.list]);
  const depth = useMemo(() => getTreeDepth(tree), [tree]);
  const nodeSize = useMemo(() => {
    const base = containerSize.height || 400;
    const levels = Math.max(1, depth);
    const candidate = (base / (levels + 2)) * 0.8;
    const reduced = (candidate / 2) * 0.7; // 30% smaller than current
    return Math.max(10, Math.min(32, Math.round(reduced)));
  }, [containerSize.height, depth]);
  const visData = useMemo(() => buildVisGraph(tree, nodeSize, theme), [tree, nodeSize, theme]);

  // On first mount, fetch traversals by calling create with the default list
  useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;
    api.create(api.list);
  }, [api]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setContainerSize({ width: el.clientWidth, height: el.clientHeight });
    };
    update();
    let ro: ResizeObserver | null = null;
    const ResizeObserverCtor: any = (window as any).ResizeObserver;
    if (typeof ResizeObserverCtor === "function") {
      const roLocal: ResizeObserver = new ResizeObserverCtor((entries: any) => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          setContainerSize({ width: cr.width, height: cr.height });
        }
      });
      roLocal.observe(el);
      ro = roLocal;
    }
    window.addEventListener("resize", update);
    return () => {
      if (el) ro?.unobserve(el);
      window.removeEventListener("resize", update);
    };
  }, []);

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

  useEffect(() => {
    const el = networkElRef.current;
    if (!el) return;
    const { nodes, edges } = visData;
    const data: { nodes: VisNode[]; edges: VisEdge[] } = {
      nodes,
      edges,
    };
    const textColor = getStrongTextColor(theme);
    const edgeColor = getAccentColor(theme);
    const options: Options = {
      layout: {
        hierarchical: {
          enabled: true,
          direction: "UD",
          sortMethod: "directed",
          nodeSpacing: Math.max(120, nodeSize * 4),
          levelSeparation: Math.max(100, nodeSize * 3.5),
          treeSpacing: Math.max(140, nodeSize * 4.5),
        },
      },
      physics: { enabled: false },
      interaction: { zoomView: true, dragView: true },
      nodes: {
        shape: "dot",
        font: {
          color: textColor,
          size: Math.max(12, Math.round(nodeSize * 0.45)),
          strokeWidth: 2,
          strokeColor: getLabelStrokeColor(theme),
        } as any,
      },
      edges: {
        smooth: true,
        color: {
          color: edgeColor,
          highlight: edgeColor,
          hover: edgeColor,
          opacity: 1,
        },
      },
    };
    if (!networkRef.current) {
      networkRef.current = new Network(el, data as any, options);
    } else {
      networkRef.current.setOptions(options);
      networkRef.current.setData(data as any);
      networkRef.current.redraw();
    }
    // fit view to content
    setTimeout(() => networkRef.current?.fit({ animation: { duration: 200, easingFunction: "easeInOutQuad" } }), 0);
  }, [visData, theme, nodeSize]);

  // Force nodes/edges color refresh on theme change without data change
  useEffect(() => {
    if (!networkRef.current) return;
    const { nodes, edges } = visData;
    networkRef.current.setData({ nodes: nodes as any, edges: edges as any } as any);
    networkRef.current.redraw();
  }, [theme]);

  useEffect(() => {
    // refit on container size changes
    if (networkRef.current) {
      networkRef.current.redraw();
      networkRef.current.fit({ animation: { duration: 200, easingFunction: "easeInOutQuad" } });
    }
  }, [containerSize]);

  return (
    <div className="bstv-container">
      <div className="bstv-content">

        {/* Left pane: tree (66vw) */}
        <div className="bstv-tree" ref={containerRef}>

          {visData.nodes.length === 0 ? (
            <div className="empty">Empty</div>
          ) : (
            <div ref={networkElRef} style={{ width: "100%", height: "100%" }} />
          )}
        </div>

        {/* Right pane: controls + lists */}
        <div className="bstv-left">
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
          </div>

          <div className="bstv-lists">
            <div className="list-block">
              <h4>BFS</h4>
              <div className="list-scroll">{(api.traversals?.BFS ?? []).join(", ") || "-"}</div>
            </div>
            <div className="list-block">
              <h4>DFS Preorder</h4>
              <div className="list-scroll">{(api.traversals?.dfs_Pre_Order ?? []).join(", ") || "-"}</div>
            </div>
            <div className="list-block">
              <h4>DFS Postorder</h4>
              <div className="list-scroll">{(api.traversals?.dfs_Post_Order ?? []).join(", ") || "-"}</div>
            </div>
            <div className="list-block">
              <h4>DFS Inorder</h4>
              <div className="list-scroll">{(api.traversals?.dfs_In_Order ?? []).join(", ") || "-"}</div>
            </div>
          </div>

          <div className="bstv-controls">
            <div className="field-row">
              {api.containsInfo ? (
                <span
                  className={`bstv-status ${api.containsInfo === "Found" ? "ok" : "bad"}`}
                >
                  {api.containsInfo}
                </span>
              ) : null}
              <input
                id="value-input"
                aria-label="value"
                placeholder="value"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              />
              {api.error ? (
                <span className="bstv-error">{api.error}</span>
              ) : null}
            </div>
            <div className="button-row">
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
                Contains
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



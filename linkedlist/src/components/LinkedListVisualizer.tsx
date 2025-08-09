import React, { useMemo, useRef, useState } from 'react';
import { LinkedList } from '../structures/LinkedList';
import './LinkedListVisualizer.css';

function useLinkedListState<T>(initialValues: T[] = []) {
  const listRef = useRef(new LinkedList<T>());
  const [, setVersion] = useState(0);

  const forceUpdate = () => setVersion((v) => v + 1);

  const api = useMemo(() => {
    const list = listRef.current;
    initialValues.forEach((v) => list.append(v));

    return {
      list,
      toArray: () => list.toArray(),
      prepend: (v: T) => {
        list.prepend(v);
        forceUpdate();
      },
      append: (v: T) => {
        list.append(v);
        forceUpdate();
      },
      insertAt: (i: number, v: T) => {
        list.insertAt(i, v);
        forceUpdate();
      },
      removeAt: (i: number) => {
        list.removeAt(i);
        forceUpdate();
      },
      removeValue: (v: T) => {
        list.removeValue(v);
        forceUpdate();
      },
      reverse: () => {
        list.reverse();
        forceUpdate();
      },
      clear: () => {
        list.clear();
        forceUpdate();
      },
      length: () => list.length,
    };
    // We only want to init once. eslint disabled on purpose.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return api;
}

export default function LinkedListVisualizer() {
  const api = useLinkedListState<number>([1, 2, 3]);
  const [value, setValue] = useState<string>('');
  const [index, setIndex] = useState<string>('');

  const nodes = api.toArray();

  return (
    <div className="llv-container">
      <h2>Linked List Visualizer</h2>

      <div className="llv-controls">
        <div className="row">
          <input
            aria-label="value"
            placeholder="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => value !== '' && api.prepend(Number(value))}>Prepend</button>
          <button onClick={() => value !== '' && api.append(Number(value))}>Append</button>
          <button
            onClick={() => {
              const i = Number(index);
              if (!Number.isNaN(i) && value !== '') api.insertAt(i, Number(value));
            }}
          >
            Insert At
          </button>
        </div>
        <div className="row">
          <input
            aria-label="index"
            placeholder="index"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
          <button
            onClick={() => {
              const i = Number(index);
              if (!Number.isNaN(i)) api.removeAt(i);
            }}
          >
            Remove At
          </button>
          <button onClick={() => value !== '' && api.removeValue(Number(value))}>Remove Value</button>
          <button onClick={api.reverse}>Reverse</button>
          <button onClick={api.clear}>Clear</button>
        </div>
      </div>

      <div className="llv-viewport">
        {nodes.length === 0 ? (
          <div className="empty">Empty</div>
        ) : (
          <div className="list">
            {nodes.map((n, idx) => (
              <div className="node" key={n.id}>
                <div className="circle">
                  <div className="value">{String(n.value)}</div>
                </div>
                {idx < nodes.length - 1 ? <div className="arrow">→</div> : null}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="llv-meta">
        <span>Length: {api.length()}</span>
      </div>
    </div>
  );
}
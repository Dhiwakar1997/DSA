export interface LinkedListNode<T> {
  id: string;
  value: T;
  next: LinkedListNode<T> | null;
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;
  private size: number = 0;

  get length(): number {
    return this.size;
  }

  getHead(): LinkedListNode<T> | null {
    return this.head;
  }

  getTail(): LinkedListNode<T> | null {
    return this.tail;
  }

  toArray(): Array<LinkedListNode<T>> {
    const nodes: Array<LinkedListNode<T>> = [];
    let current = this.head;
    while (current) {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value: T): void {
    const node: LinkedListNode<T> = this.createNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size += 1;
  }

  append(value: T): void {
    const node: LinkedListNode<T> = this.createNode(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  insertAt(index: number, value: T): boolean {
    if (index < 0 || index > this.size) return false;
    if (index === 0) {
      this.prepend(value);
      return true;
    }
    if (index === this.size) {
      this.append(value);
      return true;
    }

    const node: LinkedListNode<T> = this.createNode(value);
    let prev: LinkedListNode<T> | null = null;
    let current = this.head;
    let i = 0;
    while (current && i < index) {
      prev = current;
      current = current.next;
      i += 1;
    }
    if (!prev) return false;
    prev.next = node;
    node.next = current;
    this.size += 1;
    return true;
  }

  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size || !this.head) return null;
    let removedValue: T | null = null;

    if (index === 0) {
      removedValue = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size -= 1;
      return removedValue;
    }

    let prev = this.head;
    let i = 0;
    while (prev && i < index - 1) {
      prev = prev.next as LinkedListNode<T>;
      i += 1;
    }
    const target = prev?.next || null;
    if (!prev || !target) return null;

    removedValue = target.value;
    prev.next = target.next;
    if (target === this.tail) {
      this.tail = prev;
    }
    this.size -= 1;
    return removedValue;
  }

  removeValue(value: T): number {
    if (!this.head) return -1;

    if (this.areEqual(this.head.value, value)) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.size -= 1;
      return 0;
    }

    let prev = this.head;
    let index = 0;
    while (prev.next) {
      if (this.areEqual(prev.next.value, value)) {
        if (prev.next === this.tail) this.tail = prev;
        prev.next = prev.next.next;
        this.size -= 1;
        return index + 1;
      }
      prev = prev.next;
      index += 1;
    }

    return -1;
  }

  findIndex(value: T): number {
    let idx = 0;
    let current = this.head;
    while (current) {
      if (this.areEqual(current.value, value)) return idx;
      current = current.next;
      idx += 1;
    }
    return -1;
  }

  reverse(): void {
    let prev: LinkedListNode<T> | null = null;
    let current = this.head;
    this.tail = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  private createNode(value: T): LinkedListNode<T> {
    return {
      id: this.generateId(),
      value,
      next: null,
    };
  }

  private areEqual(a: T, b: T): boolean {
    return a === (b as unknown as T);
  }

  private generateId(): string {
    return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${this.size}`;
  }
}
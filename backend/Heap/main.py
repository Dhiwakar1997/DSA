class MaxHeap:
    def __init__(self):
        self.heap = []

    def _left_child(self, index):
        return 2*index +1
    
    def _right_child(self, index):
        return 2*index +2
    
    def _parent(self,index):
        return (index-1)//2
    
    def _swap(self, index1, index2):
        self.heap[index1], self.heap[index2]= self.heap[index2],self.heap[index1]
    
    def insert(self,val):
        self.heap.append(val)
        current = len(self.heap)-1
        while current!=0 and self.heap[current]>self.heap[self._parent(current)]:
            self._swap(current,self._parent(current))
            current = self._parent(current)
    
    def remove(self):
        if len(self.heap)==0:
            return None
        if len(self.heap)==1:
            return self.heap.pop()

        max_val = self.heap[0]
        self.heap[0]=self.heap.pop()
        self._sink_down(0)

        return max_val
    
    def _sink_down(self,index):
        max_index = index
        while True:
            left_index = self._left_child(index)
            right_index = self._right_child(index)

            if left_index<len(self.heap) and self.heap[left_index]> self.heap[max_index]:
                max_index = left_index
            if right_index<len(self.heap) and self.heap[right_index]>self.heap[max_index]:
                max_index = right_index
            
            if max_index!= index:
                self._swap(max_index,index)
                index = max_index
            else:
                return True

class MinHeap:
    def __init__(self):
        self.heap = []

    def _left_child(self, index):
        return 2*index +1
    
    def _right_child(self, index):
        return 2*index +2
    
    def _parent(self,index):
        return (index-1)//2
    
    def _swap(self, index1, index2):
        self.heap[index1], self.heap[index2]= self.heap[index2],self.heap[index1]
    
    def insert(self,val):
        self.heap.append(val)
        current = len(self.heap)-1
        while current!=0 and self.heap[current]<self.heap[self._parent(current)]:
            self._swap(current,self._parent(current))
            current = self._parent(current)
    
    def remove(self):
        if len(self.heap)==0:
            return None
        if len(self.heap)==1:
            return self.heap.pop()

        max_val = self.heap[0]
        self.heap[0]=self.heap.pop()
        self._sink_down(0)

        return max_val
    
    def _sink_down(self,index):
        min_index = index
        while True:
            left_index = self._left_child(index)
            right_index = self._right_child(index)

            if left_index<len(self.heap) and self.heap[left_index]< self.heap[min_index]:
                min_index = left_index
            if right_index<len(self.heap) and self.heap[right_index]<self.heap[min_index]:
                min_index = right_index
            
            if min_index!= index:
                self._swap(min_index,index)
                index = min_index
            else:
                return True

obj = MinHeap()
for i in [99,72,61,58,100]:
    obj.insert(i)
obj.insert(75)
print(obj.remove())
print(obj.heap)

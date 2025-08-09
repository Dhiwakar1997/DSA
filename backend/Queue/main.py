class Node:

    def __init__(self,val):
        self.value = val
        self.next = None

class Queue:
    def __init__(self,val:list):
        self.first = None
        self.last = None
        self.length = 0
        for i in val:
            self.enqueue(i)

    def print_queue(self):
        temp = self.first
        while temp is not None:
            print(f'{temp.value}->',end="")
            temp = temp.next
    
    def enqueue(self, val):
        new_node =Node(val)

        if self.first is None:
            self.first = new_node
            self.last = new_node
        else:
            self.last.next = new_node
            self.last = new_node

        self.length+=1
        return True
    
    def dequeue(self):
        popped_node = self.first

        if self.length==0:
            pass
        elif self.length ==1:
            self.first=None
            self.last = None
            self.length-=1
        else:
            self.first = self.first.next
            popped_node.next = None

        self.length-=1
        return popped_node

q = Queue([1,2,3,4,5,6,7,8,9])
q.print_queue()

temp = q.first
while temp:
    temp = temp.next
    print(q.dequeue().value)

q.print_queue()
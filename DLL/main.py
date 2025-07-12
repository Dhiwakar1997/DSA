class Node:
    def __init__(self,val):
        self.value = val
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self,DLL: list):
        self.head = None
        self.tail = None
        self.length = 0
        for i in DLL:
            self.append(i)
    
    def append(self, val):
        new_node = Node(val)

        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node

        self.length += 1
        return True
    
    def pop(self):
        out = self.tail
        if self.tail is None:
             return out
        elif self.tail is self.head:
            self.tail= None
            self.head = None
            self.length-=1
            return out
        else:
            self.tail.prev.next = None
            self.tail = self.tail.prev
            out.prev = None
            self.length-=1
            return out
    
    def prepend(self, val):
        new_node = Node(val)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        self.length+=1
        return True
    
    def pop_first(self):
        out = self.head
        if self.head is None:
            return out
        elif self.head is self.tail:
            self.head = None
            self.tail = None
        else:
            self.head.next.prev = None
            self.head = self.head.next
        self.length-=1
        out.next = None
        return out
    
    def get(self, index:int):
        if index<0 or index>=self.length:
            return None
        if index< self.length/2:
            temp = self.head
            for _ in range(index):
                temp = temp.next
        else:
            temp = self.tail
            for _ in range(self.length - index-1):
                temp = temp.prev
        return temp
    
    def set_value(self, index:int, value):
        if index<0 or index>=self.length:
            return None
        if index< self.length/2:
            temp = self.head
            for _ in range(index):
                temp = temp.next
        else:
            temp = self.tail
            for _ in range(self.length - index-1):
                temp = temp.prev
        temp.value = value
        return temp
    
    def insert(self, index:int, value):
        if index<0 or index>self.length:
            return False
        elif index==0:
            return self.prepend(value)
        elif index == self.length:
            return self.append(value)
        
        new_node = Node(value)
        before = self.get(index-1)
        after = before.next

        before.next = new_node
        new_node.prev = before
        after.prev = new_node
        new_node.next = after

        self.length+=1
        return True
    
    def remove(self, index:int):
        if index<0 or index>self.length:
            return False
        if index==0:
            return self.pop_first()
        if index == self.length-1:
            return self.pop()
        
        temp = self.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev

        temp.next = None
        temp.prev = None
        self.length -=1
        return temp
    
    def reverse(self):
        
        if self.head is self.tail:
            return False
            
        temp=self.head.next
        
        for _ in range(self.length-1):
            
            before = temp.prev
            after = temp.next 
            
            before.prev = temp
            temp.next =  before
            
            temp = after
        
        temp = self.head
        self.head = self.tail
        self.tail = temp
        
        self.head.prev = None
        self.tail.next = None
    
    def print_list(self):
        temp = self.head
        while temp is not None:
            print(f'{temp.value}->',end="")
            temp = temp.next

dll = DoublyLinkedList([1,2,3,4,5,6])
dll.reverse()
dll.print_list()
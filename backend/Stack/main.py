class Node:

    def __init__(self,val):
        self.value = val
        self.next = None

class Stack:
    def __init__(self,val:list):
        self.top = None
        self.height = 0
        for i in val:
            self.push(i)

    def print_stack(self):
        temp = self.top
        while temp is not None:
            print(f'{temp.value}->',end="")
            temp = temp.next

    def push(self, val):
        new_node = Node(val)
        new_node.next = self.top 
        self.top = new_node   
        self.height+=1     

    def pop(self):
        if self.length==0:
            return None
        popped_node = self.top
        self.top = self.top.next
        self.height-=1 
        return popped_node


s1 = Stack([1,2,3,4])

s1.print_stack()
print()
s1.push(69)
s1.push(96)
print(s1.pop().value)
s1.print_stack()

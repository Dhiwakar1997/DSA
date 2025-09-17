class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def __str__(self):
        return f'{self.value}'

class BST:

    def __init__(self,BST_list: list):
        self.root = None
        self.depth = 0
        for i in BST_list:
            self.insert(i)
    
    def insert(self,value):
        new_node = Node(value)
        temp = self.root

        if temp is None:
            self.root = new_node
            self.depth=1
            return True
        depth = 1
        while True:
            depth+=1
            if(temp.value==value):
                return False

            if(temp.value>value):
                if temp.left is None:
                    temp.left = new_node
                    self.depth = self.depth if self.depth > depth else depth
                    return True
                temp = temp.left
            else:
                if temp.right is None:
                    temp.right = new_node
                    self.depth = self.depth if self.depth > depth else depth
                    return True
                temp = temp.right
                
    def contains(self, value):
        temp = self.root

        while temp is not None:

            if temp.value==value:
                return True
            
            if temp.value>value:
                temp = temp.left
            else:
                temp = temp.right

        return False
    
    def r_contains(self, val):
        return self.__r_contains(self.root,val)
    
    def __r_contains(self, node, val):
        if node == None:
            return False
        if node.value==val:
            return True
        
        if node.value > val:
            return self.__r_contains(node.left,val)
        elif node.value<val:
            return self.__r_contains(node.right,val)
    
    def r_insert(self,val):
        new_node = Node(val)
        return self.__r_insert(self.root, new_node)

    def __r_insert(self,current_node,new_node):
        if current_node==None:
            self.root = new_node
            return True
        if current_node.value==new_node.value:
            return False
        if new_node.value < current_node.value:
            if current_node.left is None:
                current_node.left = new_node
                return True
            else:
                return self.__r_insert(current_node.left,new_node)
        else:
            if current_node.right is None:
                current_node.right = new_node
                return True
            else:
                return self.__r_insert(current_node.right,new_node)
            
    def delete_node(self, val):
        return self.__delete_node(self.root,val)
    
    def __delete_node(self, current_node,val):
        if current_node == None:
            return None
        if val< current_node.value:
            current_node.left = self.__delete_node(current_node.left,val)
        elif val>current_node.value:
            current_node.right = self.__delete_node(current_node.right,val)
        else:
            if current_node.left==None and current_node.right==None:
                return None
            elif current_node.left == None:
                return current_node.right
            elif current_node.right == None:
                return current_node.left
            else:
                sub_tree_min = self.min_value(current_node.right)
                current_node.value = sub_tree_min.value
                current_node.right = self.__delete_node(current_node.right, sub_tree_min.value)
        return current_node
    
    def min_value(self, current_node):
        if current_node.left == None:
            return current_node
        return self.min_value(current_node.left)
    
    def BFS(self):
        current_node = self.root
        queue = []
        result = []
        queue.append(current_node)

        while len(queue)>0:
            current_node = queue.pop(0)
            result.append(current_node.value)
            if current_node.left is not None:
                queue.append(current_node.left)
            if current_node.right is not None:
                queue.append(current_node.right)
        return result
    
    def dfs_Pre_Order(self):
        result = []

        def traverse(current_node):
            result.append(current_node.value)
            if current_node.left is not None:
                traverse(current_node.left)
            if current_node.right is not None:
                traverse(current_node.right)

        traverse(self.root)
        return result
    
    def dfs_Post_Order(self):
        result = []

        def traverse(current_node):
            if current_node.left is not None:
                traverse(current_node.left)
            if current_node.right is not None:
                traverse(current_node.right)
            result.append(current_node.value)

        traverse(self.root)
        return result

    def dfs_In_Order(self):
        result = []

        def traverse(current_node):
            if current_node.left is not None:
                traverse(current_node.left)
            result.append(current_node.value)
            if current_node.right is not None:
                traverse(current_node.right)


        traverse(self.root)
        return result

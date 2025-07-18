class Graph:
    def __init__(self):
        self.adj_list = {}
    
    def print_graph(self):
        for vertex in self.adj_list:
            print(f"{vertex}: {self.adj_list[vertex]}")
    
    def add_vertex(self,vertex):
        if vertex not in self.adj_list:
            self.adj_list[vertex]=[]
            return True
        return False
    
    def add_edge(self,v1,v2):
        if v1 in self.adj_list and v2 in self.adj_list:
            self.adj_list[v1].append(v2)
            self.adj_list[v2].append(v1)
            return True
        return False
    
    def remove_edge(self,v1,v2):
        if v1 in self.adj_list and v2 in self.adj_list:
            try:
                self.adj_list[v1].remove(v2)
                self.adj_list[v2].remove(v1)
            except ValueError:
                pass
            return True
        return False
    
    def remove_vertex(self, vertex):
        if vertex in self.adj_list:
            v1 = self.adj_list[vertex]
            for v in v1:
                self.adj_list[v].remove(vertex)
            self.adj_list.pop(vertex)
            return True
        return False
    
obj = Graph()
obj.add_vertex('A')
obj.add_vertex('B')
obj.add_edge('A','B')
obj.print_graph()
obj.remove_vertex('B')
obj.print_graph()
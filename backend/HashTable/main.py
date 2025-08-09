class HashTable:
    def __init__(self, size=7):
        self.data_map = [[] for _ in range(size)]
    
    def __hash(self,key):
        my_hash =0
        for letter in key:
            my_hash = (my_hash+ord(letter)*23) % len(self.data_map)
        return my_hash
    
    def set_item(self, key,val):
        key_hash = self.__hash(key)
        self.data_map[key_hash].append((key,val))
    
    def get_item(self, key):
        key_hash = self.__hash(key)
        key_address = self.data_map[key_hash]

        for k, v in key_address:
            if k==key:
                return v
    
    def keys(self):
        key_list =[]
        for address in self.data_map:
            for k,v in address:
                key_list.append(k)
        return key_list
        
    def print_table(self):
        for i,v in enumerate(self.data_map):
            print(i,": ",v)

h = HashTable()
h.set_item("test5",756)
h.set_item("test1",6)
h.set_item("test2",5)
print(h.get_item("test56"))
print(h.keys())
h.print_table()
def selectionSort(MyList):
    for i in range(len(MyList)-1):
        min_index = i
        for j in range(i+1,len(MyList)):
            if MyList[j]< MyList[i]:
                min_index = j
        if i !=min_index:
            temp = MyList[i]
            MyList[i]= MyList[min_index]
            MyList[min_index]=temp
    return MyList

print(selectionSort([3,1,44,35,21,10,0]))
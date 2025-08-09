def bubbleSort(MyList):
    for i in range(len(MyList)-1,0,-1):
        for j in range(i):
            if MyList[j]>MyList[j+1]:
                temp = MyList[j]
                MyList[j]=MyList[j+1]
                MyList[j+1]= temp
    return MyList

print(bubbleSort(list(range(10,0,-2))))
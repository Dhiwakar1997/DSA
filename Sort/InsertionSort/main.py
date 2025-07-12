def insertionSort(MyList):  
    for i in range(1,len(MyList)):
        temp = MyList[i]
        j=i-1
        while temp<MyList[j] and j>-1:
            MyList[j+1] = MyList[j]
            MyList[j]= temp
            j-=1
    return MyList

print(insertionSort([3,1,44,35,21,10,0]))
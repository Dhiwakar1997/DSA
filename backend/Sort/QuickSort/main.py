def pivot(my_list,pivot_index, end_index):
    swap_index = pivot_index
    for i in range(pivot_index+1,end_index+1):
        if my_list[i]<my_list[pivot_index]:
            swap_index+=1
            swap(my_list,swap_index,i)
    swap(my_list,swap_index,pivot_index)
    return swap_index

def swap(myList,i1,i2):
    temp = myList[i1]
    myList[i1]=myList[i2]
    myList[i2]=temp

def quickSortHelper(my_list,left,right):
    if left<right:
        pivot_index = pivot(my_list,left,right)
        quickSortHelper(my_list,left,pivot_index-1)
        quickSortHelper(my_list,pivot_index+1,right)
    return my_list

def quickSort(my_list):
    return quickSortHelper(my_list,0,len(my_list)-1)

l = [4,3,5,2,51,6,1,9]

print(quickSort(l))
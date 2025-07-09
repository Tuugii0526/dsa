class MergeSort:
    def sort(self,arr,left,right):
        if left < right:
            mid= left+ (right-left)//2
            self.sort(arr,left,mid)
            self.sort(arr,mid+1,right)
            self.merge(arr,left,mid,right)
    def merge(self,arr,left,mid,right):
        i=j=0
        current=left
        temp1= arr[left:(mid+1)]
        temp2= arr[(mid+1):(right+1)]
        temp1Length=len(temp1)
        temp2Length=len(temp2)
        print('first',arr)
        while i < temp1Length and j < temp2Length : 
            if temp1[i] < temp2[j]:
                arr[current]=temp1[i]
                i+=1
            else :
                arr[current]=temp2[j]
                j+=1
            current+=1
        while i < temp1Length:
            arr[current]=temp1[i]
            i+=1
            current+=1
        while j < temp2Length:
            arr[current]=temp2[j]
            j+=1
            current+=1
        print('second',arr)
soft = MergeSort()
arr=[4,2,5,9,1]
soft.sort(arr,0,len(arr)-1)
print(arr)
        
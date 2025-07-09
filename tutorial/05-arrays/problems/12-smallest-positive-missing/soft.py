class Solution:
    def sort(self,arr,leftIndex,rightIndex):
        if leftIndex<rightIndex:
            mid= leftIndex+((rightIndex-leftIndex)//2)
            self.sort(arr,leftIndex,mid)
            self.sort(arr,mid+1,rightIndex)
            self.merge(arr,leftIndex,mid,rightIndex)
    def merge(self,arr,leftIndex,mid,rightIndex):
        i=j=0
        current=leftIndex
        temp1Length=mid-leftIndex+1
        temp2Length=rightIndex-mid
        temp1=arr[leftIndex:leftIndex+temp1Length]
        temp2=arr[mid+1:mid+1+temp2Length]
        while i < temp1Length and j < temp2Length:
            if temp1[i] < temp2[j]:
                arr[current]=temp1[i]
                i+=1
            else:
                arr[current]=temp2[j]
                j+=1
            current+=1
        while i < temp1Length:
            arr[current]=temp1[i]
            i+=1
            current+=1
        while j<temp2Length:
            arr[current]=temp2[j]
            j+=1
            current+=1
    def missingNumber(self, arr):
        length=len(arr)
        print('length:',length)
        self.sort(arr,0,length-1)
        print(arr)
        smallPositive=1
        for i in range(length):
            if smallPositive==arr[i]:
                smallPositive+=1
        return smallPositive
soft = Solution()
arr=[2, -3, 4, 1, 1, 7]
print(soft.missingNumber(arr))
class SoftP0503:
    def binary(self,dec,arr,currElement):
        start =0
        end=len(dec)-1
        res=dec[-1]
        while start<=end:
            mid=start+(end-start)//2
            if currElement < arr[mid]:
                start=mid+1
            else: 
                end=mid-1
                res=dec[mid]
        return res
    def solution(self,arr):
        dec =[0]
        maxDiff=0
        for i in  range(1,len(arr)):
            if arr[i] < arr[dec[-1]] :
                dec.append(i)
            else:
                minimumIndex=self.binary(dec,arr,arr[i])
                maxDiff=max(maxDiff,i-minimumIndex)
        return maxDiff
softp0503=SoftP0503()
print(softp0503.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]))
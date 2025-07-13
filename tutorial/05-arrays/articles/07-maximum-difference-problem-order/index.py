class Soft05a07:
    def solution(self,arr):
        length=len(arr)
        min=arr[0]
        maxDif=0
        for i in range(1,length):
            if arr[i] < min:
                min=arr[i]
            else :
                maxDif=max(maxDif,arr[i]-min)
        return maxDif
soft=Soft05a07()
arr= [2, 3, 10, 6, 4, 8, 1]
print(soft.solution(arr))
class SoftP050304:
    def solution(self,arr):
        length=len(arr)
        rMax=[0]*length
        rMax[length-1]=arr[length-1]
        for i in range(length-2,-1,-1):
            rMax[i] = max(arr[i],rMax[i+1])
        i,j,minEl,mx=0,0,arr[0],0
        while i <length and j < length:
            if minEl <= rMax[j]:
                mx =max(mx,j-i)
                j+=1
            elif  i+ 1 <length:
                i+=1
                minEl= min(minEl,arr[i])
        return mx
soft= SoftP050304()
print(soft.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]))
class SoftP050303:
    def solution(self,arr):
        length=len(arr)
        lMin=[0]*length
        rMax=[0]*length
        lMin[0]=arr[0]
        rMax[length-1]=arr[length-1]
        for i in range(1,length):
            lMin[i]=min(lMin[i-1],arr[i])
        for i in range(length-2,-1,-1):
            print(i)
            rMax[i]=max(rMax[i+1],arr[i])
        i=0
        j=0
        mx=0
        while i <length and j<length:
            if lMin[i]<=rMax[j]:
                mx=max(mx,j-i)
                j+=1
            else:
                i+=1
        return mx
softp050303=SoftP050303()        
softp050303.solution([34, 8, 10, 3, 2, 80, 30, 33, 1])
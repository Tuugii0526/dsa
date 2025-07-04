class Soft05p04:
    def solution(self,arr):
        mx,secMax=0,-1
        for i in range(len(arr)):
            if mx <  arr[i]:
                secMax= mx
                mx=arr[i]
            else:
                if mx != arr[i]:
                    secMax= max(secMax,arr[i])
        return [mx,secMax]
arr=[4,4]
soft= Soft05p04()
print(soft.solution(arr))
class SoftP050302:
    def solution(self,arr):
        valueIndexArray=[]
        for i in range(len(arr)):
            valueIndexArray.append([arr[i],i])
        valueIndexArray.sort(key= lambda x:x[0] )
        mx=0
        minIndex= valueIndexArray[0][1]
        for i in range(1,len(valueIndexArray)):
            mx=max(mx,valueIndexArray[i][1]-minIndex)
            minIndex=min(minIndex,valueIndexArray[i][1])
        return mx
soft= SoftP050302()
print(soft.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]))
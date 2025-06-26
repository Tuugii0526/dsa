class Soft05p0305: 
    def solution(self,arr):
        length=len(arr)
        stack=[0]
        for i in range(1,length):
            if arr[stack[-1]] >= arr[i]:
                stack.append(i)
        mx=0 
        for i in range(length-1,-1,-1):
            while  stack and  arr[stack[-1]]<=arr[i]:
                 mx= max(mx,i-stack[-1])
                 stack.pop()
        return mx
soft05p0305= Soft05p0305()
print(soft05p0305.solution([34, 8, 10, 3, 2, 80, 30, 33, 1]))
    
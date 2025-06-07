class Soft0412:
    def solution(self,numbers,index,sum):
        if index==0:
            return  1 if sum==0 else 0
        return self.solution(numbers,index-1,sum-numbers[index-1])+self.solution(numbers,index-1,sum)

soft0412 = Soft0412()
numbers=[1,2,3]
print(soft0412.solution(numbers,len(numbers),1))
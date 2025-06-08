class SoftP0408:
    def digitSum(self,num):
        sum=0
        while num>0:
            sum+=num%10
            num=num//10
        return sum
    def solution(self,num):
        if num/10 <1: return num
        return self.solution(self.digitSum(num))
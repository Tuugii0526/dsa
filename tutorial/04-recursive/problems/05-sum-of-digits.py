class SoftP0405:
    def solution(self,n):
        if n<=0:return 
        return self.solution(int(n/10))+(n%10)
class SoftP0409: 
    def isLucky(self,n):
        return self.solution(2,n)
    def solution(self,current,n):
        if current > n:
            return 1
        if current %n==0:
            return 0
        occurences = n //current
        return self.solution(current+1,n-occurences)
    
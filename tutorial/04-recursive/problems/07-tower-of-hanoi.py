class SoftP0407:
    def solution(self,n,fromm,aux,to):
        if(n==0):
            return 0
        res1= self.solution(n-1,fromm,to,aux)
        res2= self.solution(n-1,aux,fromm,to)
        return res1+res2+1
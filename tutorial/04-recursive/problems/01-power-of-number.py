class SoftP0401:
    def getReverse(self,n):
        res=0
        while n>0:
             res*=10
             res+=n%10
             n=int(n/10)
        return res
    def getReversePower(self,n,power):
        res=1
        while power>0:
            if power & 1:
                res*=n
            n*=n
            power>>=1
        return res
    def solution(self,n):
        return self.getReversePower(n,self.getReverse(n))

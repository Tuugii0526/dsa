class SoftP0402:
    def fib(self,n):
        if n ==1 or n==2:
            return 1
        else:
            return self.fib(n-1)+self.fib(n-2)
    def fib2(self,n):
        if n==1:
            return 0,1
        if n==2:
            return 0,1
        if n==3:
            return 1,1
        a,b=self.fib2(n-1)
        return b,a+b
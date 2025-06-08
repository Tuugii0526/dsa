class SoftP0406:
    def solution(self,str,currIndex,compound):
        if len(str)==currIndex:
            return [compound]
        list1 = self.solution(str,currIndex+1,compound)
        list2=self.solution(str,currIndex+1,compound)
        return [*list1,*list2]
    
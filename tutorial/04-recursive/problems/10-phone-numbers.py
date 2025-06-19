class SoftP0410:
    def __init__(self):
        self.numbers =[i for i in range(2,10)]
        self.letters=self.getLetters()
        self.numToLetters={k:v for k,v in zip(self.numbers,self.letters)}
    def getLetters(self):
        lastCharCode=97
        listLetters=[]
        for i in self.numbers:
            lettersLeght=3
            if i==7 or i==9:
                lettersLeght=4
            letters=''
            for i in range(lastCharCode,lastCharCode+lettersLeght):
                letters+=chr(i)
            listLetters.append(letters)
            lastCharCode+=lettersLeght
        return listLetters
    def solution(self,arr):
        return self._solution(arr,"")
    def _solution(self,arr,subStr):
        if len(arr)==len(subStr):
            return [subStr]
        result=[]
        currentNumLetters=self.numToLetters[arr[len(subStr)]]
        for i in range(len(currentNumLetters)):
            subList= self._solution(arr,subStr+currentNumLetters[i])
            result=[*result,*subList]
        return result
softp0410= SoftP0410()
print(softp0410.solution([2,3,4,5,6,7,8,9]))        
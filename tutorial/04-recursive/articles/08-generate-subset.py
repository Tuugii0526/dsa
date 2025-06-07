class Soft0408:
    def solution(self,string:str,index:int,substring:str):
        if index == len(string):
            print(substring)
            return
        self.solution(string,index+1,substring+string[index])
        self.solution(string,index+1,substring)
soft0408= Soft0408()
soft0408.solution("abc",0,"")
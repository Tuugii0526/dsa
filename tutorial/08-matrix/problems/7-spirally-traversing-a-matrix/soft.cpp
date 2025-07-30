#include<iostream>
#include<vector>
using namespace std;
class Solution {
    public:
      vector<int> spirallyTraverse(vector<vector<int>> &mat) {
        int firstRow=0;
        int lastRow=mat.size()-1;
        int firstCol=0;
        int lastCol=mat[0].size()-1;
        vector<int> result;
        int counter=0;
      while(firstRow <=lastRow || firstCol <= lastCol){
        
            for(int i=firstCol;i<=lastCol;i++){
            result.push_back(mat[firstRow][i]);
        }
        if(firstCol==lastCol)break;
        for(int i=firstRow+1;i<=lastRow;i++){
            result.push_back(mat[i][lastCol]);
        }
        if(firstRow==lastRow)break;
        for(int i=lastCol-1;i>=firstCol;i--){
          result.push_back(mat[lastRow][i]);
        }
        for(int i=lastRow-1;i>firstRow;i--){
            result.push_back(mat[i][firstCol]);
        }
        firstRow++;
        lastRow--;
        firstCol++;
        lastCol--;
        counter++;
      }
      cout << "WORKED:"<< counter<<endl;
      return result;

  }
};
  int main(){
    Solution soft;
    vector<vector<int>> vec={{1 ,2 ,3 ,4 ,5 ,6},{7 ,8 ,9 ,10 ,11 ,12},{
13, 14, 15, 16, 17, 18
    }};
vector<int> result=soft.spirallyTraverse(vec);
for(auto num:result){
  cout << num <<",";
}
    return 0;
  }
  

#include<iostream>
#include<vector>
using namespace std;
class Solution {
    public: bool searchInMatrix(vector<vector<int>> &mat, int x){
int rowL=mat.size();
int colL=mat[0].size();
for(int i=0;i<rowL;i++){
    for(int j=0;j<colL;j++){
        if(mat[rowL][colL]==x){
            return true;
        }
    }
}
return false;
    }
};
int main(){
    Solution soft;
    vector<vector<int>> mat={{1, 5, 9}, {14, 20, 21}, {30, 34, 43}};
     bool result= soft.searchInMatrix(mat,5);
     cout << "result:"<<result;
     return 0;
}
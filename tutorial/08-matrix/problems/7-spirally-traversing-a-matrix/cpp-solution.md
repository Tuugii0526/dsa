cpp solution

```
class Solution {
  public:
    vector<int> spirallyTraverse(vector<vector<int>> &mat) {
        // code here
        int firstRow=0;
        int lastRow=mat.size()-1;
        int firstCol=0;

        int lastCol=mat[0].size()-1;
        vector<int> result;
      while(firstRow <=lastRow && firstCol <= lastCol){
           for(int i=firstCol;i<=lastCol;i++){
            result.push_back(mat[firstRow][i]);
           };
           firstRow++;
           for(int i=firstRow;i<=lastRow;i++){
               result.push_back(mat[i][lastCol]);
           }
           lastCol--;
           if(firstRow<=lastRow){
               for(int i=lastCol;i>=firstCol;i--){
                   result.push_back(mat[lastRow][i]);
               }
               lastRow--;
           }
           if(firstCol<=lastCol){
               for(int i= lastRow;i>=firstRow;i--){
                   result.push_back(mat[i][firstCol]);
               }
               firstCol++;
           }
      }
      return result;
    }
};
```

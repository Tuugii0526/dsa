cpp solution

```
class Solution {
  public:
    vector<int> boundaryTraversal(vector<vector<int>>& mat) {
        // code here
        int row_size=mat.size();
        int column_size=mat[0].size();
        int first_row=0;
        int last_row=row_size-1;
        int first_column=0;
        int last_column=column_size-1;
        vector<int> result;
        for(int i=0;i<column_size;i++){
            result.push_back(mat[first_row][i]);
        }
        for(int i=1;i<row_size;i++){
            result.push_back(mat[i][last_column]);
        }
        for(int i=column_size-2;i>=0;i--){
            result.push_back(mat[last_row][i]);
        }
        for(int i=row_size-2;i>0;i--){
            result.push_back(mat[i][first_column]);
        }
        return result;
    }
};

```

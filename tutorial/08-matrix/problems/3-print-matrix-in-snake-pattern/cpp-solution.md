cpp solution

```
class Solution {
  public:
    vector<int> snakePattern(vector<vector<int> > matrix) {
        // code here
        int size=matrix.size();
        vector<int> result;
        for(int i=0;i<size;i++){
            if(i%2==0){
                for(int j=0;j<size;j++){
                    result.push_back(matrix[i][j]);
                }
            }
            else{
                for(int j=size-1;j>=0;j--){
                    result.push_back(matrix[i][j]);
                }
            }
        }
        return result;
    }
};
```

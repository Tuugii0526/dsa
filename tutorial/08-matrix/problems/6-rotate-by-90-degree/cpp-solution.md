cpp solution

```
class Solution {
  public:
    void rotateMatrix(vector<vector<int>>& mat) {
        // code here
        int n=mat.size();
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                swap(mat[i][j],mat[j][i]);
            }
        }
        int i=0,j=n-1;
        while(i<j){
            for(int k=0;k<n;k++){
                swap(mat[i][k],mat[j][k]);
            }
            i++;
            j--;
        }

    }
};
```

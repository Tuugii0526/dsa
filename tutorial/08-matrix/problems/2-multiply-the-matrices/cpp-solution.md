cpp solution

```
class Solution {
  public:
    bool multiplyMatrix(int mat1[4][4], int mat2[4][4], int result[4][4]) {
        // code here
        int sum;
        for(int i=0;i<4;i++){

            for(int j=0;j<4;j++){
                 sum=0;
                 for(int k=0;k<4;k++){
                     sum+=mat1[i][k]*mat2[k][j];
                 }
                if(sum!=result[i][j]){
                    return false;
                }
                sum=0;
            }

        }
        return true;
    }
};

```

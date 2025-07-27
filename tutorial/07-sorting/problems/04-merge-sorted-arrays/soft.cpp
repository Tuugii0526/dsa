#include<iostream>
#include<vector>
using namespace std;
class Solution {
    public:
      // A, B, and C: input sorted arrays
      // Function to merge three sorted vectors or arrays
      // into a single vector or array.
      vector<int> mergeThree(vector<int>& A, vector<int>& B, vector<int>& C) {
          // Your code here
          int aLength=A.size(),bLength=B.size(),cLength=C.size();
          int resultIndex=0;
          vector<vector<int>> store={{0,A[0]},{0,B[0]},{0,C[0]}};
          int rightIndex;
          int totalSize=aLength+bLength+cLength;
          vector<int> result(totalSize);
          while((store[0][0]<aLength || store[1][0] < bLength || store[2][0]<cLength) && resultIndex<totalSize){
             if( store[0][0]<aLength )
             {
                 store[0][1]=A[store[0][0]];
             }
             if(store[1][0]<bLength){
                 store[1][1]=B[store[1][0]];
                 
             }
             if(store[2][0]<cLength){
                 store[2][1]=C[store[2][0]];
             }
             
             if(store[0][1]<store[1][1]){
                 rightIndex=0;
             }
             else{
                 rightIndex=1;
             }
             if(rightIndex==0){
                 if(store[0][1]!=0 && store[0][1]<store[2][1]){
                     rightIndex=0;
                 }
                 else{
                     rightIndex=2;
                 }
             }
             else{
                 if(store[1][1]!=0 && store[1][1]<store[2][1]){
                     rightIndex=1;
                 }
                 else{
                     rightIndex=2;
                 }
             }
             cout << "rightIndex:"<<rightIndex<<endl;
             result[resultIndex]=store[rightIndex][1];
             store[rightIndex][0]++;
             resultIndex++;
             store[0][1]=0;
             store[1][1]=0;
             store[2][1]=0;
          }
         
          return result;
      }
      vector<int> mergeThree2(vector<int>& a, vector<int>& b, vector<int>& c) {
        //  code here
        int lengthA=a.size();
        int lengthB=b.size();
        int lengthC=c.size();
        int aIndex=0,bIndex=0,cIndex=0;
        int currentA,currentB,currentC;
        vector<int> result;
        while(aIndex < lengthA || bIndex < lengthB || cIndex < lengthC){
            currentA=INT_MAX;
            currentB=INT_MAX;
            currentC=INT_MAX;
            if(aIndex<lengthA){
                currentA=a[aIndex];
            }
            if(bIndex<lengthB){
                currentB=b[bIndex];
            }
            if(cIndex<lengthC){
                currentC=c[cIndex];
            }
            cout << "currentA:"<< currentA<<" currentB:"<<currentB<< " currentC:"<<currentC << " ";
            if(currentA<=currentB && currentA <=currentC){
                result.push_back(currentA);
                aIndex++;
                cout << currentA << "pushed:"<<endl;
            }
            else if(currentB<=currentA && currentB<=currentC){
                result.push_back(currentB);
                bIndex++;
                cout << currentB<< "pushed:"<<endl;
            }
            else {
               if(currentC<=currentA && currentC<=currentB){
                result.push_back(currentC);
                cout << currentC<< "pushed:"<<endl;
                cIndex++;
               }
            }
       
        }
        cout << "aIndex:"<< aIndex<<endl;
        cout << "bIndex:" << bIndex<<endl;
        cout << "cIndex:"<< cIndex<<endl;
        return result;

    }
    
    vector<int> mergeThree3(vector<int>& A, vector<int>& B,
        vector<int>& C)
{
vector<int> ans;
int l1 = A.size();
int l2 = B.size();
int l3 = C.size();
int i = 0, j = 0, k = 0;
while (i < l1 || j < l2 || k < l3) {
// Assigning a, b, c with max values so that if
// any value is not present then also we can sort
// the array.
int a = INT_MAX, b = INT_MAX, c = INT_MAX;

// a, b, c variables are assigned only if the
// value exist in the array.
if (i < l1)
a = A[i];
if (j < l2)
b = B[j];
if (k < l3)
c = C[k];

// Checking if 'a' is the minimum
if (a <= b && a <= c) {
ans.push_back(a);
i++;
}
// Checking if 'b' is the minimum
else if (b <= a && b <= c) {
ans.push_back(b);
j++;
}
// Checking if 'c' is the minimum
else {
if (c <= a && c <= b) {
ans.push_back(c);
k++;
}
}
}
return ans;
}

};
    

int main(){
    Solution soft;
    vector<int> a={1,2,3,4};
    vector<int> b={1,2,3,4,5};
vector<int> c={1,2,3,4,5,6};
vector<int> result=soft.mergeThree2(a,b,c);
for(int num:result){
    cout << num << ",";
}
    return 0;
}
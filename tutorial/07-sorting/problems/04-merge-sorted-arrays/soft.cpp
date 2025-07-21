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
  };
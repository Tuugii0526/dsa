#include<vector>
#include<iostream>
using namespace std;
class Solution {
    public:
      int missingNumber(vector<int> &arr) {
          // code here
          int length=arr.size();
          int temp;

         for(int i=0;i<length;i++){
             while((arr[i] >=1) && (arr[i]<=length) && (arr[i]!=arr[arr[i]-1])){
                 temp=arr[arr[i]-1];
                 arr[arr[i]-1]=arr[i];
                 arr[i]=temp;
             }
         } ;
         for(int i=0;i<length;i++){
             if(arr[i]!=i+1){
                 return i+1;
             }
         }
         return length+1;
      }
  };
  int main(){
    Solution soft;
    vector<int> arr={2, -3, 4, 1, 1, 7};
    cout << "hi hi";
    soft.missingNumber(arr);
    return 0;
  }
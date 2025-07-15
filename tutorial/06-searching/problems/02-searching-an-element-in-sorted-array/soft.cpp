#include<vector>
using namespace std;
class Solution {
    public:
      // Function to find element in sorted array
      // arr: input array
      // k: element to be searched
      bool searchInSorted(vector<int>& arr, int k) {
          int left=0;
          int right=arr.size()-1;
           while(right>=left){
              int mid1=left+(right-left)/3;
              int mid2=right-(right-left)/3;
              if(arr[mid1]==k){
                  return true;
              }
              if(arr[mid2]==k){
                  return true;
              }
              if(k <arr[mid1]){
                  right=mid1-1;
              }
              else if(k>arr[mid2]){
                  left=mid2+1;
              }
              else
              {
                  left=mid1+1;
                  right=mid2-1;
              }
          }
          return false;
          // Your code here
          
      }
      
  };
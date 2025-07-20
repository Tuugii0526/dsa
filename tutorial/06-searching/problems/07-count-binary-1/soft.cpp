#include<vector>
using namespace std;
class Solution {
    public:
      int countOnes(vector<int>& arr) {
          // code here
          int length=arr.size();
          int left =0;
          int right=length-1;
          int ans=length;
          while(left<=right)
          {
              int mid=left+(right-left)/2;
              if(arr[mid]==0){
                  ans=mid;
                  right=mid-1;
              }
              else {
                  left=mid+1;
              }
              
          }
          return ans;
      }
  };
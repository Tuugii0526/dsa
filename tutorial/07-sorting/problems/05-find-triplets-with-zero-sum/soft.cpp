#include<vector>
#include<algorithm>
using namespace std;
class Solution {
    public:
      bool findTriplets(vector<int> &arr) {
          // code here
          sort(arr.begin(),arr.end());
          int length=arr.size();
          int minP,maxP;
          int sum=0;
          int twoSum=0;
          for(int i=0;i<length;i++){
             minP=0;
             maxP=length-1;
             sum-=arr[i];
             while(minP<maxP){
                 if(minP==i){
                     minP++;
                 }else if(maxP==i)
                 {
                     maxP--;
                 }
                 else{
                     twoSum=arr[minP]+arr[maxP];
                     if(twoSum==sum)
                     {
                         return true;
                     }
                     else if(twoSum<sum) {
                         minP++;
                     }
                     else{
                         maxP--;
                     }
                 }
                 
             }
             sum=0;
              
          }
          return false;
      }
      bool findTriplets2(vector<int> &arr) {
        int n = arr.size(); // Get the size of the array

        // Sorting the elements.
        sort(arr.begin(), arr.end());

        // Traversing the array elements.
        for (int i = 0; i < n - 2; i++) {
            // Taking two pointers. One at the element after ith index and another at
            // the last index.
            int l = i + 1;
            int r = n - 1;
            int x = arr[i];

            // Using two pointers to check if the triplet sum is zero.
            while (l < r) {
                int sum = x + arr[l] + arr[r];

                // If sum of elements at indexes i, l and r is 0, we return true.
                if (sum == 0) {
                    return true;
                }
                // Else if the sum is less than 0, increase the left pointer l.
                else if (sum < 0) {
                    l++;
                }
                // Else the sum is more than 0, decrease the right pointer r.
                else {
                    r--;
                }
            }
        }
        // Returning false if no triplet with zero sum is present.
        return false;
    }
  };
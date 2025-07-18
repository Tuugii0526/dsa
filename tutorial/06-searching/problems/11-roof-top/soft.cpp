#include<vector>
using namespace std;
class Solution {
    public:
      // Function to find maximum number of consecutive steps
      // to gain an increase in altitude with each step.
      int maxStep(vector<int>& arr) {
          // Your code here
          int length=arr.size();
          int mx=0;
          int consecutiveSteps=0;
          for(int i=1;i<length;i++){
              if(arr[i-1]<arr[i])
              {
                  consecutiveSteps++;
              }
              else
              {
                  mx=max(mx,consecutiveSteps);
                  consecutiveSteps=0;
              }
          }
          return mx;
      }
      
  };
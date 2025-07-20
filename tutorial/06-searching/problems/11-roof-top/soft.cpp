#include<vector>
#include<iostream>
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
            cout << arr[i];
            
              if(arr[i-1]<arr[i])
              {
                  consecutiveSteps++;
              }
              else
              {
                  mx=max(mx,consecutiveSteps);
                  consecutiveSteps=0;
              }
              cout << "steps:"<< consecutiveSteps << " ";
              cout << "max:"<< mx<< endl;
          }
          return max(mx,consecutiveSteps);
      }
      
  };
  int main(){
   vector<int> vec={10 ,11, 2, 15, 7, 11, 16, 19};
   Solution soft;
   cout << soft.maxStep(vec);
    return 0;
  }
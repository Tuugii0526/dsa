#include <iostream>
#include<vector>
using namespace std;
class Solution {
    public:
  
      int findFloor(vector<int>& arr, int x) {
          // Your code here
          int length=arr.size();
        int left=0;
        int right=length-1;
        int mid;
        int possibleIndex=-1;
        while(right>=left){
             mid=left+(right-left)/2;
             if(arr[mid]==x)
             {
                  left=mid+1;
                  possibleIndex=mid;
             }
             if(arr[mid]>x)
             {
                 right=mid-1;
             }
             else
             {
                 if(mid<length-1)
                 {
                     if(arr[mid+1]<=x)
                     {
                         left=mid+1;
                         possibleIndex=mid+1;
                     }
                     else 
                     {
                         return mid;
                     }
                 }
                 else 
                 {
                     return mid;
                 }
             }
            
        }
        return possibleIndex;
      }
  };
  int main(){
    Solution soft;
    vector<int> vec={1,2,3,4,5};
    cout << "Result:"<< soft.findFloor(vec,8);
  }
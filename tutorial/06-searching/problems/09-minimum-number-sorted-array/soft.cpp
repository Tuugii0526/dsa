#include<iostream>
using namespace std;
class Solution {
    public:
      // Function to find the minimum element in sorted and rotated array.
int minNumber(int arr[], int low, int high) {
    int mid;
    if(arr[low]<arr[high]){
        return arr[low];
    }
      while(low<high){
           mid=low+(high-low)/2;
          if(arr[low]>arr[mid])
          {
              high=mid;
          }
          else 
          {
              if(arr[low]==arr[mid])
              {
                  low=mid+1;
              }
              else{
                  low=mid;
              }
          }
         
      }
      return arr[low];
      }
  };
  int main(){
    Solution soft;
    int arr[]={31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30};
    int length=sizeof(arr)/sizeof(arr[0]);
    cout << soft.minNumber(arr,0,length-1);
    return 0;
  }
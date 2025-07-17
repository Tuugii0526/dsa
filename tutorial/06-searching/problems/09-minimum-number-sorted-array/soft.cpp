#include<iostream>
using namespace std;
class Solution {
    public:
      // Function to find the minimum element in sorted and rotated array.
void minNumber(int arr[], int low, int high) {
          // Your code here
          while(low<=high){
            int mid=low+(high-low)/2;
            // cout <<"hi";
            cout << "left:" <<low<<"  mid:"<<mid << "  high:"<<high  << endl;
            cout << "mid:"<< arr[mid] << endl;

            if(arr[mid]<arr[mid-1])
            {
                 cout << "answer:"<<arr[mid];
            }
            
            if(arr[low]>arr[mid])
            {
                high=mid-1;
            }
            else {
                low=mid+1;
            }
           
        }
      }
  };
  int main(){
    Solution soft;
    int arr[]={32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31};
    int length=sizeof(arr)/sizeof(arr[0]);
     soft.minNumber(arr,0,length-1);
    return 0;
  }
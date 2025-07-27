#include<vector>
using namespace std;
class Solution {
    public:
      // Please change the array in-place
      void insertionSort(vector<int>& arr) {
          // code here
          int length=arr.size();
          int temp;
          int j;
          for(int i=1;i<length;i++){
              j=i;
              while(j>0 && arr[j]<arr[j-1])
              {
                  temp=arr[j-1];
                  arr[j-1]=arr[j];
                  arr[j]=temp;
                  j--;
              }
          }
      }
  };
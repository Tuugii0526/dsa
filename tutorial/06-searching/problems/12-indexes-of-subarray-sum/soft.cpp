#include<vector>
#include<iostream>
using namespace std;
class Solution {
    public:
    vector<int> subarraySum(vector<int> &arr, int target) {
        // code here
        int start=0,length=arr.size(),sum=0;
        for(int i=0;i<length;i++){
            sum+=arr[i];
            while(sum>target && start <=i){
                sum-=arr[start];
                start++;
            }
            if(sum==target )
            {
                return {++start,++i};
            }
        }
        return {-1};
        
    }
  };
  int main(){
Solution soft;
   vector<int> vec={1 ,2 ,3 ,7 ,5};
   vector<int> result = soft.subarraySum(vec,12);
   for(int num:result)
   {
    cout << num << ", ";
   }
    return 0;
  }
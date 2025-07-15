#include<iostream>
#include<vector>
using namespace std;
class Solution{
    public:
     int findFloor(vector<int>& arr, int x){
        int ans=-1;
        int left=0;
        int right=arr.size()-1;
        int mid;
        while(right>=left){
            mid=left+(right-left)/2;
            if(arr[mid]<=x)
            {
                ans=mid;
                left=mid+1;
            }
            else 
            {
                right=mid-1;
            }
        }
        return ans;
     }
};
int main(){
    Solution soft;
    vector<int> vec={1,2,3,4,5};
    cout << "Result:"<<soft.findFloor(vec,0);
    return 0;
}
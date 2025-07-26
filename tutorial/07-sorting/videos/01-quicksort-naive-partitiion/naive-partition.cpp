#include<iostream>
#include<vector>
using namespace std;
class Solution{
    public: void naivePartition(vector<int>& arr,int pivotIndex){
        int length=arr.size();
        vector<int> temp;
        for(int i=0;i<length;i++){
            if(arr[i]<=arr[pivotIndex]){
                temp.push_back(arr[i]);
            }
        }
        for(int i=0;i<length;i++){
            if(arr[i]>arr[pivotIndex]){
                temp.push_back(arr[i]);
            }
        }
        for(int i=0;i<length;i++){
            arr[i]=temp[i];
        }

    }
};
int main(){
    Solution soft;
    vector<int> vec={3,1,2,3,51,51,1,3};
    soft.naivePartition(vec,3);
    for(int num:vec){
        cout << num<<",";
    }
    return 0;
}
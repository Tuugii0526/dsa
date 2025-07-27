#include<iostream>
#include<vector>
#include<utility>
using namespace std;
class Solution{
    public: void lomutoPartition(vector<int>& arr,int l,int r){
        int i=l-1;
        int pivot=r;
        for(int j=l;j<r;j++){
        if(arr[j]<arr[pivot]){
            i++;
            swap(arr[i],arr[j]);
        }
        }
        swap(arr[i+1],arr[r]);
    }
};
int main(){
    Solution soft;
    vector<int> vec={3,1,8,14,9};
    soft.lomutoPartition(vec,0,vec.size()-1);
    for(int num:vec){
        cout << num<<",";
    }
    return 0;
}
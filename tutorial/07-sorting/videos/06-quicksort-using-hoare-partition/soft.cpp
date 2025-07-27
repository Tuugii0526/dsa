#include<iostream>
#include<vector>
#include<utility>
using namespace std;
class Solution {
    public: int partition(vector<int>& arr, int start, int end){
        int pivot=arr[start];
        int i=start-1;
        int j=end+1;
        while(true){
            do{
                i++;
            }while(arr[i]<pivot);
            do{
                j--;
            }while(arr[j]>pivot);
            if(i>j)return i;
            swap(arr[i],arr[j]);
        }
    }
    void sort(vector<int>& arr,int start , int end){
        if(start<end){
            int mid=partition(arr, start,end);
            sort(arr,start,mid-1);
            sort(arr,mid,end);
        }
    }
};
int main(){
    Solution soft;
    vector<int> vec={3,2,52,1,3,1,5,4};
    soft.sort(vec,0,vec.size()-1);
    for(int num:vec){
        cout << num << ", ";
    }
    return 0;
}
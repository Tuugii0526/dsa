#include<iostream>
#include<vector>
#include<utility>
using namespace std;
class QuickSort{
    public: int lomutoPartition(vector<int>& arr, int low,int high){
        int i=low-1;
        int pivot=arr[high];
        for(int j=low;j< high;j++){
            if(arr[j]<=pivot){
                i++;
                swap(arr[i],arr[j]);
            }
        }
        swap(arr[i+1],arr[high]);
        return i+1;
    }
    void qs(vector<int>& arr, int low ,int high){
        if(low<high){
            int mid = lomutoPartition(arr,low,high);
            qs(arr,low,mid-1);
            qs(arr,mid+1,high);
        }
    }
};
int main(){
    QuickSort soft;
    vector<int> vec={3,2,52,1,3,1,5,4};
    soft.qs(vec,0,vec.size()-1);
    for(int num:vec){
        cout << num<<endl;
    }
    return 0;
}
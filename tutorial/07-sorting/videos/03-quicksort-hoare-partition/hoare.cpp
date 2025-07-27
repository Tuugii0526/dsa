#include<iostream>
#include<vector>
#include<utility>
using namespace std;
class Solution{
    public: int hoarePartition(vector<int>& arr,int l,int h){
        int pivot=arr[l];
        int i=l-1;
        int j=h+1;
        while(true){
            do{
            i++;
            }while(pivot>arr[i]);
            do{
            j--;
            }while(pivot < arr[j]);
            if(i>=j)return i;
            swap(arr[i],arr[j]);
        }
    }

};
int main(){
    Solution soft;
    vector<int> vec={4,5,2};
    int result=soft.hoarePartition(vec,0,vec.size()-1);
    for(int num:vec){
        cout << num<<",";
    }
    return 0;
}
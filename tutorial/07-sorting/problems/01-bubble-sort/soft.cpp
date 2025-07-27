#include<iostream>;
#include<vector>;
using namespace std;
class Solution {
    public: void bubbleSort(vector<int>& arr)
    {
        int length=arr.size();
        int temp;
        for(int i=0;i<length;i++){
            for(int j=0;j<length-1;j++)
            {
                if(arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    }
};
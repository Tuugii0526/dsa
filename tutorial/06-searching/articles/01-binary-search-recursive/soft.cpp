#include<iostream>
using namespace std;
int binarySearch(int* arr ,int l,int r ,int x){
    if(r>=l){
        int mid=l+(r-l)/2;
        if(arr[mid]==x)
        {
            return mid;
        }
        if(arr[mid]>x){
            return binarySearch(arr,l,mid-1,x);
        }
        if(arr[mid]<x){
return binarySearch(arr,mid+1,r,x);
        }
    }
    return -1;
}
int main(){
    int arr[]={2,3,5,6,9};
    int x=2;
    int length=sizeof(arr)/sizeof(arr[0]);
    int result=binarySearch(arr,0,length-1,x);
    if(result==-1)
    {
        cout << "Element not found";
    }
    else {
        cout << "Element found:"<< arr[result];
    }
}
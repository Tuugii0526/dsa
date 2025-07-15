#include <iostream>
#include <algorithm>
using namespace std;
int main(){
    int  arr[]={1,2,3,4,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    int x=5;
    if(binary_search(arr,arr+n,x))
    {
        cout << x << "is there";
    }
    else 
    {
        cout << x << "is not there";
    }
    cout << "Array after binary search:"<<arr;
    cout << "Array size:" << sizeof(arr); 
    return 0;
}
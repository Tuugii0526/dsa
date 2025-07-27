#include<iostream>
#include<vector>
using namespace std;
class Solution {
    public:
       int merge(vector<int>& arr, int start, int mid , int end){
           int count =0;
           int length1= mid-start+1;
           int length2=end-mid;
           int arr1[length1];
           int arr2[length2];
           int i=0,j=0,bigIndex=start;;
           for(int i=0;i<length1;i++){
               arr1[i]=arr[start+i];
           }
           for(int i=0;i<length2;i++){
               arr2[i]=arr[mid+1+i];
           }
           while(i<length1 && j<length2){
               if(arr1[i]<=arr2[j]){
                   arr[bigIndex]=arr1[i];
                   i++;
               }
               else{
                   arr[bigIndex]=arr2[j];
                   count+=length1-i;
                   j++;
               }
               bigIndex++;
           }
           while(i<length1){
               arr[bigIndex]=arr1[i];
               i++;
               bigIndex++;
           }
           while(j<length2){
               arr[bigIndex]=arr2[j];
               j++;
               bigIndex++;
           }
           return count;
       }
      int mergeSort(vector<int>& arr,int start,int end){
          if(start<end){
             int mid=start+(end-start)/2;
             int count=mergeSort(arr,start,mid);
             count+= mergeSort(arr,mid+1,end);
             count+=merge(arr,start,mid,end);
             return count;
          }
          return 0;
      }
      int inversionCount(vector<int> &arr) {
          // Code Here
          int length=arr.size();
          return mergeSort(arr,0,length-1);
          
      }
      
  };
  int main(){
    Solution soft;
   vector<int> vec1={1,2,3 ,1 ,2};
    int count=soft.mergeSort(vec1,0,vec1.size()-1);
    cout << "COUNT:"<< count;
    for(int num:vec1){
        cout << "num:"<<num<<endl;
    }
    return 0;
  }
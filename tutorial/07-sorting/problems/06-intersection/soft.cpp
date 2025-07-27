#include<iostream>
#include<vector>
using namespace std;
class Solution {
    public:
      vector<int> intersection(vector<int> &arr1, vector<int> &arr2) {
          // code here
          int l1=arr1.size();
          int l2=arr2.size();
          int n=0,m=0;
          int previousElement=0;
          vector<int> result;
          while(n<l1 && m<l2){
              if(arr1[n] ==arr2[m]){
                  if(arr1[n]!=previousElement){
                      result.push_back(arr1[n]);
                      previousElement=arr1[n];
                      n++;
                      m++;
                      
                  }
              }
              else{
                if(arr1[n]<arr2[m]){
                    n++;
                } else {
                    m++;
                }
              }
          }
          return result;
      }
      vector<int> intersection1(vector<int> &arr1, vector<int> &arr2) {
        // code here
        int l1=arr1.size();
        int l2=arr2.size();
        int n=0,m=0;
        vector<int> result;
        while(n<l1 && m<l2){
            
            if(n>0 && arr1[n]==arr1[n-1]){
                n++;
                continue;
            }
            if(arr1[n]<arr2[m]){
                n++;
            }
            else if(arr1[n]>arr2[m]){
                m++;
            }
            else{
                result.push_back(arr1[n]);
                n++;
                m++;
            }
           
        }
        return result;
    }
  
      
  };
  int main(){
    Solution soft;
    vector<int> arr1={2 ,3 ,4 ,6};
    vector<int> arr2={1 ,3 ,4 ,4 ,6 ,8 ,8 ,9 ,11 ,12};
    vector<int> result=soft.intersection1(arr1,arr2);
    for (int num:result){
        cout << "num:"<<num<<endl;
    }
    return 0;
  }
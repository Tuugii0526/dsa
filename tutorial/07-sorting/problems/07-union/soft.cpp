#include<iostream>
#include<vector>
using namespace std;
class Solution {
    public:
      vector<int> findUnion(vector<int> &a, vector<int> &b) {
          // code here
          vector<int> result;;
          int l1=a.size();
          int l2=b.size();
          int i=0,j=0;
          while(i<l1 && j<l2){
              if(i>0 && a[i]==a[i-1]){
                  i++;
                  continue;
              }
              if(j<0 && b[j]==b[j-1]){
                  j++;
                  continue;
              }
              if(a[i]<b[j]){
                  result.push_back(a[i]);
                      i++;
              }
              else if(a[i]>b[j]){
                  result.push_back(b[j]);
                      j++;
              }
              else{
                  result.push_back(a[i]);
                  i++;
                  j++;
              }
          }
          while(i<l1){
               if(i>0 && a[i]==a[i-1]){
                  i++;
                  continue;
              }
              result.push_back(a[i]);
          }
           while(j<l2){
               if(j>0 && b[j]==b[j-1]){
                  j++;
                  continue;
              }
              result.push_back(b[j]);
          }
          return result;
      }
  };
  int main(){
    Solution soft;
    
    return 0;
  }
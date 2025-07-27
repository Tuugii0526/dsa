#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
class Solution {
    public:
      void mergeArrays(vector<int>& a, vector<int>& b) {
          // code here
           int i=0,j=0;
           int temp;
           int iLength=a.size();
           int jLength=b.size();
           int k=iLength-1;
           while(j<jLength && i<=k){
               if(a[i]> b[j])
               {
                temp=a[k];
                   a[k]=b[j];
                   b[j]=temp;
                   k--;
                   j++;
               }
               else {
                   i++;
               }
           }
           
      }
  };
  int main(){
    Solution soft;
    vector<int> a= {1, 5, 9, 10, 15, 20};
    vector<int> b = {2, 3, 8, 13};
    soft.mergeArrays(a,b);
    sort(a.begin(),a.end());
    sort(b.begin(),b.end());
    cout << "A _____"<< endl;
    for (int num:a){
        cout << num << " ";
    }
    cout << "B _____"<< endl;;
    for (int num:b){
        cout << num << " ";
    }
   
    return 0;
  }
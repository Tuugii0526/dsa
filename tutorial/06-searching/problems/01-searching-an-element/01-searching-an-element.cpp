#include <iostream>
#include <vector>
using namespace std;
class Solution{
    public:
    int search(vector<int>& arr, int x){
        int length=arr.size();
        for(int i=0;i<length;i++){
            if(arr[i]==x)
            {
                return i;
            }
        }
        return -1;
    }
};
int main(){
    Solution soft;
    vector<int> numbers={10,20,30,40,50};
    int target=90;
    int result=soft.search(numbers,target);
    cout << "result:"<<result; 
    return 0;
}
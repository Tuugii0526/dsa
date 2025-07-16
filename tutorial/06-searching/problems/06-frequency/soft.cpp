#include<unordered_map>
#include<vector>
using namespace std;
class Solution {
  public:
    int countOccurence(vector<int>& arr, int k) {
        // Your code here
        int length=arr.size();
        int possibleTimes=length/k;
        int countOccurence=0;
        unordered_map<int,int> frequencyMap;
        for(int num: arr){
            frequencyMap[num]++;
        }
        for(const auto& pair: frequencyMap){
            if((pair.second )> possibleTimes){
                countOccurence++;
            }
        }
        return countOccurence;
    }
};


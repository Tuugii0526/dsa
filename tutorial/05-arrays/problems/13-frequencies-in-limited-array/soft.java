import java.util.List;
import java.util.ArrayList;
class Solution {
    public List<Integer> frequencyCount(int[] arr) {
        // code here
        int length=arr.length;
        int []counter=new int[length];
        List<Integer> result=new ArrayList<>();
        for(int i=0;i<length;i++){
            counter[arr[i]-1]+=1;
        }
        for(int i=0;i<length;i++)
        {
            result.add(counter[i]);
        }
        return result;
    }
}

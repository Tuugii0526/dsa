import java.util.ArrayList;
class Solution {
    static ArrayList<Integer> leaders(int arr[]) {
        // code here
        int length=arr.length;
        int rightMax=arr[length-1];
        ArrayList<Integer> result=new ArrayList<>();
        result.add(rightMax);
        for (int i=length-2;i>=0;i--){
            if(arr[i]>=rightMax){
                result.add(0,arr[i]);
                rightMax=arr[i];
            }
        }
        
        return result;
    }
}

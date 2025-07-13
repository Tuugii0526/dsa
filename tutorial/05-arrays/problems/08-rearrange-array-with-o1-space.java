class Solution {
    public void arrange(long[] arr) {
        int length=arr.length;
        int Max=length;
        for (int i=0;i<length;i++){
            arr[i]+=(arr[(int)arr[i]]%Max)*Max;
        }
        for (int i=0;i<length;i++){
            arr[i]/=Max;
        }
    }
}
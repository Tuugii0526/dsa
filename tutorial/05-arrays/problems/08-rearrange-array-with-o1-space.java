
import java.util.Arrays;




class Solution05p08 {
    public void arrange(long[] arr) {
        int length = arr.length;
        for (int i = 0; i < length; i++) {
            long temp = arr[i];
            arr[i]=arr[(int)arr[i]];
            arr[(int)arr[i]]=temp;
        }
    }
    public static void main(String[] args) {
        long [] arr= new long[]{1,2,43,3};
        Solution05p08 soft = new Solution05p08();
        soft.arrange(arr);
        System.err.println("arr"+Arrays.toString(arr));
    }
}
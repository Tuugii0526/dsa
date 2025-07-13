import java.util.Arrays;

class Softp0507 {
     public void reverseInGroups(int[] arr, int k) {
        // code here
        int length=arr.length;
        if(length==1){
            return;
        }
        for(int i=0;i<length;i+=k)
        {
            
            int subGroupLastIndex=i+k;
            if(subGroupLastIndex>length){
                subGroupLastIndex=length;
            }
            subGroupLastIndex--;
            int mid=(subGroupLastIndex-i)/2;
            for(int j=0 ; j<=mid;j++){
                int temp=arr[j+i];
                arr[j+i]=arr[subGroupLastIndex-j];
                arr[subGroupLastIndex-j]=temp;
            }
        }
    }
    public static void main(String[] args) {
        int[] arr = new int[]{10, 5, 5, 10, 6, 10, 1, 7, 1, 7};
        int k = 6;
        Softp0507 soft = new Softp0507();
        soft.reverseInGroups(arr, k);
        System.out.println(Arrays.toString(arr));
    }
}

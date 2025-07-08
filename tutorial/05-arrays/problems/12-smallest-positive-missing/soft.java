class Solution {
    public int missingNumber(int[] arr) {
        // code here
        int start =0;
        int end=arr.length-1;
        int smallPositive=1;
        int turn = 1;
        while (start<end){
            if(turn==1){
                if(arr[start]==smallPositive){
                    smallPositive++;
                    turn=-1;
                }
                start++;
            }
            
            else {
                if(arr[end]==smallPositive){
                    smallPositive++;
                    turn =1;
                }
                end--;
            }
        }
        return smallPositive ;
    }
    public static void main(String[] args) {
        Solution soft=new Solution();
        int []arr= new int[]{2, -3, 4, 1, 1, 7};
        System.out.println(soft.missingNumber(arr));
    }
}

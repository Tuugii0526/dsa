

class SoftP050303{
    public static  int solution(int [] arr){
        int length=arr.length;
        int [] lMin=new int[length];
        int [] rMax=new int[length];
        lMin[0]=arr[0];
        for (int i = 1 ;i < length; i++)
        {
            lMin[i]=Math.min(lMin[i-1],arr[i]);
        } 
        rMax[length-1]=arr[length-1];
        for(int i=length-2;i>=0;i--){
        rMax[i]=Math.max(arr[i],rMax[i+1]);
        }
        int i=0,j=0,max=0;
        while(i<length && j < length){
            if(lMin[i] <= rMax[j]){
max=Math.max(max,j-i);
j++;

            }
            else {
                i++;
            }
        }
        return max;
    }
    public static void main(String[] args) {
         int[] arr = {34, 8, 10, 3, 2, 80, 30, 33, 1};
        System.out.println(solution(arr));
    }
}

import java.util.Arrays;

class SoftP050302{
    public static int solution(int [] arr){
int [][] valueIndexArray= new int[arr.length][2];
for(int i=0;i <arr.length;i++){
valueIndexArray[i][0]=arr[i];
valueIndexArray[i][1]=i;
}
Arrays.sort(valueIndexArray,(a,b)->Integer.compare(a[0], b[0]));
int minimumIndex=valueIndexArray[0][1];
int res=0;
for(int i = 1; i < valueIndexArray.length; i++) {
    res=Math.max(res,valueIndexArray[i][1]-minimumIndex);
    minimumIndex=Math.min(minimumIndex,valueIndexArray[i][1]);
    
}
return res;
    }
     public static void main(String[] args) {
         int[] arr = {34, 8, 10, 3, 2, 80, 30, 33, 1};
        System.out.println(solution(arr));
    }
}
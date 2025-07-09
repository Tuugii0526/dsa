
import java.util.Arrays;

class Soft05a05asdf{
    public static  int solution(int [] arr){
int res=0;
for(int i=0;i<arr.length;i++){
    if(arr[i]!=arr[res])
    {
        arr[res]=arr[i];
        res++;
    }

}
return res;
    }
    public static void main(String[] args) {
        
        int [] arr=new int[]{1,1,2,2,3,3};
        
Soft05a05asdf.solution(arr);
System.err.println("arr"+Arrays.toString(arr));
    }
}
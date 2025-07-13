import java.util.Arrays;

class Soft05a05asdf{
    public static  int solution(int [] arr){
int res=0;
for(int i=1;i<arr.length;i++){
    if(arr[i]!=arr[res])
    {
        arr[++res]=arr[i];
    }

}
for(int i=res+1;i<arr.length;i++){
    arr[i]=0;
}
return res;
    }
    public static void main(String[] args) {
        
        int [] arr=new int[]{1,1,2,2,3,3,3,4,5,6};
        
Soft05a05asdf.solution(arr);
System.err.println(Arrays.toString(arr));
    }
}
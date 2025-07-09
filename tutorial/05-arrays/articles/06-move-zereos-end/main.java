
import java.util.Arrays;

 class Soft05a06hi{
public static void solution( int [] arr){
    int length=arr.length;
    int temp;
for (int i=length-1;i>=1;i--){
    if(arr[i-1]==0)
    {
        System.err.println("hi");
temp=arr[i];
arr[i]=arr[i-1];
arr[i-1]=temp;
System.err.println("arr[i-1]"+arr[i-1]);
    }
}

}
public static void main(String[] args) {
    int [] arr= new int []{1,2,2,0,2,4,0,1,10,0};
    Soft05a06hi.solution(arr);
    System.out.println(Arrays.toString(arr));
}
 }

import java.util.Arrays;

 class Soft05a06hi{
public static void solution( int [] arr){
    int length=arr.length;
    int current=0;
for (int i=0;i<length;i++){
    if(arr[i]!=0){
        arr[current]=arr[i];
       current++;
    }
}
for(int i=current;i<length;i++){
    arr[i]=0;
}

}
public static void main(String[] args) {
    int [] arr= new int []{0,1,2,2,0,2,4,0,1,10,0,0,0,0,3,2,1};
    Soft05a06hi.solution(arr);
    System.out.println(Arrays.toString(arr));
}
 }
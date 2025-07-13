
import java.util.Arrays;

class CycleSort{
    public void solution(int []arr){
int length=arr.length;
int writes=0;
for(int i=0;i<length;i++){
    int temp;
    while(arr[i]>=1 && arr[i] < length && arr[i]!=arr[arr[i]-1]){
        temp= arr[arr[i]-1];
        arr[arr[i]-1]=arr[i];
        arr[i]=temp;
        writes++;
    }
}
System.err.println("writes:"+writes);
    }
    public static void main(String[] args) {
        CycleSort sort=new CycleSort();
int [] elements=new int[]{8,7,9,2,5,6,1,4,3};
sort.solution(elements);
System.out.println(Arrays.toString(elements));
    }
}

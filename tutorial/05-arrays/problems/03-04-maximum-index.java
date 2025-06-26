
import java.util.Arrays;

class SoftP050304{
public static int solution (int [] arr){
    int lenght= arr.length;
    int [] rMax= new int[lenght];
    rMax[lenght-1]= arr[lenght-1];
    for(int i=lenght-2;i>=0;i--){
        rMax[i]=Math.max(rMax[i+1],arr[i]);
    }
    System.out.println(Arrays.toString(rMax));
    int i=0,j=0,max=0,minEl=arr[0];
    while(i<lenght && j<lenght){
     if (minEl<= rMax[j]){
   max=Math.max(max,j-i);
   j++;
     }
     else {
        if (i+1 < lenght){
i++;
minEl=Math.min(minEl,arr[i]);
        }
        
     }
    }
    return max;
}
public static void main(String[] args) {
    int[] arr = {34, 8, 10, 3, 2, 80, 30, 33, 1};
    System.out.println(SoftP050304.solution(arr));
}
}

// [4,2,3,f
// lMin [4,2,2,1]
// rMax [4,3,3,1]


// [1,3,4,2]
// lMin [1,1,1,1]
// rMax [4,4,4,2]

// [1,2,4,9]
//lMin [1,1,1,1]
// rMax [9,9,9,9]

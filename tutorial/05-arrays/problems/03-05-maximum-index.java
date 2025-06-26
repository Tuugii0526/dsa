
import java.util.ArrayList;

class SoftP050305 {
public static int solution(int [] arr){
    ArrayList<Integer> stack = new ArrayList<>();
        int length=arr.length;
        stack.add(0);
        for(int i=1 ; i<length;i++){
            if(arr[stack.get(stack.size()-1)]<=arr[i])
            {
                stack.add(i);
            }
        }
        System.out.println(stack);
        int max=0;
        for(int i=length-1;i>=0;i--){
            while (!stack.isEmpty() && arr[stack.get(stack.size()-1)] <= arr[i])
            {
                max=Math.max(max,i-stack.get(stack.size()-1));
                stack.remove(stack.size()-1);
            }
        }
        return max; 
}
public static void main(String[] args) {
    int [] arr= new int[]{34, 8, 10, 3, 2, 80, 30, 33, 1};
    System.out.println(SoftP050305.solution(arr));
}
}
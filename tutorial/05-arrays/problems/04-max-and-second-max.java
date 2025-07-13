
// [1,4,3,2]   4,3

import java.util.ArrayList;

class Soft05p04{
       public static ArrayList<Integer> largestAndSecondLargest(int sizeOfArray,
                                                             int arr[]) {
        // code here.
        ArrayList<Integer> result=new ArrayList<>();
        int max=0, secMax=-1;
        for(int i=0;i<sizeOfArray;i++){
            max=Math.max(max,arr[i]);
        }
        for(int i=0;i<sizeOfArray;i++){
            if(arr[i]!=max){
                secMax=Math.max(secMax,arr[i]);
            }
        } 
        result.add(max);
        result.add(secMax);
       return result;
    }
   public static ArrayList<Integer> solution(int sizeOfArray,
                                                             int arr[]) {
        // code here.
        ArrayList<Integer> result=new ArrayList<>();
        int max=arr[0],secMax=-1;
        for(int i=0;i<sizeOfArray;i++){
        if(max<arr[i]){
            secMax=max;
            max=arr[i];
        }
        else {
            if(arr[i]!=max)
            {
                secMax=Math.max(secMax,arr[i]);
            }
            
        }
        }
        result.add(max);
        result.add(secMax);
        return result;
    }
    public static void main(String[] args) {
       int[] arr= new int[]{1,2,82,3,4,9,0,8,83,34,24,24,83};
       int sizeOfArray=arr.length;
        System.out.println(Soft05p04.solution(sizeOfArray, arr));
    }
}
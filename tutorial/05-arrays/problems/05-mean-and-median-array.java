
import java.util.Arrays;

class Solution {
    // public int mean(int[] arr) {
        
    // }

    // public int median(int[] arr) {
    // }
    public   int [] merge(int[] arr1,int[] arr2){
        
int i=0,j=0,arr1Length=arr1.length,arr2Length=arr2.length,lastIndex=0;
int []result = new int[ arr1Length+arr2Length];
while (i < arr1Length && j < arr2Length){ 
if (arr1[i]< arr2[j]) { 
result[lastIndex]= arr2[j];
j++; 
lastIndex++;
}
else {
    result[lastIndex]=arr1[i];
    i++;
    lastIndex++;
}
}
if (i< arr1Length){
  for(int m=i;m<arr1Length;m++){
    result[lastIndex]=arr1[m];
    lastIndex++;
  }
}
else { 
  for(int m=j;m<arr2Length;m++){
    result[lastIndex]=arr2[ m];
    lastIndex++;
  }
}
return result;
    }
    public int []mergeSort(int [ ]arr){
  if (arr.length==1){
    return arr;
  }  
    int length=arr.length;
int mid= length /2;
        int[] part1 = Arrays.copyOfRange(arr, 0, mid); 
int [] part2=  Arrays.copyOfRange(arr, mid, length); 
  int [] arr1= this.mergeSort(part1);
  int [] arr2= this.mergeSort(part2);
  return this.merge(arr1,arr2);
    }
    public static void main(String[] args) {
        Solution soft= new Solution();
        int []arr1=new int[]{8,3,1,2,9,934,34,25,2345,11345,145236,235};
System.out.println(Arrays.toString(soft.mergeSort(arr1)));
    }
}

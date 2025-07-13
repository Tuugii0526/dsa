
import java.util.Arrays;



class Solution {
    // public int mean(int[] arr) {
        
    // }

    // public int median(int[] arr) {
    // }
    public void sort(int [] arr,int left, int right){
       if(left < right){
           int mid= left+ (right-left)/2;
           this.sort(arr,left,mid);
           this.sort(arr,mid+1,right);
           this.merge(arr,left,mid,right);
       }
         
    }
    public void merge(int [] arr,int left, int mid ,int right){
        int j=0,i=0,current=left;
        int temp1Length=mid-left+1;
        int temp2Length=right-mid;
        int [] temp1=new int[temp1Length];
        int[] temp2= new int[temp2Length];
        for(int m=0;m<temp1Length;m++){
            temp1[m]=arr[left+m];
        }
        for(int m=0;m<temp2Length;m++){
            temp2[m]=arr[mid+1+m];
        }
        while(i < temp1Length && j < temp2Length){
            if (temp1[i]<temp2[j]){
                arr[current]=temp1[i];
                i++;
            }
            else {
                arr[current]=temp2[j];
                j++;
            }
            current++;
        }
        while(i<temp1Length){
            arr[current]= temp1[i];
            i++;
            current++;
        }
         while(i<temp2Length){
            arr[current]= temp2[j];
            j++;
            current++;
        }
    }
    public static void main(String[] args) {
        Solution soft= new Solution();
        int []arr1=new int[]{8,3,1,2,9,934,34,25,2345,11345,145236,235};
        soft.sort(arr1,0,arr1.length-1);
System.out.println(Arrays.toString(arr1));
    }
}

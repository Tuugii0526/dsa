
import java.util.Arrays;











class SoftMergeSort{
    public void merge(int []arr , int left, int right,int mid){

   int i=0, j=0 ,current=left;
   int temp1Length=mid-left+1;
int temp2Length=right-mid;
int [ ] temp1=new int [temp1Length];
int [] temp2=new int[temp2Length];
 for (int m=0; m<temp1Length;m++)
 {
temp1[m]=arr[m+left];
 }
 for(int m=0;m<temp2Length;m++){
temp2[m]=arr[mid+m+1];
 }
 while (i < temp1Length && j < temp2Length){
    if(temp1[i]<temp2[j]){
        arr[current]=temp1[i];
        i++;
    }else {
        arr[current]=temp2[j];
        j++;
    }
    current++;
 }
 while (i < temp1Length){
    arr[left+i+1]=temp1[i];
    i++;
 }
 while(j<temp2Length){
    arr[mid+1+j]=temp2[j];
    j++;
 }
    }
    public void sort(int []arr, int left,int right){
        if (left < right) { 
            int mid= left + (right-left)/2;
            this.sort(arr, left, mid);
            this.sort(arr, mid+1, right);
            this.merge(arr, left, right,mid);
        }
    }
    public static void main(String[] args) {
        SoftMergeSort soft= new SoftMergeSort();
        int [] arr=new int []{4,2,5,21,1};
        soft.sort(arr, 0, arr.length-1);
        System.out.println("sorted:"+Arrays.toString(arr));
    }
}
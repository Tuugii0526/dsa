
import java.util.Arrays;

class Soft05p11 {
    public void sort (int [] arr,int start,int end){
        if(start<end){
            int mid= start+(end-start)/2;
            this.sort(arr,start,mid);
            this.sort(arr,mid+1,end);
            this.merge(arr, start, mid, end);
        }
    }
    public void merge(int []arr,int start,int mid,int end){
        int i=0,j=0,current=start;
        int temp1Length=mid-start+1;
        int temp2Length=end-mid;
        int []temp1=new int[temp1Length];
        int[]temp2=new int[temp2Length];
        for(int m=0;m<temp1Length;m++){
            temp1[m]=arr[start+m];
        }
        for(int m=0;m<temp2Length;m++){
            temp2[m]=arr[mid+1+m];
        }
        while (i < temp1Length && j < temp2Length){
            if(temp1[i] < temp2[j])
            {
                arr[current]=temp1[i];
                i++;
            }else
             {
                 arr[current]=temp2[j];
                 j++;
             }
             current++;
        }
        while(i<temp1Length){
            arr[current]=temp1[i];
            i++;
            current++;
        }
        while(j<temp2Length){
            arr[current]=temp2[j];
        j++;
        current++;
        }
    }
    public void rearrange(int arr[]) {
        // code here
        int length=arr.length;
        int minIndex=0;
        int maxIndex=length-1;
        this.sort(arr,0,arr.length-1);
        int M = arr[maxIndex]+1;

        System.out.println("sorted:"+Arrays.toString(arr));
        for(int i=0;i<length;i++){
            System.out.println("index:"+i);
            if ((i & 1)==0){
                System.out.println("initial element:"+arr[maxIndex]%M);
                arr[i]+= (arr[maxIndex]%M)*M;
                maxIndex--;
            }
            else {
                System.out.println("initial element:"+arr[minIndex]%M);
                arr[i]+=(arr[minIndex]%M)*M;
                minIndex++;
            }
        }
        for (int i=0;i<length;i++){
            arr[i]=arr[i]/M;
        }
        
        
    }
     public static void main(String[] args) {
        Soft05p11 soft=new Soft05p11();
        int [] arr=new int[]{890 ,289 ,483 ,519 ,550 ,447 ,946 ,957 ,92, 783};
        soft.rearrange(arr);
        System.out.println(Arrays.toString(arr));
    }
}

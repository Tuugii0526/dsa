class Soft05p12 {
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
    public int missingNumber(int[] arr) {
        // code here
        int length=arr.length;
        int smallPositive=1;
        this.sort(arr,0,length-1);
        for (int i=0;i<length;i++){
            if(arr[i]==smallPositive)
            {
                smallPositive++;
            }
        }
        return smallPositive ;
    }
    public static void main(String[] args) {
        Soft05p12 soft=new Soft05p12();
        int []arr= new int[]{2, -3, 4, 1, 1, 7};
        System.out.println(soft.missingNumber(arr));
    }
}

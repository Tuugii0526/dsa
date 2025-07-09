class Soft05a03 {
    public  boolean isSortedRotated(int[] arr) {
        int upTrendCount=0;
        int downTrendCount=0;
        int lastTrend ;
       if(arr[0]<arr[1])
       {
           upTrendCount++;
           lastTrend=1;
       }
       else {
           downTrendCount++;
           lastTrend=-1;
       }
       int trendChanged=0;
        for(int i=2;i<arr.length;i++){
            if (arr[i-1]<arr[i])
            {
                upTrendCount++;
                if(lastTrend !=1){
                    
                    lastTrend=1;
                    trendChanged++;
                }
                
            }
            else if (arr[i-1]>arr[i]) {
                downTrendCount++;
                if(lastTrend!=-1){
                    lastTrend=-1;
                    trendChanged++;
                }
            }
            
        }
        if( trendChanged==1 || trendChanged==2){
            if (upTrendCount>downTrendCount)
            {
                return arr[0] >=arr[arr.length-1];
            }
            else {
                return arr[0]<=arr[arr.length-1];
            }
        }
        return false;
    }
    public static void main(String[] args) {
        int[] arr= new int[]{2,3,4,1};
        Soft05a03 soft=new Soft05a03();
        System.out.println(soft.isSortedRotated(arr));
    }
}
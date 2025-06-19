class SoftP0408{
    public static int solution(int n){
        if(n/10 < 1)return n;
        return SoftP0408.solution(SoftP0408.getDigitsSum(n));
    }
    public static int getDigitsSum(int n){
        int sum=0;
        while(n>0){
            sum+=n%10;
            n/=10;
        }
        return sum;
    }

}
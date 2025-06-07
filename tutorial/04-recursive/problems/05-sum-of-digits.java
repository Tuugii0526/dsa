class SoftP0405{
    public static int solution(int n){
        if(n<=0)return 0;
        return SoftP0405.solution(n/10)+n%10;
    }
}
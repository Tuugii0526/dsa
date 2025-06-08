class SoftP0407{
    public static int solution(int n ,char from, char aux, char to){
        if(n==0)return 0;
        int res1= SoftP0407.solution(n-1, from, to, aux);
        int res2=SoftP0407.solution(n-1, aux, from, to);
        return res1+res2+1;
    }
}
class SoftP0401{
    private int getReverse(int n){
        int res=0;
        while (n>0){
            res*=10;
            res+=n%10;
            n/=10;
        }
        return res;
    }
private int getReversePower(int n, int power){
int res=1;
while(n>0){
if((power & 1)==1){
  res*=n;  
}
power>>=1;
n*=n;
}
return res;
}
public int solution(int n){
    int reverse= this.getReverse(n);
    int res=this.getReversePower(n, reverse);
    return res;
}
    public static void main(String[] args) {
        int hi=10;
        SoftP0401 softP0401 = new SoftP0401();
        System.out.println(softP0401.solution((hi)));
    }
}
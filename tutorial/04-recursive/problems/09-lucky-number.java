class SoftP0409{
   public static int isLucky(int n){
  return SoftP0409.solution(2, n);
   }
   public static int solution(int current, int n){
    if(current > n)return 1;
    if(current %n==0)return 0;
    int occurences= n/current;
    return SoftP0409.solution(current+1, n-occurences);
   }
   public static void main(String[] args) {
       System.out.println(9/4);
   }
}
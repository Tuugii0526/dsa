class SoftP0402{
    public static int fib(int n){
if(n==1 || n==2)return 1;
return SoftP0402.fib(n-1)+SoftP0402.fib(n-2);
    }
    public static int[] fib2(int n){
        if(n==1)return new int[]{0,1};
       if(n==2)return new int[]{0,1};
       if(n==3)return new int[]{1,1};
       int [] numbers=SoftP0402.fib2(n-1);
       return new int[]{numbers[1],numbers[1]+numbers[0]};
    }
    public static void main(String[] args) {
        System.out.println(SoftP0402.fib(4));
        System.out.println(java.util.Arrays.toString(SoftP0402.fib2(10)));
    }
}
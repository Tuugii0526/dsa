class SoftP0404{
    public static void printNos(int n){
if(n==0)return;
SoftP0404.printNos(n-1);
System.out.print(n);
    }
}
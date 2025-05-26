class TowerOfHanoi{
     static void solution (int n , char a, char b, char c){
     if(n==0){
        return ;
     }   
     solution(n-1,a,c,b);
     System.out.println("moving "+ n+ " from "+a + " to " + c);
     solution(n-1,b,a,c);
    }
    public static void main(String[] args) {
        int n=3 ;
        char a='A', b='B', c= 'C';
        solution(n, a , b, c);
    }
}

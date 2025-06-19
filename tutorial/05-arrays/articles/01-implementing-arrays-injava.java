import java.util.*;
class Example1 { 
    public static void main(String[] args) {
        int [] intArray;
        intArray=new  int[3];
     intArray[0]=1;
     intArray[1]=2;
     intArray[2]=3;
     for (int elem : intArray) {
         System.out.println(elem);
     }
    }
}
class Example2 { 
    public static void main(String[] args) {
        int size=4;
        ArrayList<Integer> arr = new ArrayList<Integer>(size);
        for (int i = 1; i <= size; i++) {
            arr.add(i);
        }
        System.out.println(arr);
    }
}
class Example3{
    public static void main(String[] args) {
        Vector<Integer> v= new Vector<>(20); 
        v.add(3);
        System.out.println(v);
    }
}
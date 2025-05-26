class Soft0408{
    static void printSets(String str , int index , String curr){
        int strLength= str.length();
        if(strLength==index){
            System.out.println(curr);
            return ;
        }
        printSets(str, index+1, curr);
printSets(str, index+1, curr+str.charAt(index));
    }
    public static void main(String[] args) {
        String str="abc", curr="";
        int index =0;
        printSets(str, index, curr);
    }
}
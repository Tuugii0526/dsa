
import java.util.ArrayList;
import java.util.HashMap;

class SoftP0410{
    public ArrayList<Integer> numbers;
    public HashMap<Integer,String> numToLetters;
    public SoftP0410(){
        this.numbers=this.getNumbers();
        this.numToLetters=this.getNumToLetters();
    }
    private ArrayList<Integer> getNumbers(){
         ArrayList<Integer> numbersGen = new ArrayList<>();
        for (int i = 2; i < 10; i++) {
            numbersGen.add(i);
        }
        return numbersGen;
    }
    private HashMap<Integer,String> getNumToLetters(){
        HashMap<Integer,String> hashMap= new HashMap<>();
        int lastCharCode=97;
        for(Integer num : this.numbers){
            String letters="";
            int lettersLength=3;
            if(num==7 || num==9){
                lettersLength=4;
            }
            for(int i=lastCharCode;i<lastCharCode+lettersLength;i++)
            {
                String str=Character.toString(i);
                letters = letters.concat(str);
            }
            hashMap.put(num,letters);
            lastCharCode+=lettersLength;
        }
        return hashMap;
    }
    public ArrayList<String> solution (int[] arr, String subString){
        if(arr.length==subString.length()){
            ArrayList<String> result = new ArrayList<>();
            result.add(subString);
            return result;
        }
        ArrayList<String> result= new ArrayList<>();
        String letters= this.numToLetters.get(this.numbers.get(subString.length()));
        for(int i=0;i<letters.length();i++)
        {
            ArrayList<String> subresult=this.solution(arr, subString+letters.charAt(i));
            result.addAll(subresult);
        }
        return result;
    }
    public static void main(String[] args) {
        SoftP0410 softp0410= new SoftP0410();
        System.out.println(softp0410.solution(new int[] {2, 3,4,5,6,7,8,9}, ""));
        
    }
}
import java.util.ArrayList;
class SoftP0406{
public static  ArrayList<String> solution(String str, int currIndex, String compound){
if(str.length()==currIndex)
{
    ArrayList<String> result = new ArrayList<>();
    result.add(compound);
    return result;
}
ArrayList<String> arr1 = SoftP0406.solution(str, currIndex + 1, compound);
ArrayList<String> arr2 = SoftP0406.solution(str, currIndex + 1, compound+str.charAt(currIndex));
arr1.addAll(arr2);
return arr1;
}
public static void main(String[] args) {
    ArrayList<String> result= SoftP0406.solution("abc", 0, "");
    System.out.println(result);
}
}
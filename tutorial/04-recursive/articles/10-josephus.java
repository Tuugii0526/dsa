/**
 * 1. Жижиг алхамаас эхлэцгээе . 
 * 2. n ийн к дахь хүнийг юуны түрүүнд олцгооё .Энд n хүмүүс нь 0 ээс эхэлж тоологдоно. 
 * 3. Том асуудлыг жижиг асуудалд хуваацгаая .
 * 4. sandeep jain багшийн хэлснээр асуудал гарсан тухайн үед л тухайн программын шинэ ухагдахууныг судлаарай хэмээсэн билээ 
 * 5. асуудлыг бид биднээ шийдэх нь бидний сэтгэхэд тусалдаг ажээ .
 * 6. Бид энэхүү алгоритмыг бодолт амьдралд хэрэглэх үүднээс website бүтээе гэсэн санаа байна .
 */
class Solution {
    static int jos(int [] numbers ,int n , int k){
        int index;
        if(k>n)
        {
        index= k%n-1;
        }
        index= k-1;
    }
    static int [] getZeroToN(int limit){
        int []numbers=new int[limit];
        for (int i = 0; i <limit; i++) {
         numbers[i]=i;
        }
        return numbers;
    }
    public static void main(String[] args) {
        int n=4, k=2;
        int []numbers=getZeroToN(n);
        System.out.println(jos(numbers,n,k));
    }
}
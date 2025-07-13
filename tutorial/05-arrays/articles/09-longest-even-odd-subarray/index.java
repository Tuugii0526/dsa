
class Solution05a09 {

    public static int solution(int[] arr) {
        int maxLen = 1;
        int currLen = 1;
        int length = arr.length;
        for (int i = 1; i < length; i++) {
            if ((arr[i] % 2) != (arr[i - 1] % 2)) {
                currLen++;
            } else {
                maxLen = Math.max(currLen, maxLen);
                currLen = 1;
            }
        }
        maxLen = Math.max(currLen, maxLen);
        return maxLen;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4, 5};
        System.out.println(Solution05a09.solution(arr));
    }
}

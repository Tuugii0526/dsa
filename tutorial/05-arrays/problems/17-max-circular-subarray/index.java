
class Solution {

    public int circularSubarraySum(int arr[]) {
        // code here
        int length = arr.length;
        int maxEnding = arr[0];
        int minEnding = arr[0];
        int max = arr[0];
        int min = arr[0];
        int totalSum = 0;
        int res = 0;

        for (int i = 1; i < length; i++) {
            maxEnding = Math.max(maxEnding + arr[i], arr[i]);
            max = Math.max(maxEnding, max);
            minEnding = Math.min(minEnding + arr[i], arr[i]);
            min = Math.min(minEnding, min);
        }
        for (int i = 0; i < length; i++) {
            totalSum += arr[i];
        }
        System.out.println("min:" + min);
        System.out.println("max:" + max);
        System.out.println("totalSum:" + totalSum);
        if (min == totalSum) {
            return max;
        }
        res = Math.max(max, totalSum - min);
        return res;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{-4, -2, -1, -2, -6};
        Solution soft = new Solution();

        System.out.println(soft.circularSubarraySum(arr));
    }
}

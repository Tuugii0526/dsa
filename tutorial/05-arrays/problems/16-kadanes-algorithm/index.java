
class Solution {

    int maxSubarraySum(int[] arr) {
        // Code here
        int length = arr.length;
        int maxEnding = arr[0];
        int res = arr[0];
        for (int i = 1; i < length; i++) {
            maxEnding = Math.max(maxEnding + arr[i], arr[i]);
            res = Math.max(maxEnding, res);
        }
        return res;
    }
}

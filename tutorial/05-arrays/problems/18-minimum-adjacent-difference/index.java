
class Solution {

    // Function to find minimum adjacent difference in a circular array.
    //  arr[]: input array
    //  n: size of array
    public static int minAdjDiff(int arr[], int n) {

        // Your code here
        int min = Math.abs((arr[n - 1] - arr[0]));

        for (int i = 1; i < n; i++) {
            min = Math.min(min, Math.abs((arr[i - 1] - arr[i])));
        }
        return min;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{8, -8, 9, -9, 10, -11, 12};
        int n = arr.length;
        System.err.println(Solution.minAdjDiff(arr, n));
    }
}

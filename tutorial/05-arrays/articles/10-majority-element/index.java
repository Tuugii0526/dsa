
class Solution05a10 {

    public static int getCandidate(int[] arr) {
        int maj_index = 0;
        int count = 1;
        int length = arr.length;
        for (int i = 1; i < length; i++) {
            if (arr[maj_index] == arr[i]) {
                count++;
            } else {
                count--;
            }
            if (count == 0) {
                maj_index = i;
                count = 1;
            }
        }
        return arr[maj_index];

    }

    public static boolean checkCandidate(int[] arr, int candidate) {
        int count = 0;
        int length = arr.length;
        for (int i = 0; i < length; i++) {
            if (arr[i] == candidate) {
                count++;
            }
        }
        return count > (length / 2);
    }

    public static void main(String[] args) {
        int[] arr = new int[]{3, 3, 4, 2, 4, 4, 2, 4, 4, 8, 4};
        int candidate = Solution05a10.getCandidate(arr);
        System.out.println(candidate);
        System.out.println(Solution05a10.checkCandidate(arr, candidate));
    }
}

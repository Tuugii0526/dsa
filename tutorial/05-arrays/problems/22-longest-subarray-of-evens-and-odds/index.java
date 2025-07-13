
class Solution22p05 {

    public static int maxEvenOdd(int arr[]) {
        //  code here
        int length = arr.length;
        int firstElement = arr[0];
        int expect = (firstElement % 2 == 0) ? 1 : 0;
        int currentMax = 1;
        int res = 1;
        for (int i = 1; i < length; i++) {
            if ((arr[i] % 2) == expect) {
                currentMax++;
                expect = expect == 0 ? 1 : 0;
            } else {
                expect = (arr[i] % 2 == 0) ? 1 : 0;
                res = Math.max(currentMax, res);
                currentMax = 1;
            }
        }
        res = Math.max(currentMax, res);
        return res;

    }

    public static void main(String[] args) {
        int[] arr = new int[]{74,
            80, 8, 13, 37, 49, 20, 6};
        System.out.println(Solution22p05.maxEvenOdd(arr)
        );
    }
}

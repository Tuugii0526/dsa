
class Soft05a07 {

    public static int solution(int[] arr) {
        int length = arr.length;
        int min = arr[0];
        int maxDif = 0;
        for (int i = 1; i < length;) {
            if (min > arr[i]) {
                min = arr[i];
            } else {
                maxDif = Math.max(maxDif, arr[i] - min);
            }
        }
        return maxDif;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{2, 3, 10, 6, 4, 8, 1};
        System.out.println(Soft05a07.solution(arr));
    }
}

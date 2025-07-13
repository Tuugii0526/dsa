
class Soft05a08 {

    public static void solution(int[] arr) {
        int frequency = 1;
        int length = arr.length;
        for (int i = 1; i < length; i++) {
            if (arr[i] == arr[i - 1]) {
                frequency++;
            } else {
                System.out.println(arr[i - 1] + " occurred " + frequency + " times");
                frequency = 1;
            }
        }
        System.out.println(arr[length - 1] + " occurred " + frequency + " times");
    }
}


class Soft05p15 {

    public int solution2(int arr[]) {
        int length = arr.length;
        int leftLimit = arr[0];
        int rightLimit = arr[length - 1];
        int totalWater = 0;
        int possibleWater = 0;
        int lastLeftIndex = 0;
        for (int i = 1; i < length; i++) {
            if (arr[i] >= leftLimit) {
                totalWater += possibleWater;
                possibleWater = 0;
                leftLimit = arr[i];
                lastLeftIndex = i;

            } else {
                possibleWater += leftLimit - arr[i];
            }

        }
        possibleWater = 0;
        System.out.println(
                "last:" + lastLeftIndex
        );
        System.out.println("totalWater" + totalWater
        );
        System.err.println("--------------");

        for (int i = length - 2; i >= lastLeftIndex; i--) {
            if (arr[i] >= rightLimit) {
                totalWater += possibleWater;
                possibleWater = 0;
                rightLimit = arr[i];
            } else {
                possibleWater += rightLimit - arr[i];

            }
            System.out.println("possibleWater" + possibleWater
            );

        }
        return totalWater;
    }

    public static void main(String[] args) {
        Soft05p15 soft = new Soft05p15();
        int[] arr = new int[]{3, 0, 1, 0, 4, 0, 2};
        // System.out.println(soft.maxWater(arr));
        System.err.println(soft.solution2(arr));
    }
}

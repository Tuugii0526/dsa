
class Solution {

    int stockBuySell(int arr[]) {
        // code here
        int profit = 0;
        int min = arr[0];
        int maxProfit = 0;
        int length = arr.length;
        for (int i = 1; i < length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                profit += maxProfit;
                maxProfit = 0;
            } else {
                if (arr[i] < arr[i - 1]) {
                    min = arr[i];
                    profit += maxProfit;
                    maxProfit = 0;
                } else {
                    maxProfit = Math.max(maxProfit, arr[i] - min);
                }
            }
        }

        return profit + maxProfit;
    }
}


import java.util.ArrayList;

class Solution {

    public ArrayList<Integer> pattern(int n) {
        // code here
        ArrayList<Integer> arr = new ArrayList<>();
        this.solution(n, arr);
        return arr;
    }

    public void solution(int n, ArrayList<Integer> arr) {
        if (n >= 0) {
            arr.add(n);
            this.solution(n - 5, arr);
            if (n != 0) {
                arr.add(n);
            }
        } else {
            arr.add(n);
        }

    }

    public static void main(String[] args) {
        Solution soft = new Solution();
        System.out.println("soft" + soft.pattern(4));
    }
}

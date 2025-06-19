
import java.util.Arrays;

// Complete this function, Geeks
class Solution {
    // You need to insert the given element at the given index.
    // After inserting the elements at index, elements
    // from index onward should be shifted one position ahead
    // You may assume that the array already has sizeOfArray - 1
    // elements.
    public static void insertAtIndex(int arr[], int sizeOfArray, int index, int element) {
        // Your code here, Geeks
        for(int i=sizeOfArray-1; i>index;i--){
            arr[i]=arr[i-1];
        }
        arr[index]=element;
    }
    public static void main(String[] args) {
        int[] arr= new int[]{1,2,3};
        Solution.insertAtIndex(arr, 3, 1, 2);
        System.out.println(Arrays.toString(arr));
    }
}
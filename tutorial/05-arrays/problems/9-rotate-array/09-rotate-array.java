
import java.util.Arrays;

// User function Template for Java

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    static void reverse(int[] arr,int startIndex,int endIndex){
        int temp;
        while(startIndex<endIndex){
            temp=arr[startIndex];
            arr[startIndex]=arr[endIndex];
            arr[endIndex]=temp;
            startIndex++;
            endIndex--;
        }
    }
    static void rotateArr(int arr[], int d) {
        // add your code here
        int length=arr.length;
        int modD=d%(length);
        if(modD==0)return;
        Solution.reverse(arr,0,modD-1);
        Solution.reverse(arr,modD,length-1);
        Solution.reverse(arr,0,length-1);
    }
    public static void main(String[] args) {
        int [] arr=new int[]{116,759,105,239,334,861,291,223,425,255,312,255,818,280,796,261,796,609,934,202,978,858,982,772,878,718,918,331,501,683,107,372,607,989,300,287,878,153,209,538,291,833,133,846,845,29,856,166,864,956,895,526,383,349,550,527,142,638,529,742,380,197,439,833,713,126,479,112,582,207,308,69,14,495,890,605,91,773,667,720,175,497,62,369,590,454,551,955,472,205,623,24,761,944,936,605,468,888,922,168,184,691,85,991,509,388,222,693,315,742,151,348,941,14,917,10,570,669,568,198,325,268,510,808,502,600,450,990,100,369,189,770,728,964,700,10,539,429,33,105,156,719,901,58,667,91,762,636,484,64,970,239,841,550,297,843,142,366,718,820,320,313,701,229,96,890,935,162,500,595,726,326,49,373,730,896,31,888,987,747,920,615,670,754,257,147,984,36,975,386,171,348,211,214,398,228,16,821,733,165,202,89,399,945,899,677,823,816,493,958,867,591,82,265,668,905,420,755,76,600,81,430};
        Solution.rotateArr(arr, 956);
        System.out.println(Arrays.toString(arr));
    }
}
// Function to find element in sorted array

int leftIndex(int N, int arr[], int X) {

    // Your code here
    int ans =-1;
    int left=0;
    int right=N-1;
    int mid;
    while(right>=left){
        mid=left+(right-left)/2;
        if(arr[mid]==X){
            right=mid-1;
            ans=mid;
        }
        if(arr[mid]<X)
        {
            left=mid+1;
        }
        else {
            right=mid-1;
        }
    }
    return ans;
}

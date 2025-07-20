#include <iostream>
#include<vector>
using namespace std;
class Soft{
    public :
        void changeByReference( vector<int>& arr){
            arr[0]=100;
        }
        void printVector(vector<int>& arr){
            for(const auto num:arr){
                cout << num;
            }
        }
        void changeByPointer(int* arr){
            arr[0]=999;
        }
};
int main(){
    Soft soft;
    int  arr[]={9,8,7,6};
    int size= sizeof(arr)/sizeof(arr[0]);
    vector<int> vec={1,2,3,4,5,6};
    cout<<"---------Vector--------"<< endl;
    cout << "Before:"<< endl;
    soft.printVector(vec);
    soft.changeByReference(vec);
    cout << endl;
    cout << "After:" << endl;
    soft.printVector(vec);
    cout << endl;
    cout<<"---------Array--------" << endl;
    cout << "Before:" << endl;
    for (int i = 0; i < size; ++i) {
        cout << arr[i] << " "; 
    }
    soft.changeByPointer(arr);
    cout << "After:" << endl;
    for (int i = 0; i < size; ++i) {
        cout << arr[i] << " "; 
    }
    return 0;
}
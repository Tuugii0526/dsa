cpp solution

`solution 1:`

```
#include <bits/stdc++.h>
using namespace std;

// Function for finding the determinant of a matrix.
int getDet(vector<vector<int>>& mat, int n) {

    // Base case: if the matrix is 1x1
    if (n == 1) {
        return mat[0][0];
    }

    // Base case for 2x2 matrix
    if (n == 2) {
        return mat[0][0] * mat[1][1] -
               mat[0][1] * mat[1][0];
    }

    // Recursive case for larger matrices
    int res = 0;
    for (int col = 0; col < n; ++col) {

        // Create a submatrix by removing the first
        // row and the current column
        vector<vector<int>> sub(n - 1, vector<int>(n - 1));
        for (int i = 1; i < n; ++i) {
            int subcol = 0;
            for (int j = 0; j < n; ++j) {

                // Skip the current column
                if (j == col) continue;

                // Fill the submatrix
                sub[i - 1][subcol++] = mat[i][j];
            }
        }

        // Cofactor expansion
        int sign = (col % 2 == 0) ? 1 : -1;
        res += sign * mat[0][col] * getDet(sub, n - 1);
    }

    return res;
}

// Driver program to test the above function
int main() {
    vector<vector<int>> mat = { { 1, 0, 2, -1 },
                                 { 3, 0, 0, 5 },
                                 { 2, 1, 4, -3 },
                                 { 1, 0, 5, 0 } };
    cout << getDet(mat, mat.size()) << endl;
    return 0;
}
```

`solution 2:`

```
#include <iostream>
#include <vector>
#include <cmath> // For pow function
using namespace std;

// Function to get determinant of a matrix
int getDet(vector<vector<int>>& mat) {

    int n = mat.size();

    int num1, num2, det = 1, index, total = 1;

    // Temporary array for storing row
    vector<int> temp(n + 1);

    // Loop for traversing the diagonal elements
    for (int i = 0; i < n; i++) {
        index = i;

        // Finding the index which has non-zero value
        while (index < n && mat[index][i] == 0) {
            index++;
        }

        if (index == n) // If there is no non-zero element
        {
            continue; // The determinant of the matrix is zero
        }
        if (index != i) {

            // Loop for swapping the diagonal element row and index row
            for (int j = 0; j < n; j++) {
                swap(mat[index][j], mat[i][j]);
            }

            // Determinant sign changes when we shift rows
            det *= pow(-1, index - i);
        }

        // Storing the values of diagonal row elements
        for (int j = 0; j < n; j++) {
            temp[j] = mat[i][j];
        }

        // Traversing every row below the diagonal element
        for (int j = i + 1; j < n; j++) {
            num1 = temp[i]; // Value of diagonal element
            num2 = mat[j][i]; // Value of next row element

            // Traversing every column of row and
            // multiplying to every row
            for (int k = 0; k < n; k++) {

                // Making the diagonal element and next row element equal
                mat[j][k] = (num1 * mat[j][k]) - (num2 * temp[k]);
            }
            total *= num1;
        }
    }

    // Multiplying the diagonal elements to get determinant
    for (int i = 0; i < n; i++) {
        det *= mat[i][i];
    }

    return (det / total); // Det(kA)/k = Det(A);
}

// Driver code
int main() {
    vector<vector<int>> mat = {
        { 1, 0, 2, -1 },
        { 3, 0, 0, 5 },
        { 2, 1, 4, -3 },
        { 1, 0, 5, 0 }
    };
    cout << getDet(mat) << endl;
    return 0;
}
```

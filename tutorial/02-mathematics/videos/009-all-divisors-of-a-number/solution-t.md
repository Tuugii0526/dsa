We have 3 approaches to solve the problem: Naive Approach, Efficient Approach & More Efficient Approach

1. Naive Approach:

A Naive Solution would be to iterate all the numbers from 1 to n, checking if that number divides n and printing it.

Time Complexity: O(n)

Auxiliary Space: O(1)

2. Efficient Approach

If we look carefully, all the divisors are present in pairs.

For example if n = 100, then the various pairs of divisors are: (1,100), (2,50), (4,25), (5,20), (10,10)

Using this fact we could speed up our program significantly. We, however, have to be careful if there are two equal divisors as in the case of (10, 10). In such case, we’d print only one of them.

We iterate through all numbers from 1 to square root of n in this case.

Time Complexity: O(sqrt(n))

Auxiliary Space: O(1)

3. More Efficient Approach

We want to print the divisors in sorted order.

The idea is to 1st print all divisors from 1 (inclusive) to square root n (exclusive)

Then, print all divisors from square root n (inclusive) to n (inclusive)

Time Complexity: O(sqrt(n))

Auxiliary Space: O(1)

### Efficient solution

One of the divisors in every pair is smaller than or equal to Math.sqrt(n).For a pair `(x,y)`,x\*y=n. Let x be the smaller .i.e. x<=y. `x*x<=n`x<=Math.sqrt(n).

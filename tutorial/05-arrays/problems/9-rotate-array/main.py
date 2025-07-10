def getNumberSeparatedByComman(str):
    splitList= str.split(' ')
    return ','.join(splitList)
str="28 13 47 33 83 72 19 86 37 4 28 22 83 32 9 63 68 92 8 0 39 78 45 33 30 71 6 37 39 35 86 48 13 16 76 34 70 64 31 92 74 0 16 78 57 92 10 96 21 65 20 25 14 34 23 21 96 86 62 82 67 41 32 73 16 9 53 78 66 6 47 69 78 1 14 42 36 17 49 79 59 84 87 61 39 81 70 56 48 5 75 19 58"
print(getNumberSeparatedByComman(str))
module.exports = function toReadable(number) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const string = String(number);
    const arr = string.split("");

    if ((arr.length == 2 && arr[0] < 2) || arr.length == 1) {
        return numbers[number];
    }
    if (arr.length < 3 && arr[1] && arr[0] > 1) {
        return `${dozens[arr[0]]} ${arr[1]>0? numbers[arr[1]]:''}`.trim();
    }
    if (arr[2] && arr[1] < 2) {
        return `${numbers[arr[0]]} hundred ${
            arr[2] > 0 || (arr[1] > 0 && arr[2] == 0)
                ? numbers[+arr[1] * 10 + +arr[2]]
                : ""
        }`.trim();
    } else {
        return `${numbers[arr[0]]} hundred ${
            arr[1] > 1 ? dozens[arr[1]] : ""
        } ${arr[2] > 0 ? numbers[arr[2]] : ""}`.trim();
    }
};

const myFunctionTest = (expected, found) => {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

const max = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

const maxOfThree = (num1, num2, num3) => {
    return max(max(num1, num2), num3);
}
console.log(
    'Expected output of maxOfThree(5,4,44) is 44  ' +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
    'Expected output of maxOfThree(55,4,44) is 55  ' +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

const isVowel = (character) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (character.toLowerCase() === vowels[i]) {
            return true;
        }
    }
    return false;
}
console.log(
    'Expected ouptput of isVowel("a") is true ' +
    myFunctionTest(true, isVowel('a'))
);
console.log(
    'Expected ouptput of isVowel("b") is false ' +
    myFunctionTest(false, isVowel('b'))
);

const sum = (arrayList) => {
    return arrayList.reduce((a, b) => a + b);
}

console.log(
    'Expected output of sum([1, 2, 3, 4]) is 10 ' +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);

const multiply = (arrayList) => {
    return arrayList.reduce((a, b) => a * b);
}
console.log(
    'Expected output of multiply([1, 2, 3, 4]) is 24 ' +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);

const reverse = (param) => {
    let reversedString = "";
    for (let i = param.length - 1; i >= 0; i--) {
        reversedString += param.charAt(i);
    }
    return reversedString;
}
console.log(
    'Expected output of reverse("jag testar") is ratset gaj' +
    myFunctionTest('ratset gaj', reverse('jag testar'))
);

const findLongestWord = (wordList) => {
    return wordList.reduce((a, b) => (a.length > b.length ? a : b));
}
console.log(
    "Expected output of findLongestWord(['Sandip', 'Mahato', 'Ramesh', 'HelloWorld']) is HelloWorld" +
    myFunctionTest(
        'HelloWorld',
        findLongestWord(['Sandip', 'Mahato', 'Ramesh', 'HelloWorld'])
    )
);

function filterLongWords(wordList, paramLength) {
    let filteredList = [];
    for (var i = 0; i < wordList.length; i++) {
        if (wordList[i].length > paramLength) {
            filteredList.push(wordList[i]);
        }
    }
    return filteredList;
}
console.log(
    "Expected output of filterLongWords(['Java', 'Python', 'Ruby', 'C', 'C++'], 3) is Java, Python, Ruby" +
    myFunctionTest(
        JSON.stringify(['Java', 'Python', 'Ruby']),
        JSON.stringify(
            filterLongWords(['Java', 'Python', 'Ruby', 'C', 'C++'], 3)
        )
    )
);

const a = [1, 3, 5, 3, 3];
const multiplyByTen = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log(
    'Output of multiplyByTen for [1, 3, 5, 3, 3] is [' + multiplyByTen + ']'
);

const equalsThree = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log('Output of equalsThree for [1, 3, 5, 3, 3] is [' + equalsThree + ']');

const productOfAll = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log('Output of productOfAll for [1, 3, 5, 3, 3] is ' + productOfAll);

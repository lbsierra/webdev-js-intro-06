"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;
    if (num % 2 === 0) {
        evenOrOddElement.innerHTML = "Even";
    } else {
        evenOrOddElement.innerHTML = "Odd";
    }
}

function sumTheNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    sumTheNumbersElement.innerHTML = sum;

}

function createNumberArray() {
    const numberArray = [];

    let i = 1;
    while (i <= 10) {
        numberArray.push(i);
        i++;
    }
    createNumberArrayElement.innerHTML = numberArray;

}

function render() {
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});

// script.js
const text1 = "Welcome To";
const text2 = "THE BEST MEDICAL SERVICES";
const text3 = "WE CARE FOR YOUR HEALTH";

const typingText1 = document.getElementById('typing-text1');
const typingText2 = document.getElementById('typing-text2');
const typingText3 = document.getElementById('typing-text3');

let index1 = 0;
let index2 = 0;
let index3 = 0;

function typeText1() {
    if (index1 < text1.length) {
        typingText1.innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(typeText1, 100);
    } else {
        setTimeout(typeText2, 500); // Delay before starting the next text
    }
}

function typeText2() {
    if (index2 < text2.length) {
        typingText2.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeText2, 100);
    } else {
        setTimeout(typeText3, 500); // Delay before starting the next text
    }
}

function typeText3() {
    if (index3 < text3.length) {
        typingText3.innerHTML += text3.charAt(index3);
        index3++;
        setTimeout(typeText3, 100);
    }
}

typeText1(); // Start typing the first text

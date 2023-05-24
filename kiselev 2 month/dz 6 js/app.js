const textElement = document.getElementById('text');
const lengthCheckbox = document.querySelector('.length');
const vowelsCheckbox = document.querySelector('.vowels');
const endingCheckbox = document.querySelector('.ending');

const wordsArray = textElement.innerText.split(' ');

lengthCheckbox.onchange = () => highlightWords(wordsArray, lengthCheckbox.checked, word => word.length > 8);
vowelsCheckbox.onchange = () => highlightWords(wordsArray, vowelsCheckbox.checked, word => /^[аиеёоуыэюя]/i.test(word) && word.length > 2);
endingCheckbox.onchange = () => highlightWords(wordsArray, endingCheckbox.checked, word => /тся$|ться$/i.test(word));

function highlightWords(words, isHighlighted, condition) {
    const pattern = isHighlighted ? '<span style="background:yellow">$&</span>' : '$&';
    const newWordsArray = words.map(word => condition(word) ? word.replace(/./ug, pattern) : word);
    textElement.innerHTML = newWordsArray.join(' ');
}

const textarea = document.querySelector('#textarea');
const bigWriteAllButton = document.querySelector('#bigWriteAllButton');
const smallWriteAllButton = document.querySelector('#smallWriteAllButton');
const sentenceLarge = document.querySelector('#sentenceLarge');
const firstLetter = document.querySelector('#firstLetter');
const selectAll = document.querySelector('#selectAll');

function updateTextareaValue(newValue) {
    textarea.value = '';
    textarea.value = newValue;
}

bigWriteAllButton.addEventListener('click', function(event) {
    updateTextareaValue(textarea.value.toUpperCase());
});

smallWriteAllButton.addEventListener('click', function(event) {
    updateTextareaValue(textarea.value.toLowerCase());
});

sentenceLarge.addEventListener('click', function(event) {
    const firstChar = textarea.value.slice(0, 1).toUpperCase();
    const restChars = textarea.value.slice(1);
    updateTextareaValue(firstChar + restChars);
});

firstLetter.addEventListener('click', function(event) {
    const capitalizedSentence = textarea.value.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    updateTextareaValue(capitalizedSentence)
});

selectAll.addEventListener('click', function(event) {
    textarea.select();
});

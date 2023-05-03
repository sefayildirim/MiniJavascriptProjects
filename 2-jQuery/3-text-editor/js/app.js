function updateTextareaValue(newValue) {
    $('#textarea').val(newValue);
}

$('#bigWriteAllButton').on('click', function() {
    updateTextareaValue($('#textarea').val().toUpperCase());
});

$('#smallWriteAllButton').on('click', function() {
    updateTextareaValue($('#textarea').val().toLowerCase());
});

$('#sentenceLarge').on('click', function() {
    const firstChar = $('#textarea').val().slice(0, 1).toUpperCase();
    const restChars = $('#textarea').val().slice(1);
    updateTextareaValue(firstChar + restChars);
});

$('#firstLetter').on('click', function() {
    const capitalizedSentence = $('#textarea').val().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    updateTextareaValue(capitalizedSentence)
});

$('#selectAll').on('click', function() {
    $('#textarea').select();
});

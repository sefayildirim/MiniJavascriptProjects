let count = 0;

$('#increase').on('click', function() {
    count++;
    $('#counter').text(count);
});

$('#decrease').on('click', function() {
    count--;
    $('#counter').text(count);
});

$(document).ready(function() {

    $('#rangeSpacing').on('input', function() {
        $('#borderImage').css('border-width', $('#rangeSpacing').val() + 'px');
    });

    $('#rangeBlur').on('input', function() {
        $('#borderImage').css('filter', 'blur(' + $('#rangeBlur').val() + 'px)');
    });

    $('#color').on('input', function() {
        $('#borderImage').css('border-color', $('#color').val());
    });
});

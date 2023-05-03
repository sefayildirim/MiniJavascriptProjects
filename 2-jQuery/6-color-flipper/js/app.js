function changeColor() {
    const color = '#' + Math.random().toString(16).substring(9);
    $('#color').html(color);
    $('#bodyColor').css('background-color', color);
}
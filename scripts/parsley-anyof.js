$(document).ready(function() {
    window.ParsleyValidator.addValidator('anyof', function (value, array) {
        return array.indexOf(value) >= 0;
    }, 32).addMessage('en', 'anyof', 'The value you have given is not a listed option.')
});

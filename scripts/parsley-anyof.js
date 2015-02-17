$(document).ready(function() {
    window.ParsleyValidator.addValidator('anyof', function (value, array) {
        return array.indexOf(value);
    }, 32).addMessage('en', 'anyof', 'The value you have given is not an listed option.')
});

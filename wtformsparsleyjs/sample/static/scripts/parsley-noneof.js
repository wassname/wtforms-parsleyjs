$(document).ready(function() {
    window.ParsleyValidator.addValidator('noneof', function (value, array) {
        return array.indexOf(value) === -1;
    }, 32).addMessage('en', 'noneof', 'You have entered a value which is not allowed.')
});

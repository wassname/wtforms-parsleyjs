$(document).ready(function() {
    window.ParsleyValidator.addValidator('datefield', function (str, format) {
        /**
         * Modified version of micro-strptime.js.
         * https://github.com/cho45/micro-strptime.js
         */
        if (!format) throw Error("Missing format");
        fds = {
            '%': '%',
            'A': '[a-z]+',
            'B': '[a-z]+',
            'Y': '[0-9]{4}',
            'm': '[0-9]{1,2}',
            'd': '[0-9]{1,2}',
            'H': '[0-9]{1,2}',
            'M': '[0-9]{1,2}',
            'S': '[0-9]{1,2}',
            's': '[0-9]+',
            'Z': 'UTC|Z|[+-][0-9][0-9]:?[0-9][0-9]',
            'I': '[0-9]{1,2}',
            'p': 'AM|PM'
        };
        // Create a regular expression from the format string, that matches a string of that format.
        var re = new RegExp(format.replace(/%(?:([a-zA-Z%])|('[^']+')|("[^"]+"))/g, function (_, a, b, c) {
            var fd = a || b || c;
            var d  = fds[fd];
            if (!d) throw Error("Unknown format descripter: " + fd);
            return '(' + d + ')';
        }), 'i');
        console.log(re)
        return re.test(str);
    }, 32).addMessage('en', 'datefield', 'The input needs to be in the correct date format.')
});

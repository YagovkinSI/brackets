module.exports = function check(str, bracketsConfig) {
    var brackets = str.split("");
    var stack = [];
    for (var i = 0; i < brackets.length; i++) {
        var bracket = brackets[i];
        var bracket_found = false;
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (bracket == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
                stack.pop();
                bracket_found = true;
                break;
            }
            else if (bracket == bracketsConfig[j][0]) {
                stack.push(bracket);
                bracket_found = true;
                break;
            }
        }
        if (!bracket_found)
            return false;
    }
    return stack.length == 0;
}

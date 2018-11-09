exports.isEmptyOrSpaces = str => {
    return (!str) || str.match(/^ *$/) !== null;
}
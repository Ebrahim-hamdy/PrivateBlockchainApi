exports.isEmptyOrSpaces = str => {
    return str === null || str.match(/^ *$/) !== null;
}
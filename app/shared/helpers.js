exports.isEmptyOrSpaces = str => {
    if(str) return str === null || str.match(/^ *$/) !== null;
}
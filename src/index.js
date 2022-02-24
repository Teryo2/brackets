module.exports = function check(str, bracketsConfig) {
    let patterns = [];
  for (let arr of bracketsConfig) {
    patterns.push(arr.join(''));
  }
  
  str = getStr(str, patterns);
  return str.length === 0;
}

  function getStr(str, patterns) {
    if (!patterns.some(pattern => str.includes(pattern))) {
      return str;
    } else {
      for (let i = 0; i < patterns.length; i++) {
        str = str.replace(patterns[i], '');
      }
      return getStr(str, patterns);
    }
}
module.exports = function check(str, bracketsConfig) {
  const stack = [];

  if (str.length % 2) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      const open = bracketsConfig[j][0];
      const close = bracketsConfig[j][1];

      if (current === close) {
        if (stack[stack.length - 1] === open && stack.length) {
          stack.pop();
        } else if (close === open) {
          stack.push(current);
        } else {
          return false;
        }
      } else if (current === open) {
        stack.push(current);
      }
    }
  }

  return stack.length === 0;
};

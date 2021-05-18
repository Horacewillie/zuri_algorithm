function check(n) {
  let arr = [];
  if (!Number(n)) {
    return "invalid string";
  }
  for (let i = 1; i <= n; i++) {
    if (i % 30 === 0) {
      arr.push("yu-gi-oh");
    } else if (i % 10 === 0) {
      arr.push("yu-oh");
    } else if (i % 6 === 0) {
      arr.push("yu-oh");
    } else if (i % 15 === 0) {
      arr.push("yu-oh");
    } else if (i % 2 === 0) {
      arr.push("yu");
    } else if (i % 3 === 0) {
      arr.push("gi");
    } else if (i % 5 === 0) {
      arr.push("oh");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(check("30"));

const FahrToCelsius = (val) => {
  if (Array.isArray(val)) {
    return `[${val}] is not a valid number but a/an array`;
  } else if (toString.call(val) === "[object Object]") {
    for (const [key, value] of Object.entries(val)) {
      return `{${key}: ${value}} is not a valid number but an object`;
    }
  } else if (Number(val)){
    const c = ((val - 32) * 5) / 9;
    return c.toFixed(4);
  } else if (typeof val === "string") {
    return `${val} is not a valid number but a string`;
  }
};

console.log(FahrToCelsius("6"));

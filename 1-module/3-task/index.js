function ucFirst(str) {
  // ваш код...
  if (str === "") {
    return "";
  } else {
  let result = str[0].toUpperCase() + str.slice(1);
  return result;
  }
}


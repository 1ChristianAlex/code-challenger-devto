const removeFirstLast = (myString = "") => {
  if (myString.length < 2) return "String too short";

  const removed = [].filter.call(myString, (item, i) => {
    if (i != 0 && i < myString.length - 1) {
      console.log(i != 0);
      return item;
    }
  });
  return [...removed];
};
console.log(removeFirstLast("Christian Alexsander"));

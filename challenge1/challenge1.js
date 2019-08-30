const removeFirstLast = (myString = '') => {
  if (myString.length < 2) return 'String too short';

  const removed = [].filter.call(myString, (item, i) => {
    if (i != 0 && i < myString.length - 1) {
      return item;
    }
  });

  renderResult(removed.join(''));
};
const renderResult = result => {
  document.querySelector('.diamond-section').innerHTML = result;
};
let stringTo = prompt('String to be pop and shit');
removeFirstLast(stringTo.toString());

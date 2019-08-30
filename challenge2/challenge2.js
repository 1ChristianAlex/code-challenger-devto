const renderAsteric = (asDiv = false, numAsteric = 0) => {
  let span = document.createElement('span');
  span.textContent = '*';
  let arr = new Array(numAsteric);
  let totalAsc = [].map.call(arr, item => {
    return span;
  });
  if (asDiv == true) {
    let div = document.createElement('div');
    div.append(totalAsc);
    document.querySelector('.diamond-section').append(div);
  } else {
    document.querySelector('.diamond-section').append(totalAsc);
  }
};
let decress = 0;
const Diamond = (asterisc = 0) => {
  if (typeof asterisc !== 'number') return null;

  for (let i = 0; i < asterisc; i++) {
    if (i >= asterisc / 2) {
      renderAsteric(true, i - decress);
      decress += 2;
    } else {
      renderAsteric(true, i);
    }
  }
};
let numberD = prompt('The nummber of the Diamon');
console.log(numberD);
Diamond(parseInt(numberD));

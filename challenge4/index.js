'use strict';
class Balance {
  constructor() {
    this.handleInputChange();
    this.averageObj = {};
  }
  getBalance() {
    return parseFloat(document.getElementById('balance').innerText);
  }
  setTotal(total, soma = true, idLabel) {
    let currentFild = document.getElementById('total');
    let currentTotal = parseFloat(currentFild.innerHTML);
    let totalValue = 0;
    if (soma == true) {
      let fixed = currentTotal + total;
      currentFild.innerText = fixed.toFixed(2);
      totalValue = fixed.toFixed(2);
      this.averageObj[idLabel] = total;
    } else {
      let fixed = currentTotal - total;
      currentFild.innerText = fixed.toFixed(2);
      totalValue = fixed.toFixed(2);
      delete this.averageObj[idLabel];
    }
    this.finalResult(totalValue);
    this.calAvarage();
  }
  finalResult(total) {
    let returnValue = document.querySelector('#return-value');
    let result = this.getBalance() - total;
    returnValue.innerText = result.toFixed(2);
  }
  calAvarage() {
    let valuesPrice = Object.values(this.averageObj);

    let totalPrice = valuesPrice.reduce((prev, current) => {
      let pre = parseFloat(prev);
      let curr = parseFloat(current);
      return pre + curr;
    });
    let avarage = (totalPrice / valuesPrice.length).toFixed(2);

    document.getElementById('avarage').innerText = avarage;
  }
  filterValue(id) {
    let labelValue = document.querySelector(`[for=${id}]`).innerText;
    let labelArr = labelValue.split(' ');
    let price = parseFloat(labelArr[labelArr['length'] - 1].replace(/\W+\D+/g, ''));
    return price;
  }
  handleInputChange() {
    let input = document.querySelectorAll('.list ul li input');
    input.forEach(item => {
      item.addEventListener('change', e => {
        let idLabel = e.target.id;
        let checked = e.target.checked;
        let price = this.filterValue(idLabel);

        this.setTotal(price, checked, idLabel);
      });
    });
  }
}
let challenge4 = new Balance();

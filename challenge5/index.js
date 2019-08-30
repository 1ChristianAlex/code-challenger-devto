'use strict';
class ButtonControl {
  constructor() {
    this.position = {
      bottom: 0,
      top: 0,
      left: 0,
      rigth: 0
    };
    this.handleClick();
  }
  handleClick() {
    console.log('ready');
    document.querySelectorAll('.buttons button').forEach(item => {
      let that = this;
      item.addEventListener('click', function(e) {
        let position = this.dataset.position;
        that.actionMove(position);
        console.log(position);
      });
    });
  }
  actionMove(position) {
    let persona = document.querySelector('div#img-pedro');
    switch (position) {
      case 'bottom':
        this.position.bottom -= 20;
        persona.style.bottom = `${this.position.bottom}px`;
        break;
      case 'top':
        this.position.bottom += 20;
        persona.style.bottom = `${this.position.bottom}px`;
        break;

      case 'left':
        this.position.left -= 20;
        persona.style.left = `${this.position.left}px`;
        break;

      case 'right':
        this.position.left += 20;
        persona.style.left = `${this.position.left}px`;
        break;

      default:
        break;
    }
    console.log(this.position);
  }
}
window.onload = () => {
  new ButtonControl();
};

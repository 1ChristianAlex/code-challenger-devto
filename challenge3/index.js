const coundVowels = word => {
  let regex = new RegExp(/^[aeiou]$/g);
  let vowels = [].filter.call(word, letter => {
    if (regex.test(letter) == true) {
      return letter;
    }
  });

  document.querySelector('.diamond-section').innerHTML = vowels.length;
};
let word = prompt('Your word');
coundVowels(word);

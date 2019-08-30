const renderAsteric = (asDiv = false, numAsteric = 0) => {
  let span = document.createElement("span");
  span.textContent = "*";
  let arr = new Array(numAsteric);
  let totalAsc = [].map.call(arr, item => {
    return span;
  });
  if (asDiv == true) {
    let div = document.createElement("div");
    div.append(totalAsc);
    document.querySelector(".diamond-section").append(div);
  } else {
    document.querySelector(".diamond-section").append(totalAsc);
  }
};

const Diamond = (asterisc = 0) => {
  if (typeof asterisc !== "number") return null;

  for (let i = 0; i < asterisc; i++) {
    if (i >= asterisc / 2) {
      renderAsteric(true, i);
    } else {
      renderAsteric(true, i);
    }
  }
};
Diamond(50);

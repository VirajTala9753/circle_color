let i = 0;
const setBg1 = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(".circle").style.backgroundColor = "#" + randomColor;

  return "#" + randomColor;
};

const setBg2 = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(".circle1").style.backgroundColor = "#" + randomColor;
  return "#" + randomColor;
};

const setBg3 = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(".circle2").style.backgroundColor = "#" + randomColor;
  return "#" + randomColor;
};
let colorArray = [];

function showNext() {
  setBg1();
  setBg2();
  setBg3();

  let colorobj = {
    color: setBg1(),
    color1: setBg2(),
    color2: setBg3(),
  };

  colorArray.push(colorobj);

  localStorage.setItem("colorData", JSON.stringify(colorArray));

  let colorData = JSON.parse(localStorage.getItem("colorData")) || [];
  console.log(colorData);

  let html = "";
  colorData.forEach((element, index) => {
    console.log(element);
    console.log(index);
    console.log(i);
    html += `        
    <div class=${index === i - 1 ? "active " : ""}>
    <div class="first_div_circle" style="background-color:${
      element.color
    }"></div>
    <div class="first_div_circle1" style="background-color:${
      element.color1
    }"></div>
    <div class="first_div_circle2" style="background-color:${
      element.color2
    }"></div>
  </div>
      `;
  });

  let colorContainer = document.querySelector(".circle_div");
  if (colorData.length !== 0) {
    colorContainer.innerHTML = html;
  } else {
    colorContainer.innerHTML = `nothing`;
  }

  i++;
}

let colorData = JSON.parse(localStorage.getItem("colorData")) || [];

let button = document.querySelector(".previous_button");

if (!colorData.length) {
  button.disabled = true;
} else {
  button.disabled = false;
}
function showPre() {
  let colorData = JSON.parse(localStorage.getItem("colorData")) || [];
  i--;
  console.log(i);
  console.log(colorData[i - 1].color);
  document.querySelector(".circle").style.backgroundColor =
    colorData[i - 1].color;
  document.querySelector(".circle1").style.backgroundColor =
    colorData[i - 1].color1;
  document.querySelector(".circle2").style.backgroundColor =
    colorData[i - 1].color2;

}

window.addEventListener("load", () => {
  localStorage.removeItem("colorData");
});

let i = 0;

// scroll.scrollIntoView(false);

const setBg1 = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();
  document.querySelector(".circle").style.backgroundColor = "#" + randomColor;

  return "#" + randomColor;
};

const setBg2 = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();
  document.querySelector(".circle1").style.backgroundColor = "#" + randomColor;
  return "#" + randomColor;
};

const setBg3 = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();
  document.querySelector(".circle2").style.backgroundColor = "#" + randomColor;
  return "#" + randomColor;
};
let colorArray = [];

function showNext() {
  let button_pre = document.querySelector(".previous_button");
  let data = JSON.parse(localStorage.getItem("colorData")) || [];
  console.log(data.length, "data s");
  console.log(i, "i s");

  if (data.length !== i) {
    let scroll = document.querySelector(".active");
    scroll.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });

    document.querySelector(".circle").style.backgroundColor = data[i].color;
    document.querySelector(".circle1").style.backgroundColor = data[i].color1;
    document.querySelector(".circle2").style.backgroundColor = data[i].color2;
    i++;
    let button_pre = document.querySelector(".previous_button");
    button_pre.disabled = false;
    button_pre.style.opacity = 1;

    let html = "";
    let colorData = JSON.parse(localStorage.getItem("colorData")) || [];
    colorData.forEach((element, index) => {
      console.log("", element);
      console.log(index, "prev index");
      console.log(i, "pre i");
      html += `        
    <div class=${
      index === i - 1 ? "active " : ""
    }><div class="circle_para" id="class_para" onclick="changeColor(${
        element.id
      })">
    <div class="first_div_circle" style="background-color:${
      element.color
    }"></div>
    <div class="first_div_circle1" style="background-color:${
      element.color1
    }"></div>
    <div class="first_div_circle2" style="background-color:${
      element.color2
    }"></div></div>
  </div>
        `;
    });
    let colorContainer = document.querySelector(".circle_div");
    if (colorData.length !== 0) {
      colorContainer.innerHTML = html;
    } else {
      colorContainer.innerHTML = `nothing`;
    }
    return;
  }

  setBg1();
  setBg2();
  setBg3();

  let matchedColor = colorArray.find(
    (color) =>
      color.color === setBg1() &&
      color.color1 === setBg2() &&
      color.color2 === setBg3
  );

  if (matchedColor) {
    alert("this is match color");
    return;
  }

  let colorobj = {
    id: colorArray.length + 1,
    color: setBg1(),
    color1: setBg2(),
    color2: setBg3(),
  };

  colorArray.push(colorobj);
  console.log(colorArray);

  localStorage.setItem("colorData", JSON.stringify(colorArray));

  let colorData = JSON.parse(localStorage.getItem("colorData")) || [];
  console.log(colorData);

  let html = "";
  colorData.forEach((element, index) => {
    console.log(element);
    console.log(index);
    console.log(i);
    html += `        
    <div class=${
      index === i ? "active " : ""
    }><div class="circle_para" id="circle_para" onclick="changeColor(${
      element.id
    })">
    <div class="first_div_circle" style="background-color:${
      element.color
    }"></div>
    <div class="first_div_circle1" style="background-color:${
      element.color1
    }"></div>
    <div class="first_div_circle2" style="background-color:${
      element.color2
    }"></div></div>
  </div>
      `;
  });

  let colorContainer = document.querySelector(".circle_div");
  if (colorData.length !== 0) {
    colorContainer.innerHTML = html;
  } else {
    colorContainer.innerHTML = `nothing`;
  }
  button_pre.disabled = false;
  button_pre.style.opacity = 1;

  i++;

  let scroll = document.querySelector(".active");
  scroll.scrollIntoView({
    behavior: "smooth",

    inline: "nearest",
  });
}

let colorData = JSON.parse(localStorage.getItem("colorData")) || [];

function showPre() {
  let colorData = JSON.parse(localStorage.getItem("colorData")) || [];

  // var a = colorData.length - 1;

  // console.log("a", a);

  console.log(i, "pre i");
  console.log(colorData[i - 1].color);

  document.querySelector(".circle").style.backgroundColor =
    colorData[i - 2].color;
  document.querySelector(".circle1").style.backgroundColor =
    colorData[i - 2].color1;
  document.querySelector(".circle2").style.backgroundColor =
    colorData[i - 2].color2;

  let html = "";
  colorData.forEach((element, index) => {
    console.log("", element);
    console.log(index, "prev index");
    console.log(i, "pre i");
    html += `        
    <div class=${
      index === i - 2 ? "active " : ""
    }><div class="circle_para" id="circle_para" onclick="changeColor(${
      element.id
    })">
    <div class="first_div_circle" style="background-color:${
      element.color
    }"></div>
    <div class="first_div_circle1" style="background-color:${
      element.color1
    }"></div>
    <div class="first_div_circle2" style="background-color:${
      element.color2
    }"></div></div>
  </div>
        `;
  });
  let colorContainer = document.querySelector(".circle_div");
  if (colorData.length !== 0) {
    colorContainer.innerHTML = html;
  } else {
    colorContainer.innerHTML = `nothing`;
  }
  i--;
  let scroll = document.querySelector(".circle_div");
  scroll.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });

  if (i <= 1) {
    let button_pre = document.querySelector(".previous_button");
    button_pre.disabled = true;
    button_pre.style.opacity = 0.5;
    console.log("hii");
    return;
  }
  let scrollv = document.querySelector(".active");
  scrollv.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

window.addEventListener("load", () => {
  localStorage.removeItem("colorData");
  if (i < 1) {
    let button_pre = document.querySelector(".previous_button");
    button_pre.disabled = true;
    button_pre.style.opacity = 0.5;
    console.log("hii");
    return;
  }
  button_pre.disabled = false;
  button_pre.style.opacity = 1;
});

function changeColor(id) {
  // console.log(id, "id is change");
  console.log("you click on div");
  let data = JSON.parse(localStorage.getItem("colorData")) || [];
  let match = data.find((ele) => ele.id === id);
  console.log(match);

  document.querySelector(".circle").style.backgroundColor = match.color;
  document.querySelector(".circle1").style.backgroundColor = match.color1;
  document.querySelector(".circle2").style.backgroundColor = match.color2;

  let html = "";
  data.forEach((element, index) => {
    // console.log("", element);
    // console.log(index, "prev index");
    // console.log(i, "pre i");
    html += `        
    <div class=${
      index+1 === match.id ? "active " : ""
    }><div class="circle_para" id="circle_para" onclick="changeColor(${
      element.id
    })">
    <div class="first_div_circle" style="background-color:${
      element.color
    }"></div>
    <div class="first_div_circle1" style="background-color:${
      element.color1
    }"></div>
    <div class="first_div_circle2" style="background-color:${
      element.color2
    }"></div></div>
  </div>
        `;
  });
  let colorContainer = document.querySelector(".circle_div");
  if (colorData.length !== 0) {
    colorContainer.innerHTML = html;
  } else {
    colorContainer.innerHTML = `nothing`;
  }
}

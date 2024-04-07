let colorMode = "hex"; // Initial color mode is set to hex

function setColorMode(mode) {
  colorMode = mode; // Set color mode based on the button clicked
}

function randomNumColorUtilizer(len) {
  return Math.floor(Math.random() * len); //0 to 15 num return
}

function createHexColor() {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  const len = hexArr.length;
  for (let i = 0; i < 6; i++) {
    color += hexArr[randomNumColorUtilizer(len)];
  }
  
  return color;
}

function createRgbColor(){
    const r=randomNumColorUtilizer(256);
    const g=randomNumColorUtilizer(256);
    const b=randomNumColorUtilizer(256);
    return `rgb(${r},${g},${b})`;
}

function createColorFun() {
  let value = document.getElementById("value");
  let mode = document.getElementById("colorMode");
  let wrapper=document.getElementById("wrapper");
  if (colorMode === "hex") {
    let color=createHexColor();
    value.innerText=color;
    mode.innerText=colorMode.toUpperCase();
    wrapper.style.backgroundColor=color;

  } else if (colorMode === "rgb") {
    let color=createRgbColor();
    value.innerText=color;
    mode.innerText=colorMode.toUpperCase();
    wrapper.style.backgroundColor=color;
    
  }
}

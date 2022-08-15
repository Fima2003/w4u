var donateBtn = document.getElementById("donate"), donateBtnJq = $('#donate'), donateHovered = false;
var shareBtn = document.getElementById("share"), shareBtnJq = $('#share'), shareHovered = false;
var snackbar = document.getElementById("snackbar");
donateBtn.addEventListener('click', () => {
  window.open("https://www.comebackalive.in.ua/donate");
});

shareBtn.addEventListener('click', async () => {
  if(navigator.clipboard) {
    await navigator.clipboard.writeText("Imagine all the people");
    snackbar.className = "show";
    setTimeout(function () {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
  }
});

donateBtn.ontransitionend = (event) => {
  if(event.propertyName === "color") {
    if (donateHovered) {
      donateBtn.click();
    }
  }
}

shareBtn.ontransitionend = (event) => {
  if(event.propertyName === "color") {
    if (shareHovered) {
      shareBtn.click();
    }
  }
}

donateBtnJq.hover(
  function(){
    donateHovered = true;
  },
  function (){
    donateHovered = false;
  }
);

shareBtnJq.hover(
  function(){
    shareHovered = true;
  },
  function (){
    shareHovered = false;
  }
);
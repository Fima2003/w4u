function gridItemClick(index){
  location.href = 'city?id=' + index.toString();
}

buttons = document.querySelectorAll('.donate-btn');

buttons.forEach(
    button => {
      button.addEventListener('click', () => {location.href = "/donate";});
    }
);

function titleClick (){
    window.location.replace('/');
}

document.getElementById('footer-title').addEventListener('click', titleClick);
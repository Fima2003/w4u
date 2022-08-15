if(280 <= window.outerWidth && window.outerWidth <= 768){
    console.log("small: " + window.outerWidth);
    document.getElementById("arrow").addEventListener('click', () => {
        location.href = '/donate';
    });
}else {
    console.log("big: " + window.outerWidth);
    document.getElementById("arrow").addEventListener('click', () => {
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

document.getElementById('creator').addEventListener('click', () => {
    window.open('mailto:fima.rubin@gmail.com?subject=Feedback')
})
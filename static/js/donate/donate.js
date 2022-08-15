function parallax(){
    var prlxL1 = document.getElementById('p1');
    var prlxL2 = document.getElementById('p2');
    var prlxR1 = document.getElementById('p3');
    var prlxR2 = document.getElementById('p4');
    var LPos1 = 30 - window.scrollY/100;
    var LPos2 = 70 - window.scrollY/100;
    var RPos1 = 50 - window.scrollY/100;
    var RPos2 = 90 - window.scrollY/100;
    prlxL1.style.top = LPos1 + "%";
    prlxL2.style.top = LPos2 + "%";
    prlxR1.style.top = RPos1 + "%";
    prlxR2.style.top = RPos2 + "%";
}

window.addEventListener("scroll", parallax);

document.getElementById('aid-pic').addEventListener('click', () => {
    window.open('https://www.paypal.com/pools/c/8HIiS00PnC?fbclid=IwAR1Oc3rc-sZE-cF7VY_2xQLZx8ijYAUetp6B8VVF0W4NiXDoWPmvgrg6g5w');
});
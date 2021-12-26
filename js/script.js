//ẩn menu khi lăn
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

var modal = document.getElementById('loginform');

// nhấp ra ngoài dể thoát form
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('signupform');

// nhấp ra ngoài dể thoát form
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//kiểm tra password
function validateForm(){
    var checkpsw = document.forms["signupform"]["rtpsw"].value;
    var psw = document.forms["signupform"]["psw"].value;
    
    if(checkpsw != psw){
        alert("repeat password không khớp với password")
        return false;
    }
}



let navbar = document.querySelector('.navbar')
// responsive menu màn hình nhỏ
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

//nhấp ra ngoài thanh menu, thanh tìm kiếm để tắt thanh menu
document.onclick = function(e){
    if(e.target.id !== 'navbar' && e.target.id !== 'menu-btn')
    {
        navbar.classList.remove('active');
    }

    if(e.target.id !== 'search-box' && e.target.id !== 'search-btn')
    {
        searchForm.classList.remove('active');
    }
}

let searchForm = document.querySelector('.search-form')
//nhấp biểu tượng kính lúp để tìm kiếm
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

const counters = document.querySelectorAll('.counter');
//đếm các portfolio
function update() {
counters.forEach(counter => {
    counter.innerText = '0';
    
    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        
        const increment = target/900;
        
        if (c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
        
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
};

var btnheart1 = document.getElementById('favourite-btn1');
//tô đỏ nút trái tim
function toggle1(){
    if (btnheart1.style.color == "red") {
        btnheart1.style.color = "White"
    }
    else {
        btnheart1.style.color = "red"
    }
}

var btnheart2 = document.getElementById('favourite-btn2');

function toggle2(){
    if (btnheart2.style.color == "red") {
        btnheart2.style.color = "White"
    }
    else {
        btnheart2.style.color = "red"
    }
}

var btnheart3 = document.getElementById('favourite-btn3');

function toggle3(){
    if (btnheart3.style.color == "red") {
        btnheart3.style.color = "White"
    }
    else {
        btnheart3.style.color = "red"
    }
}

var btnheart10 = document.getElementById('favourite-btn10');

function toggle10(){
    if (btnheart10.style.color == "red") {
        btnheart10.style.color = "White"
    }
    else {
        btnheart10.style.color = "red"
    }
}

var btnheart4 = document.getElementById('favourite-btn4');

function toggle4(){
    if (btnheart4.style.color == "red") {
        btnheart4.style.color = "White"
    }
    else {
        btnheart4.style.color = "red"
    }
}

var btnheart5 = document.getElementById('favourite-btn5');

function toggle5(){
    if (btnheart5.style.color == "red") {
        btnheart5.style.color = "White"
    }
    else {
        btnheart5.style.color = "red"
    }
}

var btnheart6 = document.getElementById('favourite-btn6');

function toggle6(){
    if (btnheart6.style.color == "red") {
        btnheart6.style.color = "White"
    }
    else {
        btnheart6.style.color = "red"
    }
}

var btnheart7 = document.getElementById('favourite-btn7');

function toggle7(){
    if (btnheart7.style.color == "red") {
        btnheart7.style.color = "White"
    }
    else {
        btnheart7.style.color = "red"
    }
}

var btnheart8 = document.getElementById('favourite-btn8');

function toggle8(){
    if (btnheart8.style.color == "red") {
        btnheart8.style.color = "White"
    }
    else {
        btnheart8.style.color = "red"
    }
}

var btnheart9 = document.getElementById('favourite-btn9');

function toggle9(){
    if (btnheart9.style.color == "red") {
        btnheart9.style.color = "White"
    }
    else {
        btnheart9.style.color = "red"
    }
}
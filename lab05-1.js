const text1 = document.getElementById("head1");
text1.addEventListener('click', change1);
const text2 = document.getElementById("head2");

function change1(){
    text1.innerHTML = "Please! DON'T click.";
    text1.removeEventListener('click', change1);
    text2.innerHTML = "Please T^T";
    text1.addEventListener('click', change2);
}
function change2(){
    text1.innerHTML = "DON'T CLICK the button, plz!";
    text1.removeEventListener('click', change2);
    text2.innerHTML = "You should understand";
    text1.addEventListener('click', change1);
}

function ButtonFunction1() {
    alert("Boom! I warned you DON'T Click");
    document.getElementById("b1").classList.add("done");
}
function ButtonFunction2() {
    alert("You don't understand?!");
    document.getElementById("b2").classList.add("done");
}
function ButtonFunction3() {
    alert("Huh? I don't understand why you click.");
    document.getElementById("b3").classList.add("done");
}
function ButtonFunction4() {
    alert("HEY! You click me again.");
    document.getElementById("b4").classList.add("done");
}
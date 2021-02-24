function NightMode(){
    const body = document.querySelector('body.daymode');
    body.classList.remove('daymode');
    body.classList.add('nightmode');
    document.getElementById("head1").innerHTML = "GOOD NIGHT";
    document.getElementById("head2").innerHTML = "This is night time!";
    document.getElementById("p1").innerHTML = "Click the button below to activate the day mode.";
    document.getElementById("b1").innerHTML = "Activate the day mode";
    const span = document.querySelector('span.daymode');
    span.classList.remove('daymode');
    span.classList.add('nightmode');
    document.getElementById('b1').classList.remove('daymode');
    document.getElementById('b1').classList.add('nightmode');
    document.getElementById('b1').innerHTML = "Activate the day mode";
    document.getElementById('b1').onclick = DayMode;
}

function DayMode(){
    const body = document.querySelector('body.nightmode');
    body.classList.remove('nightmode');
    body.classList.add('daymode');
    document.getElementById("head1").innerHTML = "GOOD MORNING";
    document.getElementById("head2").innerHTML = "This is day time!";
    document.getElementById("p1").innerHTML = "Click the button below to activate the night mode.";
    document.getElementById("b1").innerHTML = "Activate the day mode";
    const span = document.querySelector('span.nightmode');
    span.classList.remove('nightmode');
    span.classList.add('daymode');
    document.getElementById('b1').classList.remove('nightmode');
    document.getElementById('b1').classList.add('daymode');
    document.getElementById('b1').innerHTML = "Activate the night mode";
    document.getElementById('b1').onclick = NightMode;
}

const enter = document.querySelector('input')
enter.addEventListener('keyup',newElement)

var NodeList = document.getElementsByTagName("LI");
for(i=0; i<NodeList.length; i++){
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    Nodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (i=0; i<close.length; i++) {
    close[i].onclick = function(){   
        var div = this.parentElement;
        div.style.display = "none"
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    if(event.key === "Enter" || event.button === 0){
        var li = document.createElement("li");
        var input = document.getElementById("input").value;
        var text = document.createTextNode(input);
        li.appendChild(text);
        if (input === '') {
        alert("It's empty. You should write something.");
        } else {
        document.getElementById("UL").appendChild(li);
        }
        document.getElementById("input").value = "";
    
        var span = document.createElement("SPAN");
        var text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        li.appendChild(span);
    
        for (i=0; i<close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
    }
}
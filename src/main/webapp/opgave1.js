


//opgave 1
var elements = document.getElementsByTagName("div");
for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "red";
}

function click() {
    var style1 = document.getElementById("id1").style;
    style1.backgroundColor = "green";
    var style2 = document.getElementById("id2").style;
    style2.backgroundColor = "yellow";
    var style3 = document.getElementById("id3").style;
    style3.backgroundColor = "red";

}
var btn = document.getElementById("btn1");
btn.onclick = click; 
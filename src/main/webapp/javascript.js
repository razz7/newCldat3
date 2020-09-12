/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function funcAll(arr) {
    const a = arr.map(mov => "<table>" + "<th>"+ mov.id + "</th>"+ "<tr>" + "<th>" + mov.name + "</th><th>" + mov.director + "</th>" + "<th>" + mov.year + "</th>"+ "</tr></table>").join("");
    document.getElementById("div").innerHTML = a;
}

function clickSubAll() {
    allUsers = fetch("https://zzar.dk/devops-starter-1.0.1/api/movie/all")
            .then(res => res.json())
            .then(data => {
                funcAll(data);
            })
}


var click = document.getElementById("submitAll");
click.onclick = clickSubAll;

function funcId(mov) {
    document.getElementById("div").innerHTML = "<table>" + "<th>"+ mov.id + "</th>"+ "<tr>" + "<th>" + mov.name + "</th><th>" + mov.director + "</th>" + "<th>" + mov.year + "</th>"+ "</tr></table>";
}
function clickSubId() {
    fetch("https://zzar.dk/devops-starter-1.0.1/api/movie/" + document.getElementById("addId").value)
            .then(res => res.json())
            .then(data => {
                data;
                funcId(data);
            })
}
var click = document.getElementById("submitId");
click.onclick = clickSubId;
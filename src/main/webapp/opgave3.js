/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var names = ["Lars", "Thomas", "Jon", "Rasmus", "ditlev"];
func();

function func() {
    const NamesList = "<ul>" + names.map(name => "<li>" + name + "</li>").join('') + "<ul>";
    console.log(NamesList);
    document.getElementById("b").innerHTML = NamesList;
}


function clickSub() {
    var name = document.getElementById("add").value;
    names.push(name);
    func();
}
var click = document.getElementById("remove");
click.onclick = clickSub;


function clickRemF() {
    names.shift();
    func();
}
var click1 = document.getElementById("removeF");
click1.onclick = clickRemF;


function clickReml() {
    names.pop();
    func();
}
var click2 = document.getElementById("removeL");
click2.onclick = clickReml;
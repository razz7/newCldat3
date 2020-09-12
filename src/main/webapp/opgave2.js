/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clickDiv(e) {
    var id = e.target.id;
    //console.log("Hello from " + id);
    document.getElementById("para").innerHTML="Hello from "+ id;
    
}
var clicker = document.getElementById("outer");
clicker.onclick = clickDiv;


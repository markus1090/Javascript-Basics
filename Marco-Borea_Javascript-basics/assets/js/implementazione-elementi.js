let divCont = document.getElementById("display-contatore");
let divAzzera = document.getElementById("button-azzera");
let divButtons = document.getElementById("buttons-inc");

/* Implementazioni contatore e bottoni */
let contatore = document.createElement("p");               
contatore.innerText = "0";             
divCont.appendChild(contatore); 

let buttonAzzera = document.createElement("button");
buttonAzzera.innerHTML = "Azzera";
buttonAzzera.setAttribute("data-action","azzera"); 
divAzzera.appendChild(buttonAzzera);
        
let button = document.createElement("button");
button.innerHTML = "+";
button.setAttribute("data-action","incremento"); 
divButtons.appendChild(button); 

let button2 = document.createElement("button");
button2.innerHTML = "-"; 
button2.setAttribute("data-action","decremento"); 
divButtons.appendChild(button2); 
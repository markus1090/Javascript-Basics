class Pulsanti {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    /* Evento bottone azzera */
    azzera() {
        let cont = document.getElementsByTagName("p")[0].innerHTML;
        cont = Number(cont);
        cont = 0;
        cont = cont.toString();
        document.getElementsByTagName("p")[0].innerHTML = cont; 
    }

    /* Evento bottone incremento */
    incremento() {
        let cont = document.getElementsByTagName("p")[0].innerHTML;
        cont = Number(cont);
        let num = document.getElementById("incremento").value;
        num = Number(num);  
        if (num <= 0) {
            alert("Non posso incrementare per 0 o per valore negativo");
        } else {
            cont += num;
        }
        cont = cont.toString();
        if (cont.length > 9) {
            alert("Il contatore è arrivato al limite!");
        } else {
            document.getElementsByTagName("p")[0].innerHTML = cont; 
        }
    }

    /* Evento bottone decremento */
    decremento() {
        let cont = document.getElementsByTagName("p")[0].innerHTML;
        cont = Number(cont);
        let num = document.getElementById("incremento").value;
        num = Number(num);  
        if (num <= 0) {
            alert("Non posso decrementare per 0 o per valore negativo");
        } else {
            cont -= num;
        }
        cont = cont.toString();
        if (cont.length > 9) {
            alert("Il contatore è arrivato al limite!");
        } else {
            document.getElementsByTagName("p")[0].innerHTML = cont; 
        } 
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
          this[action]();
        }
      };
  }

new Pulsanti(buttons);
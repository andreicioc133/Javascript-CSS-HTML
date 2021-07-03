function calculateTip(){
    var nota = document.getElementById("nota").value;
    var serviceCalitate = document.getElementById("serviceCalitate").value;
    var nrPers = document.getElementById("nrPers").value;
    
    //validare date de intrare
    if (nota ==="" || serviceCalitate == 0)
    {
        alert("Va rugam adaugati valori!");
        return;
    }
    if (nrPers ==="" || nrPers <=1)
    {
        nrPers = 1;
        document.getElementById("fiecare").style.display = "none";
    }
    else{
        document.getElementById("fiecare").style.display= "block";
    }

    //calculeaza bacsis
    var total = (nota * serviceCalitate) / nrPers;
    //rotunjire la 2 zecimale
    total = Math.round(total * 100) / 100;
    //2 digits after decimal point
    total = total.toFixed(2);
    //Display
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
    //Ascunde valoarea bacsisului la incarcare
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("fiecare").style.display = "none";

    //functia apelata la click
    document.getElementById("calculeaza").onclick = function(){
        calculateTip();
    };

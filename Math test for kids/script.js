function calculatePoints(){
    let a1 = document.querySelector("#a1").value;
    let a2 = document.querySelector("#a2").value;
    let a3 = document.querySelector("#a3").value;
    let a4 = document.querySelector("#a4").value;
    let a5 = document.querySelector("#a5").value;
    let a6 = document.querySelector("#a6").value;
    let a7 = document.querySelector("#a7").value;
    let a8 = document.querySelector("#a8").value;
    let points = 0;
    if(a1 === "13"){
        points++;
    }
    if(a2 === "35"){
        points++;
    }
    if(a3 === "3"){
        points++;
    }
    if(a4 === "38"){
        points++;
    }
    if(a5 === "60"){
        points++;
    }
    if(a6 === "294"){
        points++;
    }
    if(a7 === "8"){
        points++;
    }
    if(a8 === "6"){
        points++;
    }
    return points;
}
document.querySelector("#btn").onclick = function(){
    document.querySelector("#result").innerHTML = calculatePoints();
}

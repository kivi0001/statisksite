const tid = new Date().getHours()

if(tid < 5) { 
    console.log("Godnat");
} else if(tid < 10) {
    console.log("Godmorgen");
} else if(tid < 18) {
    console.log("Goddag");
} else {console.log("Godaften");
}

let point = 0;
document.querySelector("#hej").addEventListener('click', count);
function count(){
    console.log("point");
    point ++;
    console.log(`h1 er nu ${point}`);
    document.querySelector("#h1").textContent = point;
}
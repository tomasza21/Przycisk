const wynik = document.getElementById('wynik');

wynik.innerHTML = "Test";
function zmiana(){
let element = document.getElementById('button')
if(element.className=="on"){
    element.className="off"
    element.value="off"
    //element.style.color="YY"
}else {
    element.className="on"
    element.value="on"
    //element.style.color
}
}

function zmiana1(){
    let element = document.getElementsByClassName('test1')
    if(element.value=="on"){
        element.className="test2"
        element.value="off"
    }else{
        element.className="test1"
        element.value="on"
    }
}

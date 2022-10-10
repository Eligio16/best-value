let cantidadUno = document.getElementById('cantidad1');
let costoUno = document.getElementById('costo1');
let lblUno = document.getElementById("label1");
let cantidadDos = document.getElementById('cantidad2');
let costoDos = document.getElementById('costo2');
let lblDos = document.getElementById("label2");
let bttn = document.getElementById('bttn');
let clean = document.getElementById('clean');


bttn.addEventListener('click', ()=>{
    let resultadoUno = costoUno.value/cantidadUno.value;
    let resultadoDos = costoDos.value/cantidadDos.value;
    if(resultadoUno){
        lblUno.innerHTML = `Costo por unidad: ${resultadoUno.toFixed(2)}$`
    } else lblUno.innerHTML = "";
    if(resultadoDos){
        lblDos.innerHTML = `Costo por unidad: ${resultadoDos.toFixed(2)}$`
    } else lblDos.innerHTML = "";
});

clean.addEventListener('click', ()=>{
    cantidadUno.value='';
    cantidadDos.value='';
    costoUno.value='';
    costoDos.value='';
    lblUno.innerHTML='';
    lblDos.innerHTML='';
});

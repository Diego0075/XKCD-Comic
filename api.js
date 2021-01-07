var botonbusc=document.getElementById("search");
var img = document.getElementById("img");
var botoncont = document.getElementsByClassName("cont");
var cont = 0;

document.getElementById("cont").onclick=function(){
  cont++;
  console.log(cont)
  document.getElementById("info").innerHTML="¡Haz click en la imagen para ver los detalles!";
  loadDoc("https://xkcd.now.sh/?comic="+cont,imgAleatoria);
}

botonbusc.addEventListener("click",function() {
  document.getElementById("info").innerHTML="¡Haz click en la imagen para ver los detalles!";
  var num = document.getElementById("numero").value;
    // loadDoc("https://xkcd.com/info.0.json",imgAleatoria);
    loadDoc("https://xkcd.now.sh/?comic="+num,imgAleatoria);
});


img.addEventListener("click",function() {
  document.getElementById("info").innerHTML="El año de la creación de esta imagen ha sido en "+ojson.year +" y en el mes: "+ojson.month
  // alert(ojson.year+" mes:"+ojson.month)
});




// boton.onclick=function () {
//   alert("hola");
// }

function loadDoc(url,f) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     f(this)
    }
  };
  xhttp.open("GET",url, true);
  xhttp.send();
}

function imgAleatoria(xhttp){
  //document.getElementById("prueba").innerHTML = xhttp.responseText;
  ojson=JSON.parse(xhttp.responseText)
  //alert(ojson.message);
  var i = document.getElementById("img");
  i.setAttribute("src",ojson.img)
  document.getElementById("tituloinput").innerHTML=ojson.safe_title
}

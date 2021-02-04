function nuevoElemento() {
  var li = document.createElement("li");
  li.setAttribute("class","list-group-item"); /*para quitar el puntito*/
  var input = document.createElement("input");
  input.type="checkbox";
  var inputValue = document.getElementById("tarea").value;
  var texto = document.createTextNode(inputValue);
  li.appendChild(input);
  li.appendChild(texto);
  if (inputValue === '') {
    alert("Te falta agregar una tarea");
  } else {
    document.getElementById("lista").appendChild(li);
  }
  document.getElementById("tarea").value = "";

//botesito de basura
  var span = document.createElement("SPAN");
  span.className = "glyphicon glyphicon-trash";
  li.appendChild(span);
  var signo = document.createElement("SPAN");
  signo.className = "glyphicon glyphicon-info-sign";
  li.appendChild(signo);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  signo.onclick = function() {       /*para eliminar la tarea*/
    var div = this.parentElement;
    div.style.display = "none";
  }
  input.addEventListener("click", rayarTareas);  //para rayar el texto
}

function rayarTareas (){
  var raya = this.parentElement;
  if (this.checked) {                   //Para que raye el texto
     raya.style.textDecoration= "line-through";
  }
 else{                                  //para que al des-seleccionar el texto ya no este tachado
    raya.style.textDecoration= "none";
 }

}



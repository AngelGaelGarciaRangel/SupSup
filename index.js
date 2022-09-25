
document.querySelector(".addSupplyButton").addEventListener("click", addSupplyButton)
document.querySelector(".addTemplateButton").addEventListener("click", addTemplateButton)
var listaTemplates = document.querySelectorAll(".template p");
var listaSupplys = document.querySelectorAll(".shipments p")
function addSupplyButton(){
  var e = document.getElementById("supply-names");
  var nombre = e.options[e.selectedIndex].text;
  var indiceStop = -1;
  for(var i = 0; i < listaSupplys.length; i++){
    if(listaSupplys[i].innerHTML == ""){
      indiceStop = i;
      break;
    }
  }
  if(indiceStop != -1){
    var listaNueva = [nombre];
    for(var i = 0; i <= indiceStop; i++){
      listaNueva.push(listaSupplys[i].innerHTML)
     }
    for(var i = 0; i < listaNueva.length; i++){
      listaSupplys[i].innerHTML = listaNueva[i]
    }
  }
  else{
    var listaNueva = [nombre];
    for(var i = 0; i < listaSupplys.length - 1; i++){
      listaNueva.push(listaSupplys[i].innerHTML);
    }
    for(var i = 0; i < listaNueva.length; i++){
      listaSupplys[i].innerHTML = listaNueva[i];
    }
  }
}
function addTemplateButton(){
  var nombre = document.querySelector("input").value
  var indiceStop = -1;
  for(var i = 0; i < listaTemplates.length; i++){
    if(listaTemplates[i].innerHTML == ""){
      indiceStop = i;
      break;
    }
  }
  if(indiceStop != -1){
    var listaNueva = [nombre];
    for(var i = 0; i <= indiceStop; i++){
      listaNueva.push(listaTemplates[i].innerHTML)
     }
    for(var i = 0; i < listaNueva.length; i++){
      listaTemplates[i].innerHTML = listaNueva[i]
    }
  }
  else{
    var listaNueva = [nombre];
    for(var i = 0; i < listaTemplates.length - 1; i++){
      listaNueva.push(listaTemplates[i].innerHTML);
    }
    for(var i = 0; i < listaNueva.length; i++){
      listaTemplates[i].innerHTML = listaNueva[i];
    }
  }
    var optionElement = document.createElement("option");
    var text = document.createTextNode(nombre);
    optionElement.appendChild(text);
    var element = document.getElementById("supply-names");
    element.appendChild(optionElement);
}

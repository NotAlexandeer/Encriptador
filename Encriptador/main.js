// Creacion de variables de selector para la entrada de texto
const textIn = document.querySelector("#InputText");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesEncriptar = document.querySelector("#btn-desencriptar");
textIn.focus();

const diccionario = {
  a: "aj",
  e: "efas",
  i: "igh",
  o: "opopr",
  u: "ugrt",
};

function encriptar() {
  var image = document.getElementById("Error");
  let textEncrip = "";
  let text = textIn.value;
  if (textIn.value !== "") {
      for (let i = 0; i <= text.length - 1; i++) {
      const letter = text[i];
      if (letter in diccionario) {
        textEncrip += diccionario[letter];
      } else {
        textEncrip += letter;
      }
    }
    return mostrarMensaje(textEncrip);
  } 
  else {
    return mostrarMensaje("Error: campo vacio, llene el campo para Encriptarlo");
    return defaultImage;
  }
}

function desencriptar() {
  let mensajeInDesencrip = "";
  let text = textIn.value;
  if (text !== "") {
    mensajeInDesencrip += text
      .replaceAll("aj", "a")
      .replaceAll("efas", "e")
      .replaceAll("igh", "i")
      .replaceAll("opopr", "o")
      .replaceAll("ugrt", "u");
      return mostrarMensaje(mensajeInDesencrip);
  }
  else{
    return mostrarMensaje("Error: campo vacio, llene el campo para Desencriptarlo");
  }
}

function mostrarMensaje(texOut) {
  let out = document.getElementById('salida');
  out.innerHTML ='<p id="out">'+ texOut+'</p>';
}

btnEncriptar.onclick = encriptar;
btnDesEncriptar.onclick = desencriptar;
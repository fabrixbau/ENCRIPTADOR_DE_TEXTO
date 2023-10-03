function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value = "";
  }
  
var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.onclick = function() {
  encriptar();
};
  var botonEncriptar = document.querySelector("#btn-encriptar");
  botonEncriptar.onclick = encriptar;
  
  function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value = "";
  }
  
  var botonDesencriptar = document.querySelector("#btn-desencriptar");
  botonDesencriptar.onclick = desencriptar;
  
  function copiarTexto() {
    var texto = document.getElementById('texto-a-copiar');
    texto.select();
    texto.setSelectionRange(0, 99999); /* Para dispositivos móviles */
    document.execCommand('copy');
    alert('Texto copiado: ' + texto.value);
    texto.value = "";
  }
  
// Evento que se dispara al hacer clic en el botón "Encriptar"
document.getElementById('encriptarBtn').addEventListener('click', function() {
    // Obtiene el valor del texto ingresado por el usuario
    var textoEntrada = document.getElementById('textoEntrada').value;
    // Llama a la función de encriptar y muestra el resultado
    var resultado = encriptar(textoEntrada);
    document.getElementById('textoSalida').value = resultado;
});

// Evento que se dispara al hacer clic en el botón "Desencriptar"
document.getElementById('desencriptarBtn').addEventListener('click', function() {
    // Obtiene el valor del texto ingresado por el usuario
    var textoEntrada = document.getElementById('textoEntrada').value;
    // Llama a la función de desencriptar y muestra el resultado
    var resultado = desencriptar(textoEntrada);
    document.getElementById('textoSalida').value = resultado;
});

// Evento que se dispara al hacer clic en el botón "Copiar al portapapeles"
document.getElementById('copiarBtn').addEventListener('click', function() {
    // Selecciona el texto en el campo de salida
    var textoSalida = document.getElementById('textoSalida');
    textoSalida.select();
    // Copia el texto seleccionado al portapapeles
    document.execCommand('copy');
    // Muestra una alerta indicando que el texto ha sido copiado
    alert('Texto copiado al portapapeles');
});

// Función para encriptar el texto según las reglas especificadas
function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto según las reglas especificadas
function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}
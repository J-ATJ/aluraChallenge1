var textInput = document.querySelector("#idTextArea");
var encBtn = document.querySelector("#encriptarBtn");
var desBtn = document.querySelector("#desencriptarBtn");
var copyBtn = document.querySelector("#copyBtn");
var resultado = document.querySelector("#resultText");
var salida = document.querySelector("#outputRect");
var active = true;

encBtn.addEventListener("click",function(event){
    event.preventDefault();
    if(textInput.value.length > 0){
        var msg2E = textInput.value;
        var txt = msg2E.length;
        var finalMsg = "";
        for(var i = 0; i < txt; i++ ){
            var letra = msg2E[i];
            if(msg2E[i] == "e"){
                finalMsg += "enter";
            }
            else if(msg2E[i] == "i"){
                finalMsg += "imes";
            }
            else if(msg2E[i] == "a"){
                finalMsg += "ai";
            }
            else if(msg2E[i] == "o"){
                finalMsg += "ober";
            }
            else if(msg2E[i] == "u"){
                finalMsg += "ufat";
            }
            else{
                finalMsg += letra;
            };
        };
        mostrarMensaje(finalMsg);
    }else{
        location.reload();
    };
});

desBtn.addEventListener("click",function(event){
    event.preventDefault();
    if(textInput.value.length > 0){
        var final2 = textInput.value;
        final2 = final2.replaceAll("ai", "a");
        final2 = final2.replaceAll("ober", "o");
        final2 = final2.replaceAll("imes", "i");
        final2 = final2.replaceAll("enter", "e");
        final2 = final2.replaceAll("ufat", "u");
        mostrarMensaje(final2);
    }else{
        location.reload();
    };
});

function mostrarMensaje(mensaje){
    if(active){
        var noText = document.querySelector("#noText");
        noText.remove();
    };
    active = false;
    resultado.textContent = mensaje;
    copyBtn.classList.remove("invisible");
    copyBtn.innerHTML = "Copiar";

};

copyBtn.addEventListener("click", function(event){
    event.preventDefault();
    var copyTxt = document.querySelector("#resultText").textContent;
    navigator.clipboard.writeText(copyTxt);
    copyBtn.innerHTML = "Copiado!";
});
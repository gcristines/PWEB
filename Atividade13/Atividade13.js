function abrejanela(obj){
    obj.src = "janelaaberta.png";

    var titulo = document.getElementById("fechada");
    titulo.innerHTML="Janela aberta";
    
}

function quebrajanela(obj){
    obj.src = "janelaquebra.png";
    var titulo = document.getElementById("fechada");
    titulo.innerHTML="Janela quebrada";
  
    
}

function fechajanela(obj){
    obj.src = "janelafechada.png";
    var titulo = document.getElementById("fechada");
    titulo.innerHTML="Janela fechada";
    
}

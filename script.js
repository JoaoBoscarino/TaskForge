 const input = document.querySelector("input");
 const button = document.querySelector("button");
 const lista = document.querySelector(".task-list");
 const contador = document.querySelector(".contador")

 function addTask(){
    const textTask = input.value.trim();

    if(textTask == ""){
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = textTask;

    span.addEventListener("click", function(){
        span.classList.toggle("completed");
        atualizarContador();
    })

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Excluir";  
    btnDelete.classList.add("btn-delete");  

    btnDelete.addEventListener("click", function(){
        li.remove();
        atualizarContador();
    })

    lista.appendChild(li);
    li.appendChild(span);
    li.appendChild(btnDelete);
    atualizarContador();
    input.value = "";
    input.focus();   
 }

 button.addEventListener("click", addTask);

function atualizarContador(){
    const total = lista.children.length;

    const concluidas = document.querySelectorAll(".completed").length;

    const pendentes = total - concluidas;

    contador.textContent = `Total: ${total} |  Concluidas: ${concluidas} | Pendentes: ${pendentes}`;
}



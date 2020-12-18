var buttonAdd = document.querySelector("#add-todo");
       
buttonAdd.addEventListener("click", function(event) {
    //pegando o elemento da ul
    var lista = document.querySelector("#todo-list")
    
    //pegando valor digitado no input
    let todo = document.querySelector("#new-todo");
    //console.log(todo);
    //console.log(todo.Value);

    //criando li com nova todo
    var newLi = document.createElement("li")
    //console.log(newLi);

    /**adicionando o valor 
     * digitado no input 
     * dentro da newLi
     */
    newLi.textContent= todo.value;
    //console.log(newLi);
    /**
     * adicionando newLi dentro da ul
     */
    lista.appendChild(newLi);
})


        
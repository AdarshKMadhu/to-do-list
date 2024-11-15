const textBox = document.getElementById('textBox');
const items = document.getElementById('items');

textBox.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        toAdd();
    }
});


function toAdd(){
    
    if(textBox.value.trim() != ""){
        const listItem = document.createElement('li');
        listItem.className = "list-item";

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.ariaLabel = "Mark task as complete" ;

        const taskText = document.createElement('span');
        taskText.textContent = textBox.value;
        taskText.className = "task-text";

        checkBox.addEventListener('change', () =>{
            taskText.classList.toggle('completed');
        });



        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', function(){
            listItem.remove();
        });

        listItem.appendChild(checkBox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        
        items.appendChild(listItem);

        textBox.value = "";
    }
    else{
        alert("Please enter a task.");
    }
}
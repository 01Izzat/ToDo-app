const zForm = document.querySelector('.form')
  zInput = document.querySelector('.input')
  zList = document.querySelector('.list');
  clearAll = document.querySelector('.clear')

  let todos = [];  //xamma narsani yeg'volishga
  let count= 1;    //unique id uchun
  
  const addTodo = (e) => {
    e.preventDefault()
    let inputvalue = zInput.value
  
    let newTodo = {
      id: count++,
      title: inputvalue,
      isChecked: false,
    }
    
    todos.push(newTodo)
    zInput.value = null

    renderTodos(todos) 
  }

    zForm.addEventListener('submit', addTodo)

    const renderTodos = () => {
      zList.innerHTML = null
      
      todos.forEach((item, index) => {
      let newLi = `
      <li class="d-flex justify-content-between align-items-center gap-3 ">
        <span>${item.id}</span>
        <h3 class=${item.isChecked ? 'yes' : 'no' }>${item.title}</h3>
        <input type='checkbox' id=${item.id} class='checkbox' ${item.isChecked ? 'checked' : ''} >  
        <button id=${item.id} class='delete btn btn-danger'>Delete</button>
      </li>`
      
      zList.insertAdjacentHTML('beforeend', newLi)
      });
    }


  

  zList.addEventListener('click', evt => {
    if(evt.target.matches('.checkbox')) {
      let foundObj = todos.find(item => item.id == evt.target.id)
      
      foundObj.isChecked = !foundObj.isChecked
    
      renderTodos(todos)
      }else if(evt.target.matches('.delete')){
        let foundIndex = todos.findIndex(item => item.id == evt.target.id)

        todos.splice(foundIndex, 1)
        renderTodos(todos)
      }
      
      
    })
    
    clearAll.addEventListener('click', () => {
      todos = null
      renderTodos(todos)
    })
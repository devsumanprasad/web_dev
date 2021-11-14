let ulTasks = $('#ulTasks')
let addTodoBtn = $('#addTodoBtn')
let resetBtn = $('#resetBtn')
let sortBtn = $('#sortBtn')
let cleanupBtn = $('#cleanupBtn')
let inputTodo = $('#inputTodo')

function cleanupDone(){
    $('#ulTasks .done').remove();
    toggleInputBtn()
}
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}
function addItem(){
    let listItem = $('<li>', {
        'class' : 'list-group-item',
        'text' : inputTodo.val()
    })
    listItem.click((e)=>{
        $(e.target).toggleClass('done')
    })
    ulTasks.append(listItem)
    //console.log(inputTodo.val())
    inputTodo.val('')
    toggleInputBtn()
}
inputTodo.keypress((e)=>{
    if(e.which==13){
        addItem()
    }
})
inputTodo.on('input',toggleInputBtn)
function toggleInputBtn(){
    
        resetBtn.prop('disabled',inputTodo.val()=='')
        addTodoBtn.prop('disabled',inputTodo.val()=='')
        sortBtn.prop('disabled',ulTasks.children().length<1)
        cleanupBtn.prop('disabled',ulTasks.children().length<1)
    
}

addTodoBtn.click(addItem)

cleanupBtn.click(() => {
    inputTodo.val('')
    cleanupDone()
})
resetBtn.click(()=>{
    inputTodo.val('')
    toggleInputBtn()
})
sortBtn.click(sortTasks)



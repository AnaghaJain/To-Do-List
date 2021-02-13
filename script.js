let ulTasks = $('#ulTasks')
let btnAdd = $(`#btnAdd`)
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let btnSort = $(`#btnSort`)
let inpNewTask = $('#inpNewTask')

function addItem(){
    let listItem = $('<li>', {
        'class': 'list-group-item', 
        text: inpNewTask.val()
    })
    listItem.click((event) =>{
        $(event.target).toggleClass('done')
    })

    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
}

function clearDone(){
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

function sort(){
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons(){
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnCleanup.prop('disabled', ulTasks.children().length == 0)
    btnSort.prop('disabled', ulTasks.children().length == 0)
}


inpNewTask.keypress((e) => {
    if (e.which == 13) addItem()
})

inpNewTask.on('input', toggleInputButtons)

btnAdd.click(addItem)

btnReset.click(() => {
    inpNewTask.val("")
    toggleInputButtons()
})

btnCleanup.click(clearDone)
btnSort.click(sort)
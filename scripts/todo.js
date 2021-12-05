const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const inputItem = document.getElementById('input-item')

function inputList(listItem) {
    const div = document.createElement('div')
    const trashIcon = document.createElement('i')
    
    trashIcon.classList.add("fas", "fa-trash-alt")
   div.classList.add('checklist-item')
    div.innerHTML = `
        <input type='checkbox'></input>
        <label class='strikethrough'>${listItem}</lable>
        `
    
    checklist.appendChild(div)
    div.appendChild(trashIcon)
    
     trashIcon.addEventListener('click', () => {
         div.remove()
     })
}

items.forEach(inputList)

const addItem = (event) => {
    const inputValue = event.target.value;
    items.push(inputItem.value)
    inputList(inputItem.value)
    inputItem.value = " "
}

inputItem.addEventListener('change', addItem)


//https://scrimba.com/scrim/co96d43f7a85a9e6b7ea5d6ce
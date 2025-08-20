const form = document.querySelector("form")
const inputText = document.getElementById('inputText')
const listaAtiva = document.getElementById('lista-ativa')

form.addEventListener("submit", (event) => {
    const divCheckbox = document.createElement("div")
    const inputCheckbox = document.createElement("input")
    const label = document.createElement("label")
    const imgDelete = document.createElement("img")
    
    event.preventDefault()
    
    imgDelete.setAttribute("src", "assets/delete.svg")
    imgDelete.classList.add("deleteIcon")
    divCheckbox.classList.add("checkbox-wrapper")
    inputCheckbox.setAttribute("type", 'checkbox')
    inputCheckbox.setAttribute("id", inputText.value)
    label.textContent = inputText.value
    label.classList.add("flex-1")
    
    divCheckbox.append(inputCheckbox, label, imgDelete)
    listaAtiva.appendChild(divCheckbox)
})

const deleteIcon = document.querySelectorAll(".deleteIcon")

listaAtiva.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteIcon")) {
        event.target.parentElement.remove()
    }
})
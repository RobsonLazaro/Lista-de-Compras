const form = document.querySelector("form")
const inputText = document.getElementById('inputText')
const listaAtiva = document.getElementById('lista-ativa')

const divCheckbox = document.createElement("div")
const inputCheckbox = document.createElement("input")
const label = document.createElement("label")
const imgDelete = document.createElement("img")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    imgDelete.setAttribute("src", "assets/delete.svg")
    divCheckbox.classList.add("checkbox-wrapper")
    inputCheckbox.setAttribute("type", 'checkbox')
    inputCheckbox.setAttribute("id", inputText.value)
    label.textContent = inputText.value
    label.classList.add("flex-1")
    
    divCheckbox.appendChild(inputCheckbox)
    divCheckbox.append(label)
    divCheckbox.append(imgDelete)
    listaAtiva.appendChild(divCheckbox)

})

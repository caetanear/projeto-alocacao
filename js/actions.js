/*const itemsArray = localStorage.getItem('adicionar') ? JSON.parse(localStorage.getItem('adicionar')) : [];

document.querySelector("#adicionar").addEventListener("click", () => {
  const item = document.querySelector("#adicionar")
  createItem(adicionar)
})


function displayItems(){
  let adicionar = ""
  for(let i = 0; i < itemsArray.length; i++){
    adicionar += `<td class="info-acoes">
                  <textarea disabled>${itemsArray[i]}</textarea>                            ${itemsArray[i]}
							<div class="acoes_excluir">
								<button class="button_excluir"><img class="vector_delete" src="./img/Vector_lixinho.png"></button>
							</div>
							<div class="acoes_editar">
								<button class="button_editar"><img class="vector_delete" src="./img/Vector_editar.png"></button>
							</div>
						</td>`
  }
  document.querySelector(".info-acoes").innerHTML = items
  activateDeleteListeners()
  activateEditListeners()
  activateSaveListeners()
  activateCancelListeners()
}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".button_excluir")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { deleteItem(i) })
  })
}

function activateEditListeners(){
  const editBtn = document.querySelectorAll(".button_editar")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  editBtn.forEach((eB, i) => {
    eB.addEventListener("click", () => { 
      updateController[i].style.display = "block"
      inputs[i].disabled = false })
  })
}

function activateSaveListeners(){
  const saveBtn = document.querySelectorAll(".saveBtn")
  const inputs = document.querySelectorAll(".input-controller textarea")
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i)
    })
  })
}

function activateCancelListeners(){
  const cancelBtn = document.querySelectorAll(".cancelBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener("click", () => {
      updateController[i].style.display = "none"
      inputs[i].disabled = true
      inputs[i].style.border = "none"
    })
  })
}

function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('adicionar', JSON.stringify(itemsArray))
  location.reload()
}

function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function updateItem(text, i){
  itemsArray[i] = text
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

window.onload = function() {
  displayItems()
};
*/


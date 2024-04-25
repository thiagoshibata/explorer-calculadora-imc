import { Modal } from "./modal.js"
import { alertError } from "./alertError.js"
import { calculateIMC, isANumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = isANumber(weight) || isANumber(height)
  if (weightOrHeightIsNotANumber) {
    alertError.open()
    return
  }

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const modalBtnClose = document.querySelector(".modal button.close")

export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}

window.addEventListener("keydown", handleKeyDown)
function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
  //modalWrapper.classList.remove("open")
}

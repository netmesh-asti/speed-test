// Get the modal
const modals = document.querySelectorAll(".modal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var modalCloseSpans = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
modals.forEach(modal => {
  const modalCloseSpans = modal.querySelectorAll('.close');
  modalCloseSpans.forEach(closeSpan => {
    closeSpan.onclick = function() {
      modal.style.display = "none";
    }
  })
});

document.getElementById('try-again-button').onclick = function () {
  window.location.reload();
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (Array.from(modals).includes(event.target)) {
//     event.target.style.display = "none";
//   }
// }
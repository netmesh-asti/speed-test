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
  document.location.href = '?r';
}

document.getElementById('change-test-server-button').onclick = function () {
  document.getElementById('test-servers-modal').style.display = "block";
}

document.getElementById('cancel-test-server-button').onclick = function () {
  document.getElementById('test-servers-modal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (Array.from(modals).includes(event.target)) {
//     event.target.style.display = "none";
//   }
// }

// document.querySelectorAll('select').forEach(function(select) {
//   var $this = select, numberOfOptions = select.children.length;

//   $this.classList.add('select-hidden'); 

//   const wrappingElement = document.createElement('div');
//   wrappingElement.classList.add('select');
//   $this.replaceWith(wrappingElement);
//   wrappingElement.appendChild($this);

//   const styledSelectElement = document.createElement('div');
//   styledSelectElement.classList.add('select-styled');
//   $this.after(styledSelectElement);

//   var $styledSelect = styledSelectElement.nextElementSibling;
//   $styledSelect.textContent = $this.children.item(0).textContent;

//   // var $list = $('<ul />', {
//   //     'class': 'select-options'
//   // }).insertAfter($styledSelect);
//   const $list = document.createElement('ul');
//   $list.classList.add('select-options');
//    $('<ul />', {
//       'class': 'select-options'
//   }).insertAfter($styledSelect);


//   for (var i = 0; i < numberOfOptions; i++) {
//       $('<li />', {
//           text: $this.children('option').eq(i).text(),
//           rel: $this.children('option').eq(i).val()
//       }).appendTo($list);
//       //if ($this.children('option').eq(i).is(':selected')){
//       //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
//       //}
//   }

//   var $listItems = $list.children('li');

//   $styledSelect.click(function(e) {
//       e.stopPropagation();
//       $('div.select-styled.active').not(this).each(function(){
//           $(this).removeClass('active').next('ul.select-options').hide();
//       });
//       $(this).toggleClass('active').next('ul.select-options').toggle();
//   });

//   $listItems.click(function(e) {
//       e.stopPropagation();
//       $styledSelect.text($(this).text()).removeClass('active');
//       $this.val($(this).attr('rel'));
//       $list.hide();
//       //console.log($this.val());
//   });

//   $(document).click(function() {
//       $styledSelect.removeClass('active');
//       $list.hide();
//   });

// });
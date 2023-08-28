  // Переключать меню 
  function  switch_menu (selectSingle){
    if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    } else {
    selectSingle.setAttribute('data-state', 'active');
  }
}
function clouse_menu (selectSingle ,selectSingle_labels, selectSingle_title){
  // Закрыть при нажатии на опцию
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }
}
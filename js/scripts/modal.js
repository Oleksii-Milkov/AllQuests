$('#modal').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let price = button.data('price');
    let time = button.data('time');
    let date = button.data('date');
    let modal = $(this);
    modal.find('.modalDate').text("День: " + date + ".2020");
    modal.find('.modalTime').text("Время: " + time);
    modal.find('.modalPrice').text("Стоимость: " + price + ' грн.');
  })
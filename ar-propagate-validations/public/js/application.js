$(document).ready(function () {

  $('.event').on('click', function(event) {
    event.preventDefault();
    var eventId = $(this).attr('id')

    var request = $.ajax({
      type: 'get',
      url: '/events/' + eventId + '/show'
    });

    function showEventOnDom(eventHtml) {
      $('.description').html(eventHtml).toggleClass('display');
    }

    request.done(showEventOnDom);
  });

});

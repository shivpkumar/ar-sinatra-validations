$(document).ready(function () {

  $('.container').delegate('.event', 'click', function(event) {
    event.preventDefault();
    var eventId = $(this).attr('id')

    var request = $.ajax({
      type: 'get',
      url: '/events/' + eventId + '/show'
    });

    function showEventOnDom(eventHtml) {
      $('#event' + eventId).html(eventHtml).toggleClass('display');
    }

    request.done(showEventOnDom);
  });

  $('form').on('submit', function(event) {
    event.preventDefault();
    var newEventData = $(this).serialize()

    var request = $.ajax({
      type: 'post',
      url: '/events/create',
      data: newEventData
    });

    function addEventToDom(eventHtml) {
      $('.container').append(eventHtml);
    }

    request.done(addEventToDom);
  });

});

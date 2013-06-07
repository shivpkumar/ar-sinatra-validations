$(document).ready(function () {

  // $(function(){
  //   $('#datepicker').datepicker({ dateFormat: 'yy-mm-dd' }).toString();
  // })

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

    function addEventToDom(response) {
      if(response.substring(0,2) == "<a")
      {
        $('.errors').html('');
        $('.container').append(response);
      }
      else 
      {
        $('.errors').html(response);
      }
    };

    request.done(addEventToDom);
  });

});

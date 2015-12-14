$(document).ready(function() {
  $('#landing').particleground({
    dotColor: '#2a2a2a',
    lineColor: '#2a2a2a',
    density: '7000'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});


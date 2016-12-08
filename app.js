$(document).ready(function(){
  var box = $('.box');
  var color = 'white';
  var colors = 'white green red blue yellow';

  box.on('click', function(){
    $(this).addClass(color);
  });

  box.on('dblclick', function(){
    $(this).removeClass(colors);
  });

  $('#reset').on('click', function(){
    box.removeClass(colors)
  });
  $('#blue').on('click', function(){
    color = 'blue';
  });
  $('#red').on('click', function(){
    color = 'red';
  });
  $('#green').on('click', function(){
    color = 'green';
  });
  $('#yellow').on('click', function(){
    color = 'yellow';
  });
  $('#white').on('click', function(){
    color = 'white';
  });
});

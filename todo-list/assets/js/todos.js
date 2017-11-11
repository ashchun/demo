// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

// Click on X to delete todo
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(350, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// Add new todo
$('input[type=text]').keypress(function(event){
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val('');
    $('ul').append('<li><span><i class="fa fa-trash"></span></i> ' + todoText + '</li>');
  }
});

// Toggle form
$('.fa-plus').click(function(){
  $('input[type=text]').fadeToggle();
});
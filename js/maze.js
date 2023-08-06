$(document).on('ready', () => {

   var started = false;

    $('#start').click(() => {
      $('#status').text('Game Started!!');
      started = true;
    });


  
    $('#maze .boundary').mouseover(() => {
      if (started) {
        $('#status').text('Game Lost!!');
        $('.boundary').addClass('youlose')
      }
        
        
      
      started = false;
    });


  
    $('#maze').mouseleave(() => {
      if (started) 
        $('#status').text('You Lose!!');
      
      started = false;
    });


  
    $('#end').mouseover(() => {
      if (started) 
        $('#status').text('You Won!! Click "S" again to begin the games');
      
      started = false;
    });


  });
  

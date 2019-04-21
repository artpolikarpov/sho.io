$(function () {
   $(document).on('click', '.jouele-info', function (event) {
       var $jouele = $(event.currentTarget).parent().data('jouele');

       if ($jouele.isPlaying()) {
           $jouele.pause();
       } else {
           $jouele.play();
       }
   });
});
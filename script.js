$(function () {
   $(document).on('click', '.jouele', function (event) {
       var $jouele = $(event.currentTarget).data('jouele');

       if ($jouele.isPlaying()) {
           $jouele.pause();
       } else {
           $jouele.play();
       }
   });
});

// responsive nav bar
(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);



  // image slider

$('.slider').each(function() {
    let $this = $(this);
    let $group = $this.find('.slide_group');
    let $slides = $this.find('.slide');
    let bulletArray = [];
    let currentIndex = 0;
    let timeout;
    
    function move(newIndex) {
      let animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      let $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });


  //form 
  $(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#container-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#container-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#container-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});
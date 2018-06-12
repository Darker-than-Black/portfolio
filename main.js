$(function() {
  $('input').click( function() {
    if($('body').hasClass('yellow')) {
      $('body').removeClass('yellow');

    } else {

      $('body').addClass('yellow');
    }
  });

  function removeMenu() {
    $('.menu').removeClass('top bottom left right');
    $('.menu').removeClass('leftToRight rightToLeft');
    $('.menu').removeClass('downToUp upToDown');
  };
  function removeMenuCenter() {
    $('.menu').removeClass('rightToCenter leftToCenter');
    $('.menu').removeClass('upToCenter downToCenter');
  };
  function removeContent() {
    $('.about').removeClass('active');
    $('.contact').removeClass('active');
    $('.skills').removeClass('active');
    $('.work').removeClass('active');
  };

  var col = 0;
  $('.btAbout').click( function() {
    $('.theme_color').css('display', 'none');
    $('.crutch_clock').css('display', 'none');
    removeMenuCenter();
    removeMenu();
    if(col == 0) {
      setTimeout(writeTextNormal, 1300);
      col++;
    } else {
      setTimeout(writeTextFast, 1300);
    }
    if($('.contact').hasClass('active')) {
      removeContent();
      if ($('.about').hasClass('active')){
        $('.menu').removeClass('upToDown');
        $('.about').removeClass('active'); 
      }else{
        $('.about').addClass('active');
        $('.menu').addClass('upToDown');
      }
    } else {
      removeContent();
      if ($('.about').hasClass('active')){
        $('.menu').removeClass('top');
        $('.about').removeClass('active'); 
      }else{
        $('.about').addClass('active');
        $('.menu').addClass('top');
      }
    }
  });

  $('.btContact').click( function() {
    $('.theme_color').css('display', 'none');
    $('.crutch_clock').css('display', 'none');
    removeMenuCenter();
    removeMenu();
    if($('.about').hasClass('active')) {
      $('#aboutMe').hide();
      removeContent();
      if ($('.contact').hasClass('active')){
        $('.menu').removeClass('downToUp');
        $('.contact').removeClass('active'); 
      }else{
        $('.contact').addClass('active');
        $('.menu').addClass('downToUp');
      }
    } else {
      removeContent();
      if ($('.contact').hasClass('active')){
        $('.menu').removeClass('bottom');
        $('.contact').removeClass('active'); 
      }else{
        $('.contact').addClass('active');
        $('.menu').addClass('bottom');
    }
    }
  });

  $('.btSkills').click( function() {
    $('.theme_color').css('display', 'none');
    $('.crutch_clock').css('display', 'none');
    removeMenuCenter();
    removeMenu();
    if($('.work').hasClass('active')) {
      removeContent();
      if ($('.skills').hasClass('active')){ 
        $('.menu').removeClass('leftToRight');
        $('.skills').removeClass('active');  
      }else{
        $('.skills').addClass('active');
        $('.menu').addClass('leftToRight');
      }
    } else {
      if($('.about').hasClass('active'))
        $('#aboutMe').hide();
      removeContent();
      if ($('.skills').hasClass('active')){
        $('.menu').removeClass('left');
        $('.skills').removeClass('active');  
      }else{
        $('.skills').addClass('active');
        $('.menu').addClass('left');
      }
    }
  });

  $('.btWork').click( function() {
    $('.theme_color').css('display', 'none');
    $('.crutch_clock').css('display', 'none');
    removeMenuCenter();
    removeMenu();
    if($('.skills').hasClass('active')) {
      removeContent();
      if ($('.work').hasClass('active')){ 
        $('.menu').removeClass('rightToLeft');
        $('.work').removeClass('active'); 
      }else{
        $('.work').addClass('active');
        $('.menu').addClass('rightToLeft');
      }
    } else {
      if($('.about').hasClass('active'))
        $('#aboutMe').hide();
      removeContent();
      if ($('.work').hasClass('active')){ 
        $('.menu').removeClass('right');
        $('.work').removeClass('active'); 
      }else{
        $('.work').addClass('active');
        $('.menu').addClass('right');
      }
    }
  });

  $('.btHome').click(function() {
    $('.theme_color').css('display', 'block');
    $('.crutch_clock').css('display', 'flex');
    if($('.about').hasClass('active')) {
      $('#aboutMe').hide();
      removeContent();     
      $('.menu').addClass('upToCenter');
      removeMenu();
    } else if($('.contact').hasClass('active')) {
      removeContent();
      $('.menu').addClass('downToCenter');
      removeMenu();
    } else if($('.work').hasClass('active')) {
      removeContent();
      $('.menu').addClass('leftToCenter');
      removeMenu();
    } else if($('.skills').hasClass('active')) {
      removeContent();
      $('.menu').addClass('rightToCenter');
      removeMenu();
    } else {
      removeContent();
      setTimeout(removeMenu, 2100);
    }
  });

  
});
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
};

$.fn.animate_Text = function(speed) {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, speed * i);
     });
  });
 };
function writeTextNormal () {
  $('#aboutMe').show();
  $('#aboutMe').animate_Text(120);
};
function writeTextFast () {
  $('#aboutMe').show();
  /*$('#aboutMe').animate_Text();*/
};
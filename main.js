
$(document).ready(function(){
  const container = $(this)

  if (container.width() <= 480) {
    $('.your-class').slick({
      // infinite: false,
      slidesToShow: 1,
      centerMode: true,
      adaptiveHeight: true,
      // variableWidth : true,
    });
  }
})
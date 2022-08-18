$(document).ready(function(){
$('.title').slick({
	arrows:false,
	dots:true,
	adaptiveHeight:true,
});
});

$('.header__burger,.header__top-li-right1').on('click', function() {
$('.header__burger,.header__top-li-right1').toggleClass('active');
$('body').toggleClass('lock')
});
  
 $(document).ready(function() {
	$('.gallery__gal').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
});

$(document).ready(function(){
$('.people__slider').slick({
	arrows:true,
	dots:true,
	adaptiveHeight:true,
});
});
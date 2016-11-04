
// unlike p and div document is not in "" because $(document) passes whole page
$(document).ready(function (){
	// when you click menu icon, it hides or show nav button
	$(".menu-icon").click(function (){
		// alert("hi");  test to check if it works
		$("nav").slideToggle();

// fix bug where nav goes away
$(window).resize(function (){
	// when page is bigger than 768px remove style attr
	var width=$(window).width();
	if(width>768){
		$("nav").removeAttr("style");
	}


});



});




});
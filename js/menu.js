// menu magic by RB
$(".nav-toggle").click(function() {
	$(".line").fadeOut("fast");
	$(".sidemenu").removeClass("side");
	$(".sidemen").removeClass("side");
	$(".body").addClass("freeze");
});
// close the menu
$(".cross").click(function() {
	$(".body").removeClass("freeze");
	$(".line").fadeIn("fast");
	$(".sidemenu").addClass("side");
	$(".sidemen").addClass("side");
});

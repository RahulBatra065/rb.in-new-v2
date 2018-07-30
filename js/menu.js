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

   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        //basically listens to all anchors being clicked on
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            // then takes every single event to make it smooooooooooooth
            // and repeat
        });
    });
});
$(".sidemenu a").click(function() {
    $(".body").removeClass("freeze");
    $(".line").fadeIn("fast");
    $(".sidemenu").addClass("side");
    $(".sidemen").addClass("side");
});
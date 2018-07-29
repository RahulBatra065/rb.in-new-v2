var img = ["1.jpg", "2.jpg", "3.png", "4.png","5.png"]
     function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
document.getElementById('image').src = imgRandom(img);
console.log("Love peeking under the hood?, I have just the job for you! Click here to know more!");
var menu = $('.wrapper div');
// menu magic
$('.nav-toggle').click(function() {
	$('.line').fadeOut("fast");
$('.sidemenu').removeClass('side');
$('.sidemen').removeClass('side');

});
// close the menu
$('.cross').click(function() {
	$('.line').fadeIn("fast");
$('.sidemenu').addClass('side');
$('.sidemen').addClass('side');

});
//auto disappear of menu onLoad Document
$('.sidemenu').addClass('side');
$('.sidemen').addClass('side');
var img = ["1.jpg", "2.jpg", "3.png", "4.png", "5.png"];
function imgRandom(imgArr) {
	return imgArr[Math.floor(Math.random() * imgArr.length)];
}
document.getElementById("image").src = imgRandom(img);
console.log(
	"Love peeking under the hood?, I have just the job for you! Click here to know more!"
);



$('.one').click(function() {
window.location.href = '/work/yearbook';
});
$('.two').click(function() {
window.location.href = '/work/alphanode';
});
$('.three').click(function() {
window.location.href = '/work/iumun';
});
$('.four').click(function() {
window.location.href = '/work/umun';
});
$('.four').click(function() {
window.location.href = '/work/ecomm';
});
$('.five').click(function() {
window.location.href = '/work/farewell';
});
$('.fa-instagram').click(function() {
window.location.href = 'https://www.instagram.com/rahulbatra65/';
});
$('.fa-facebook').click(function() {
window.location.href = 'https://www.facebook.com/rahul.batra.581730';
});
$('.fa-medium').click(function() {
window.location.href = 'https://medium.com/@Retr0Br0';
});
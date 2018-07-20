var img = ["1.jpg", "2.jpg", "3.png", "4.png"]
     function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
document.getElementById('image').src = imgRandom(img);

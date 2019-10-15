function randomWork() {
    var number;
    number = Math.floor(Math.random() * Math.floor(4));
    $('.photo').attr('src', "images/" + number + ".jpg");

    if (number == 1) {
        $('small.name').text('Equilibria 2020')
        $('.gh').attr('href', 'https://github.com/rahulbatra065')
        $('.web').attr('href', 'https://equilibriasse.in')

    }
    if (number == 2) {
        $('small.name').text('TEDx@DPSGurgaon')
        $('.gh').attr('href', 'https://github.com/rahulbatra065')
        $('.web').fadeOut()
    }
    if (number == 3) {
        $('small.name').text('Farewell 2018')
        $('.gh').attr('href', 'https://behance.net/rahulbatra65')
        $('.web').fadeOut()
    }
    if (number == 0) {
        $('small.name').text('Hoodie Project')
        $('.gh').attr('href', 'https://behance.net/rahulbatra65')
        $('.web').fadeOut()
    }
}




randomWork();
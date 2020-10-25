function navigate(url) {
    $("body").removeClass("navigated");
    $("body").addClass("navigate");
    setTimeout(() => {
        window.location.href = url;
    }, 1500);
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

Array.prototype.getRandom = function (test = () => true) {
    var res = this.filter(test);
    return res[randomInt(0, res.length)];
}

Array.prototype.getRandomUnique = function (array, test = () => true) {
    var res = this.getRandom(test);
    for (let i = 0; i < 4 && array.includes(res); i++)
        res = this.getRandom(test);
    return res;
}

function setBars() {
    let stor = window.localStorage;
    $("#health").css("width", (stor.getItem('health') / 2) + "%");
    $("#mental").css("width", (stor.getItem('mental') / 2) + "%");
    $("#energy").css("width", stor.getItem('energy') + "%");
    $("#persdev").css("width", stor.getItem('persdev') + "%");
}
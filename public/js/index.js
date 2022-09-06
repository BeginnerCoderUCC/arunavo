function date() {
    const hi = new Date();
    hours = hi.getHours();
    minutes = hi.getMinutes();
    seconds = hi.getSeconds();
    var full = hours + ":" + minutes + ":" + seconds;
    document.getElementById("so").innerHTML = hours + " : " + minutes + " : " + seconds;
}
setInterval(date, 1000);

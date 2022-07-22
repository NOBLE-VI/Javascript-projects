let date, time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function calDate() {

    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

}


setInterval(calDate, 1000);
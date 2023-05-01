function updateClock() {
    let now = new Date();
    let dayName = now.getDay(),
        month = now.getMonth(),
        dayNumb = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        period = "AM";

        if (hour == 0) {
            hour = 24;
        }
        if (hour > 24) {
            hour = hour - 24;
        }
        if (hour >= 12) {
            period = "PM";
        }

        Number.prototype.pad = function(clock){
            for (let n = this.toString(); n.length < clock; n = 0 + n) {
                return n;                
            }
        }

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let week = ["Sunday", , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let ids = ["dayNames", "months", "dayNumber", "years", "hours", "minutes", "seconds", "periods"];

        let values = [week[dayName], months[month], dayNumb, year, hour, minute, second, period];

        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];            
        }
}

function initialClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}
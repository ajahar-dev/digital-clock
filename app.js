
function updateClock() {
    let now = new Date();
    let d = now.getDate();
    let month = now.getMonth() + 1;
    let y = now.getFullYear()
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    
    
    let ampm = h >= 12? "pm" : "am";
    
    h = h % 12;
    h = h ? h : 12;
    
    month = month < 10? "0" + month : month;
    d = d < 10? "0" + d : d;
    
    h = h < 10? "0" + h : h;
    m = m < 10? "0" + m : m;
    s = s < 10? "0" + s : s;
    
    // update screen
    document.getElementById("date").textContent = d;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = y;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    document.getElementById("ampm").textContent = ampm;

}
updateClock();
setInterval(updateClock, 1000)
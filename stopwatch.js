
let [seconds, minutes, hours] = [0, 0, 0];
let display_time = document.getElementById("timer");

let timer = null;

/********************Creating a Timer******************************/
function stopwatch(){

    seconds++;  
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }

    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    display_time.innerHTML = h +":" + m + ":" + s;
}

/* *********************** Button Functionalities ******************************/
//For pause/stop button
function pause_watch(){
    clearInterval(timer);
}

//For reset button
function reset_watch(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    display_time.innerHTML = "00:00:00";
}

//For start button
function startWatch(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;

let startbtn = document.getElementById('start');
let pausebtn = document.getElementById('pause');
let resetbtn = document.getElementById('reset');

// start btn when strt btn triger then timer will be start//
startbtn.addEventListener('click', function(){
    timer = true;
    stopWatch();
});

// pause btn whene pause btn tirger then timer wil be stop//
pausebtn.addEventListener('click', function(){
    timer = false;
  
});
// when resetbtn will be trigr then timer count are 00.//
resetbtn.addEventListener('click', function(){
    timer = false;
    hour = 0;
    minute = 0 ;
    second = 0;
    millisecond = 0;

    document.querySelector('.hr').innerHTML = 00;
    document.querySelector('.min').innerHTML = 00;
    document.querySelector('.sec').innerHTML = 00;
    document.querySelector('.millsec').innerHTML = 00;
    // stopWatch();
});

function stopWatch(){

if(timer == true){
    millisecond++;

    if(millisecond === 100){
    second++;
    millisecond = 0;
    }

    if(second === 60){
        minute++;
        second = 0;
    }

    if(minute === 60){
        hour++;
        minute = 0;
        second = 0;
    }

    let hr = hour;
    let min = minute;
    let sec = second;
    let milsec = millisecond;

    if(hour <10){
        hr = "0" + hr;
    }

    if(minute < 10){
        min = "0" + min;
    }
    if(second < 10){
        sec = "0" + sec;

    }
    if(millisecond < 10){
        milsec = "0" + milsec
    }

    document.querySelector(".hr").innerHTML = hr;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;
    document.querySelector(".millsec").innerHTML = milsec;
     setTimeout("stopWatch()", 10);
}

}
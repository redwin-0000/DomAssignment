
let minute = 00;
let second = 00;
let millisecond = 00;
let timeend = 1;

let start = document.getElementById('typingfield');

// start btn when strt btn triger then timer will be start//
start.addEventListener('click', function(){
    timer = true;
    stopWatch();

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
   
   
    let min = minute;
    let sec = second;
    let milsec = millisecond;

   
    if(minute < 2){
        min = "0" + min;
      
    }
    if(second < 10){
        sec = "0" + sec;

    }
    if(millisecond < 10){
        milsec = "0" + milsec
    }

  
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;
  
    setTimeout("stopWatch()", 10);

  
}

}

function timeUp(){
        timer = false;
        // minute = 0;
        // second = 0;
        document.getElementById('textOn').innerText = " Time up"
    
}
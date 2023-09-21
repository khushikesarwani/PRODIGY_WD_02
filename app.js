let play=document.getElementById('play');
let lap=document.getElementById('lap');
let reset=document.getElementById('reset');
let sec=0;
let min=0;
let hr=0;
let ms=0;

play.addEventListener('click',()=>{
   if(play.innerHTML=="Play")
   { play.innerHTML="Pause";

     reset.classList.add('showit');
      lap.classList.add('showit');
      runit_ID=setInterval(runit,10);
         
    
    }
    else{
        clearInterval(runit_ID);
        play.innerHTML="Play";
    }


});

reset.addEventListener('click',resetit);
lap.addEventListener('click',lapIt);
function runit(){
    ms+=1;
    if(ms==100){
        sec++;
        ms=0;
    }
    if(sec==60)
    {
        min++;
        sec=0;
    }
    if(min==60)
    {
        hr++;
        min=0;
    }
    
    
    
    
    msec=ms<10?"0"+ms:ms;
    second=sec<10?"0"+sec:sec;
    minute=min<10?"0"+min:min;
    hour=hr<10?"0"+hr:hr;
    let writeIt=document.getElementsByClassName('inner-sw');
    writeIt[0].innerHTML=`${hour}:${minute}:${second}:${msec}`;
    milisec=second=minute=hour="";
} 

function resetit(){
   

    ms=sec=min=hr=0;
    msec=second=minute=hour="00"
    let writeIt=document.getElementsByClassName('inner-sw');
    writeIt[0].innerHTML=`${hour}:${minute}:${second}:${msec}`;

    clearInterval(runit_ID);
    reset.classList.remove('showit');
    lap.classList.remove('showit');
    play.innerHTML="Play";

}
function lapIt(){
    let writeIt=document.getElementsByClassName('inner-sw');
        var y = document.createElement("LI");
        var t = document.createTextNode(writeIt[0].innerHTML);
        y.appendChild(t);
        document.getElementById("lapUl").appendChild(y);
}
/*--------theme---------------*/
let arr=["elephant.jpg","forest.jpg","galaxy.jpg","nature.jpg"];
document.getElementById('theme').addEventListener('click',changeTheme);
let i=0;
function changeTheme()
{  
    let bg=arr[i];
    mymain=document.getElementById('main');
    mymain.style.backgroundImage=`url("./images/`+bg+`")`;
    i++;
    if(i==4)
    i=0;
}
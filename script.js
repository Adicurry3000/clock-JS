
function showCurrentTime(){
    var currentTime = new Date();
   var hours = currentTime.getHours();
   var minutes = currentTime.getMinutes();
   var seconds = currentTime.getSeconds();
   var med = 'AM';

   var clockid = document.getElementById('time');


   if(hours >= 12){
        med = "PM";
   };

   if(hours > 12){
        hours = hours-12;
   };

   if(minutes < 10){
        minutes= '0'+minutes;
   };

   if(seconds < 10){
        seconds= '0'+seconds;
   };

   var clockTime = hours + ':'+ minutes+':' +seconds + med;

   clockid.innerText = clockTime;


};


function updateClock(){

    var time = new Date().getHours();
    showCurrentTime();

};

updateClock();

var onesec =1000;
setInterval(updateClock,onesec);


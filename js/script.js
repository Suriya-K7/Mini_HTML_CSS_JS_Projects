const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function newYearcountdown(){
const currentYear= new Date().getFullYear();
//console.log(currentYear+1);
const newYear= new Date(`January 01 ${currentYear+1} 00:00:00`);
//console.log(newYear);
const currentDate= new Date();
//console.log(currentDate);
const countDown=newYear-currentDate;
//console.log(countDown);
const d = Math.floor(countDown/1000/60/60/24);
//console.log(d);
const h = Math.floor((countDown/1000/60/60)%24);
//console.log(h);
const m = Math.floor((countDown/1000/60)%60);
//console.log(m);
const s = Math.floor((countDown/1000)%60);
//console.log(s);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}
setInterval(newYearcountdown,1000);


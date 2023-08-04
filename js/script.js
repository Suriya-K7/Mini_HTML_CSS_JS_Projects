const hrs=document.querySelectorAll('.h');
const mins=document.querySelectorAll('.m');
const sec=document.querySelectorAll('.s');
const mer=document.querySelectorAll('.merdian span');
const days=document.querySelectorAll('.day span');
const months=document.querySelectorAll('.month span');
const date=document.querySelector('.date');

function runCLock(){
    //date
var time=new Date();
var da=time.getDate();
da=da<10?"0"+da:da;
var mo=time.getMonth()+1;
mo=mo<10?"0"+mo:mo;
var yr=time.getFullYear();
date.innerHTML=`${da}-${mo}-${yr}`;
    //day
    days.forEach((day)=>{
        day.classList.remove('active')
    });
days[time.getDay()].classList.add('active');
    //month
    months.forEach((month)=>{
        month.classList.remove('active')
    });
months[time.getMonth()].classList.add('active');
    //time
var h=time.getHours();
var m=time.getMinutes();
var s=time.getSeconds();
mer.forEach((merdian)=>{
 merdian.classList.remove('active');
})
if (h>12){
    h=h-12;
    mer[1].classList.add('active');
} else {
    if(h==0){
        h=12;
        mer[0].classList.add('active');
    }
}

s=s<10?"0"+s:s;
m=m<10?"0"+m:m;
h=h<10?"0"+h:h;

h=h.toString();
m=m.toString();
s=s.toString();

hrs[0].innerHTML=h[0];
hrs[1].innerHTML=h[1];
mins[0].innerHTML=m[0];
mins[1].innerHTML=m[1];
sec[0].innerHTML=s[0];
sec[1].innerHTML=s[1];


}

setInterval(runCLock,1000);
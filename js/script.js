const generate=document.querySelector('.generate');
const loadcode=document.querySelector('.copy');
const colorcode=document.querySelector('span');
generate.addEventListener('click',()=>{
    var color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16);
    document.body.style.backgroundColor=color;
    colorcode.innerHTML=color;
});
loadcode.addEventListener('click',async ()=>{
    let codehex=colorcode.innerHTML;
    await navigator.clipboard.writeText(codehex);
    alert("Hex code copied");
});
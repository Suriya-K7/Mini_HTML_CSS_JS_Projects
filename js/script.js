const boxLeftSI=document.querySelector('.boxLeftSI');
const boxRightSI=document.querySelector('.boxRightSI');
const boxLeftSP=document.querySelector('.boxLeftSP');
const boxRightSP=document.querySelector('.boxRightSP');
const btnSignUp=document.querySelector('.btnSignUp');
const btnSignIn=document.querySelector('#btnSignIn');
btnSignUp.addEventListener("click",()=>{
    boxLeftSI.classList.add('hidden');
    boxRightSI.classList.add('hidden');
    boxLeftSP.classList.remove('hidden');
    boxRightSP.classList.remove('hidden');
});
btnSignIn.addEventListener("click",()=>{
    boxLeftSI.classList.remove('hidden');
    boxRightSI.classList.remove('hidden');
    boxLeftSP.classList.add('hidden');
    boxRightSP.classList.add('hidden');
});
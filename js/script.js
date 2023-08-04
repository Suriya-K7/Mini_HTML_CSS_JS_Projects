const output=document.querySelector('.output');
const frm=document.querySelector('#frm');
const spinner=document.querySelector('.spinner');
const code=document.querySelector('#qrcode');
const btnSave=document.querySelector('#btn-save');

function generateQrcode(e){
    e.preventDefault();
    const url=document.querySelector('#url').value;
    const size=document.querySelector('#size').value;
    const clrDark=document.querySelector('#clrDark').value;
    const clrLight=document.querySelector('#clrLight').value;
    if(url===""){
        alert('Please enter URL to generate QR code')
    }else{
        spinner.style.display='flex';
        setTimeout(()=>{
            spinner.style.display='none';
            code.innerHTML="";
            const qrcode=new QRCode('qrcode',{
                text: url,
                width: size,
                height: size,
                colorDark : clrDark,
                colorLight : clrLight,
                correctLevel : QRCode.CorrectLevel.H
            });

        },1000);
    };

};
frm.addEventListener('submit',generateQrcode);

btnSave.addEventListener('click',()=>{
    const imgSrc=code.querySelector('img').src;
    btnSave.href=imgSrc;
    btnSave.download='qrcode'
});

const imgmini=document.querySelectorAll('.img a');
const imgDiv=document.querySelectorAll('.img');
let imdId=0;

imgmini.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imdId=img.dataset.id;
        moveImg();
        imgDiv.forEach((im)=>{
            im.classList.remove('active')
        });
        img.parentElement.classList.add('active')
    })
});

function moveImg(){
    const imgWidth=document.querySelector('.main-image img').clientWidth;
    let textwidth=document.querySelector('.right-side').clientWidth;
    let imgMove=imdId*(imgWidth);
    console.log(imgMove);
    document.querySelector('.main-image').style.transform=`translateX(${-imgMove}px)`;
    let moveTxt=imdId*textwidth;
    console.log(moveTxt)
    document.querySelector('.pages').style.transform=`translateX(${-moveTxt}px)`;
}

const addBtn=document.querySelector('.addBtn');
const inputData=document.querySelector('.text');
const boxContainer=document.querySelector('.boxContainer');
const box=document.querySelectorAll('.box');
const removeBtns=document.querySelectorAll('.removeBtn');
const img=document.querySelector('.img');
imgManupulation();
//fetching local storage data
document.addEventListener("DOMContentLoaded",()=>{
    const localStoredValue=[...JSON.parse(localStorage.getItem("activities"))];
    localStoredValue.forEach(items=>{
        const eachLocalValue=items.activity;
        const newItem=document.createTextNode(eachLocalValue);
        const NewItemRow=document.createElement('div');
        NewItemRow.classList.add('box');
        const itemText=document.createElement('div');
        itemText.classList.add('itemText');
        itemText.append(newItem)
        const removeBtn=document.createElement('div');
        removeBtn.classList.add('removeBtn');
        removeBtn.innerText="✖";
        removeBtn.setAttribute("onclick","removeBtn(event)")
        boxContainer.append(NewItemRow);
        NewItemRow.append(itemText);
        NewItemRow.append(removeBtn);
        imgManupulation();
    });

});
// adding new list by clicking add button
addBtn.addEventListener('click',(e)=>{
    if (inputData.value==="") {
        alert('Kindly enter a Validite list');
    }else{
    addNewItems();};
});
// adding new list by keyboard
inputData.addEventListener("keyup",(e)=>{
    if(e.key === "Enter" && inputData.value!="") {
        addNewItems();
        inputData.value="";
    }else if(inputData.value===""){
        alert('Kindly enter a Validite list');
    };
});
// removing list & removig from local storage also
function removeBtn(event){
    const removingItem=event.target.parentNode;
    const removingItemValue=removingItem.children[0].innerText;
    if(confirm("Are you sure?")){
        removingItem.remove();}
    const localStoredValue=[...JSON.parse(localStorage.getItem("activities"))];
    localStoredValue.forEach((item)=>{
        const eachLocalValue=item.activity;
        if(eachLocalValue===removingItemValue){
            localStoredValue.splice(localStoredValue.indexOf(item),1)
        }
    });
    localStorage.setItem("activities",JSON.stringify(localStoredValue));
    imgManupulation();
};
// creatng new items
function addNewItems(){
    const newItem=document.createTextNode(inputData.value.trim());
    const NewItemRow=document.createElement('div');
    NewItemRow.classList.add('box');
    const itemText=document.createElement('div');
    itemText.classList.add('itemText');
    itemText.append(newItem)
    const removeBtn=document.createElement('div');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerText="✖";
    removeBtn.setAttribute("onclick","removeBtn(event)")
    boxContainer.append(NewItemRow);
    NewItemRow.append(itemText);
    NewItemRow.append(removeBtn);
    imgManupulation();
    // adding to local storage
    localStorage.setItem("activities",JSON.stringify([...JSON.parse(localStorage.getItem("activities")||'[]'),{activity:inputData.value.trim()}]))
};
// inserting and removing img-------
function imgManupulation(){
    if(boxContainer.children.length<=0){
        img.classList.add("hidden");
    }else{
        img.classList.remove("hidden");
    }
};
// adding ripple effect to btn
addBtn.addEventListener('mouseover',(e)=>{
    let x=e.pageX - e.target.offsetLeft;
    let y=e.pageY - e.target.offsetTop;
    let color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16);
    let ripple=document.createElement('span');
    ripple.style.left=x+"px";
    ripple.style.top=y+"px";
    ripple.style.borderColor=color;
    e.target.appendChild(ripple);
    setTimeout(()=>{
        ripple.remove()
    },2000)
}
);
addBtn.addEventListener('mouseleave',(e)=>{
    let x=e.pageX - e.target.offsetLeft;
    let y=e.pageY - e.target.offsetTop;
    let color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16);
    let ripple=document.createElement('span');
    ripple.style.left=x+"px";
    ripple.style.top=y+"px";
    ripple.style.borderColor=color;
    e.target.appendChild(ripple);
    setTimeout(()=>{
        ripple.remove()
    },2000)
});

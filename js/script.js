const boxes=document.querySelectorAll('.box');
const buttons=document.querySelectorAll('.btn');
const search=document.querySelector('#search');
const cart=document.querySelector('.cart');
const cartItem=document.querySelector('.cart-items');
const cartClose=document.querySelector('.close');
// search filter function
search.addEventListener('keyup',(e)=>{
    searchText=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchText)){
            box.style.display='block';
        }else{
            box.style.display='none ';
        }
    });
    buttons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    buttons[0].classList.add('active');

});
// button filter function
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        activateBtn(e);
        const btnfilter=e.target.dataset.filter;
        boxes.forEach((box)=>{
            if(btnfilter=='all'){
                box.style.display='block';
            }else{
                const boxfilter=box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display='block';
                }else{
                    box.style.display='none';
                }

            }
        });
    });
});
function activateBtn(e){
    buttons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    console.log(e);
};
cart.addEventListener('click',()=>{
    cartItem.classList.add('active');
});
cartClose.addEventListener('click',()=>{
    cartItem.classList.remove('active');
});
document.addEventListener('DOMContentLoaded',loadFood);
function loadFood(){
    loadContent();
}
function loadContent(){
//calling removing cart items function
    let btnRemoveFood=document.querySelectorAll('.trash');
    btnRemoveFood.forEach((trash)=>{
        trash.addEventListener('click',foodContentRemove);
    });
//calling validating cart items function
let inputValidation=document.querySelectorAll('.cart-qty');
inputValidation.forEach((input)=>{
    input.addEventListener('change',checkQty);
});
// calling add new cart item funtion
let addCarts=document.querySelectorAll('.item-cart');
addCarts.forEach((addcart)=>{
    addcart.addEventListener('click',addfood);
});

updatePrice();

};


/************functions************/
//removing cart items function
function foodContentRemove(){
    if(confirm('are you sure to remove')){
        let title=this.parentElement.querySelector('.cart-food').innerHTML;
        console.log(title);
        itemList=itemList.filter(e=>e.title!=title);
        console.log(itemList);
        this.parentElement.remove();
        loadContent();
    }
};

//validating cart items function
function checkQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    };
    loadContent();   
};
//validating cart items 
let itemList=[];

//adding cart items function
function addfood(){
let food=this.parentElement;
let title=food.querySelector('h5').innerHTML;
let price=food.querySelector('span').innerHTML;
let imgSrc=food.querySelector('img').src;

let foodElements={title,price,imgSrc};

if(itemList.find((el)=>el.title==foodElements.title)){
    alert('this items already added to cart!');
    return;
}else{
    itemList.push(foodElements);
};

let element=document.createElement('div');
element.innerHTML=createCartfood(title,price,imgSrc);
let addingCartItem=document.querySelector('.cart-content');
addingCartItem.append(element);
loadContent();
};

function createCartfood(title,price,imgSrc){
    return `
    <div class="cart-box">
          <img src="${imgSrc}" class="cart-img" />
          <div class="detail-box">
            <div class="cart-food">${title}</div>
            <div class="price-box">
              <div class="cart-price">${price}</div>
              <div class="cart-total">${price}</div>
            </div>
            <input type="number" value="1" class="cart-qty" />
          </div>
          <ion-icon name="trash" class="trash"></ion-icon>
    </div>`
};

//Updatin cart price

function updatePrice(){
    const totalPrice=document.querySelector('.total-price');
    const cartBoxes=document.querySelectorAll('.cart-box');
    let total=0;
    cartBoxes.forEach(cartbox=>{
        let cartPrice=cartbox.querySelector('.cart-price');
        let price=parseFloat(cartPrice.innerHTML.replace("Rs.",""));
        let qty=cartbox.querySelector('.cart-qty').value;
        total+=(qty*price);
        cartbox.querySelector('.cart-total').innerText="Rs."+(qty*price);     
    });
    totalPrice.innerHTML="Rs."+total;
    const cartCount=document.querySelector('.cart-count');
    let count=itemList.length;
    cartCount.innerHTML=count;
    if(count==0){
        cartCount.style.visibility='hidden';
    }else{
        cartCount.style.visibility='visible';
    };

    const btnBuy=document.querySelector('.btn-buy');
    const buyBtnElement=document.querySelector('.buyBtn');
    btnBuy.addEventListener('click',()=>{
        count=itemList.length;
        if(count==0){
            alert('Please select items');
        }else{
            buyBtnElement.classList.add('active');
        }
    });
    buyBtnElement.addEventListener('click',()=>{buyBtnElement.classList.remove('active');
    });
    
};

// const btnBuy=document.querySelector('.btn-buy');
// const buyBtnElement=document.querySelector('.buyBtn');
// if(count==0){
//     alert('Please select items');
// }else{
//     btnBuy.addEventListener('click',()=>{
//         buyBtnElement.classList.add('active');
//     });
// }
// buyBtnElement.addEventListener('click',()=>{
//     buyBtnElement.classList.remove('active');
// });





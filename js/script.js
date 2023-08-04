const tagContainer=document.querySelector('.tagcontainer');
const input=document.querySelector('.tagcontainer input');
const deleteAll=document.querySelector('.deleteAll');
const copyAll=document.querySelector('.copyAll');
const tagRemoveBtn=document.querySelectorAll('.tagRemoveBtn');
let tags=[];
input.addEventListener('keyup',(e)=>{
    if(e.key=="Enter"){
        let data=input.value.trim();
        if(data==""){
            alert('please enter valid data')
            return;
        }
        if(input.value.includes(',')){
            let listOfTatgs=data.split(',');
            tags.push(...listOfTatgs);
        }else{
            let singleTag=data;
            tags.push(singleTag)     
        }
        const allTagsLists=document.querySelectorAll('.tag');
        tags=[...new Set(tags)];
        allTagsLists.forEach((eachTags)=>{
            eachTags.remove();
        })   
        tags.slice().reverse().forEach((tag)=>{
            updateTextTag(tag);
            input.value='';
        }) 
    }
});
deleteAll.addEventListener('click',function(){
    const createdTags=document.querySelectorAll('.tag')
    createdTags.forEach((item)=>{
        item.remove();
    })   
    tags=[];
})
tagContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LORD-ICON"){
        let removingTag=e.target.getAttribute('data-items');
        tags=tags.filter((tag)=>{
            return tag!=removingTag;
        })
        const allTagsLists=document.querySelectorAll('.tag');
        tags=[...new Set(tags)];
        allTagsLists.forEach((eachTags)=>{
            eachTags.remove();
        })   
        tags.slice().reverse().forEach((tag)=>{
            updateTextTag(tag);
            input.value='';
        }) 
    }
})
function updateTextTag(data){
    const div=document.createElement('div');
    div.classList.add('tag');
    div.innerHTML=`<span>${data}</span>
    <lord-icon
      src="https://cdn.lordicon.com/jfhbogmw.json"
      trigger="hover"
      data-items="${data}"
    ></lord-icon>`;
    tagContainer.prepend(div);
};
copyAll.addEventListener('click',()=>{
    if(tags.length){
        navigator.clipboard.writeText(tags.toString()).then(()=>{
            console.log('code copied');
        }).catch((error)=>{
            console.error('failed to copy', error);
        })
    }
});

/*
        <div class="tag">
          <span>HTML</span>
          <lord-icon
            src="https://cdn.lordicon.com/jfhbogmw.json"
            trigger="click"
          >
          </lord-icon>
        </div>
*/
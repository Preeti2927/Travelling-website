Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(el)=>{
        if(e.value.length>0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";
        }else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(0deg)";
        }
    })
})

let menu_btn=document.getElementsByClassName('bi-three-dots-vertical')[0];
let menu=document.getAnimations('menu');

menu_btn.addEventListener('click',()=>{
 menu.classList.toggle('ul_active');
})
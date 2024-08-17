//modal
const modal=document.querySelector('.modal')
const modalTrigger=document.querySelector('#btn-get')
const modalContent=document.querySelector('.modal_content')
const modalCloseButton=document.querySelector('.modal_close')

const openModal=()=>{
    modal.style.display='block'
    document.body.style.overflow="hidden"

}
// modalTrigger.onclick=()=>{
//     modal.style.display='block'
// }

const closeModal=()=>{
    modal.style.display='none'
    document.body.style.overflow=''
}

//ADDEVENTLISTENER SCROLL
const checkScroll=()=>{
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        openModal();
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);

//
modalTrigger.onclick=()=>openModal()
modalCloseButton.onclick=()=>closeModal()
modal.onclick=(event)=>{
    if (event.target===modal){
        closeModal();
    }
};


setTimeout(()=>{
    openModal()
}, 1000);
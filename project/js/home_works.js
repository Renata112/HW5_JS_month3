//MOVE BLOCK CLASS WORK

const parentBlock=document.querySelector('.parent_block');
const childBlock=document.querySelector('.child_block');

let positionX=0;
let positionY=0;

const offsetWidth=parentBlock.offsetWidth-childBlock.offsetWidth;
const offsetHeight=parentBlock.offsetHeight-childBlock.offsetHeight;

const moveBlock=() => {

    if (positionX<offsetWidth && positionY===0) {
        positionX++;
        childBlock.style.left=`${positionX}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX>=offsetWidth && positionY< offsetHeight){
        positionY++
        childBlock.style.top=`${positionY}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX >0 && positionY >0) {
        positionX--;
        childBlock.style.left=`${positionX}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX ===0 && positionY >0) {
        positionY--;
        childBlock.style.top=`${positionY}px`;
        requestAnimationFrame(moveBlock)
    }
}
    moveBlock();

//сокращенно
// const moveBlock=() => {
//     requestAnimationFrame(moveBlock)
//     childBlock.style.left=`${positionX}px`;
//     childBlock.style.top=`${positionY}px`;
//
//     if (positionX<offsetWidth && positionY===0) positionX++;
//      else if (positionX>=offsetWidth && positionY< offsetHeight) positionY++
//      else if (positionX >0 && positionY >0) positionX--;
//      else if (positionX ===0 && positionY >0) positionY--;
// }
// moveBlock();
//

//CHARACTERS. HW 4.1

document.addEventListener('DOMContentLoaded',()=>{
    const charactersContainer=document.querySelector('.characters_container');

    const request=new XMLHttpRequest()
    request.open('GET','../data/characters.json');
    request.setRequestHeader('Content-type','application/json');
    request.send();

    request.onload= ()=>{
        if(request.status >=200 && request.status < 400){
            console.log('Response text:', request.responseText);
            const characters=JSON.parse(request.responseText);

            characters.forEach((character) => {
                const characterBlock = document.createElement('div');
                characterBlock.classList.add('character_block');

                characterBlock.innerHTML = `
                    <div class="character_photo">
                        <img src="${character.photo}" alt="${character.name}"/>
                    </div>
                    <h2>${character.name}</h2>
                    <p id="age_part">Age: ${character.age}</p>
                    <p id="bio_part">Bio: ${character.bio}</p>  
                    `;
                const h2Element = characterBlock.querySelector('h2');
                const pElements = characterBlock.querySelectorAll('p');

                if (h2Element) {
                    h2Element.style.color = 'white';
                }

                pElements.forEach(p => {
                    p.style.color = 'white';
                });
                charactersContainer.append(characterBlock);
            });
        } else {
            console.error('Request failed with status:', request.status);
        }
    };
    request.onerror = () => {
        console.error('Request failed.');
    };
});



//JSON INFO. HW 4.2

document.addEventListener("DOMContentLoaded",()=>{
    const request=new XMLHttpRequest();
    request.open('GET','../data/any.json');
    request.setRequestHeader('Content-type','application/json');
    request.send();
    request.onload=()=>{
        if(request.status >=200 && request.status < 400){
            console.log('OK', request.responseText);
        } else {
            console.error('ERROR', request.status);
        }
    }
})









//move block

// document.addEventListener('DOMContentLoaded', () => {
//
//     const parentBlock=document.querySelector('.parent_block');
//     const childBlock=document.querySelector('.child_block');
//
//     let positionX=0
//     let positionY=0
//
//     const moveBlock=() => {
//         if (positionX < parentBlock.offsetWidth - childBlock.offsetWidth) {
//             positionX++;
//             childBlock.style.left = `${positionX}px`;
//             requestAnimationFrame(moveBlock);
//         }
//     };
//     moveBlock();
// });

//GMAIL VALIDATION
const gmailInput
    =document.querySelector('#gmail_input');
const gmailButton=document.querySelector('#gmail_button');
const gmailSpan=document.querySelector('#gmail_result');

const regExp=/^[a-zA-Z0-9._%+-]{2,}@gmail\.com$/;

gmailButton.onclick= () =>{
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML='OK'
        gmailSpan.style.color='green'
    } else {
        gmailSpan.innerHTML='NOT OK'
        gmailSpan.style.color='red'
    }
};

//COUNTER
document.addEventListener('DOMContentLoaded', () => {
    const startButton= document.querySelector('#start');
    const stopButton=document.querySelector('#stop');
    const resetButton=document.querySelector('#reset');
    const secondDisplay=document.querySelector('#seconds');

    let counter=0;
    let intervalId=null;

    const startCounter = () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                counter++;
                secondDisplay.textContent = counter;
            }, 1000);
        }
    };

const stopCounter = ()=> {
    if (intervalId){
        clearInterval(intervalId);
        intervalId=null;
    }
};

const resetCounter= ()=> {
    stopCounter();
    counter=0;
    secondDisplay.textContent=counter;
};

startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);
});

//MOVE BLOCK 2
// document.addEventListener('DOMContentLoaded', () => {
//
//     const parentBlock=document.querySelector('.parent_block');
//     const childBlock=document.querySelector('.child_block');
//
//     let positionX=0
//     let positionY=0
//     let directionX=1
//     let directionY=1
//
//
//     const moveBlock=() => {
//         if (positionX+ directionX > parentBlock.offsetWidth - childBlock.offsetWidth || positionX+directionX<0) {
//             directionX=-1
//         }
//         if (positionY+directionY > parentBlock.offsetHeight - childBlock.offsetHeight || positionY+directionY<0) {
//             directionY=-1
//         }
//         positionX+=directionX;
//         positionY+=directionY;
//
//
//         childBlock.style.left='${positionX}px';
//         childBlock.style.top=`${positionY}px`;
//
//         requestAnimationFrame(moveBlock)
//
//     };
//     moveBlock();
// });


let container = document.querySelector('.container');

container.addEventListener('click',(e)=>{
    let div = document.createElement('div');
    div.classList.add('active');
    div.style.top = `${e.clientY}px`
    div.style.left = `${e.clientX}px`
    container.appendChild(div);

    setTimeout(() => {
        container.removeChild(div);
    }, 1500);

})
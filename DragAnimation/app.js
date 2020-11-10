let drag = document.querySelector('.drag');
let drop1 = document.querySelector('.drop1');
let drop2 = document.querySelector('.drop2');
let future = document.querySelector('.future');


drag.addEventListener('dragstart', dragStart);
drag.addEventListener('drag', dragEl);
drag.addEventListener('dragend', dragEnd);



// QUAND DRAGSTART FUTURE EST SUR DRAG
// FUTURE ROTATE +  = DRAGPOSITION


function dragStart (){
    setTimeout( function () {
        drag.classList.add('drag-hide');
    }, 0)    
}


function dragEl (e){
    let initialFuturePos = window.innerWidth + (0.1 * window.innerWidth)  ;
    future.style.transform = 'translateX(-' + -(e.clientX - initialFuturePos) +'px) ';
}



function dragEnd() {
    drag.classList.remove('drag-hide');
}






// Drop1
drop1.addEventListener('dragover', dragOver, false);
drop1.addEventListener('dragenter', dragEnter, false);
drop1.addEventListener('dragleave', dragLeave, false);
drop1.addEventListener('drop', dropDrag, false);

// Drop2
drop2.addEventListener('dragover', dragOver, false);
drop2.addEventListener('dragenter', dragEnter, false);
drop2.addEventListener('dragleave', dragLeave, false);
drop2.addEventListener('drop', dropDrag, false);

function dragOver (event){
    event.preventDefault();
}
function dragEnter (event) {
    event.preventDefault();
}

function dragLeave () {
    
}
function dropDrag () {
    this.append(drag);
    
}

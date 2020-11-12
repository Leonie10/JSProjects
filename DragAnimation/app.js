let drag = document.querySelector('.drag');
let drop1 = document.querySelector('.drop1');
let drop2 = document.querySelector('.drop2');
let future = document.querySelector('.future');
let translate, translateX;
let initialFuturePos = window.innerWidth + (0.1 * window.innerWidth);


drag.addEventListener('dragstart', dragStart);
drag.addEventListener('drag', dragEl);
drag.addEventListener('dragend', dragEnd);


function dragStart (){
    setTimeout( function () {
        drag.classList.add('drag-hide');
    }, 0)    
}


function dragEl (e){
    stopTranslate(e);
    future.style.transform = 'translateX('+ translateX +'px)' ;
}


function dragEnd() {
    drag.classList.remove('drag-hide');
}



function stopTranslate (e) {
    translate = e.clientX - initialFuturePos;
    if(-translate < window.innerWidth){
        translateX = translate;
    } else if( -(translate + 3) === window.innerWidth ){
        translateX = 0;
    } 
    return translateX;
}


drop1.addEventListener('dragover', dragOver, false);
drop1.addEventListener('dragenter', dragEnter, false);
drop1.addEventListener('dragleave', dragLeave, false);
drop1.addEventListener('drop', dropDrag, false);


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
function dropDrag (e) {
    if ( this.classList[1] === 'drop2'){
        future.style.transform = 'translateX(0px)';
        future.style.left = '100%';
    } else if(e.clientX < (window.innerWidth / 2)){
        future.style.transform = 'translateX(' + -window.innerWidth + 'px)';
    }
    this.append(drag);
}


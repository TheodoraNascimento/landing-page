const arrowNext = document.querySelector(".arrow-next")
const arrowPreview = document.querySelector(".arrow-preview")
const imgProject = document.querySelectorAll(".img-projects")


let activeImg = 0
arrowNext.addEventListener('click', function(){
    if(activeImg === (imgProject.length - 1)){
        return;
    } else {

        addOpacityActiveImg();
        activeImg++
        imgProject[activeImg].classList.add("first")
        removeOrAddOpacityArrow()
    }
})

arrowPreview.addEventListener('click', function(){
    if(activeImg === 0){
        return;
    } else {

        addOpacityActiveImg();
        activeImg --
        imgProject[activeImg].classList.add("first")
        removeOrAddOpacityArrow()
    }
})


function addOpacityActiveImg(){
   const activeProject = document.querySelector(".first")
   activeProject.classList.remove("first")
}

function removeOrAddOpacityArrow(){
    if(activeImg !== 0){
        arrowPreview.classList.remove('disable');
    }else{
        arrowPreview.classList.add('disable');
    }

    if(activeImg !== 0 && activeImg === imgProject.length - 1){
        arrowNext.classList.add('disable');
        }else{
            arrowNext.classList.remove("disable");
        }
    }

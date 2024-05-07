const slideShowsElements = document.querySelectorAll(".items");

console.log(slideShowsElements);

let countElement = 1;
setInterval(()=>{
    countElement ++;
    const currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if(countElement > slideShowsElements.length){
        slideShowsElements[0].classList.add("current");
        countElement = 1;
    }
    else{
        currentElement.nextElementSibling.classList.add("current");
    }
    
}, 3000)